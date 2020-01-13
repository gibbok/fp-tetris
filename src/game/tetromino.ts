import { TetroEnum, Tetro, DirectionEnum, Board, Tile } from './types';
import { randomInt } from 'fp-ts/lib/Random';
import { IO, io } from 'fp-ts/lib/IO';
import { none, some, Option } from 'fp-ts/lib/Option';
import { pieces } from './pieces';

export const getTetroFromPieces = (t: TetroEnum, d: DirectionEnum): Tetro => pieces[t][d];

export const getRandomTetro = (): IO<Tetro> => {
  const rndInt = randomInt(0, Object.keys(TetroEnum).length - 1)();
  const rndEnum = Object.keys(TetroEnum)[rndInt];
  return io.of(pieces[rndEnum as TetroEnum][DirectionEnum.N]);
};

export const getBlockFromBoard = (x: number, y: number, b: Board): Option<Tile> => {
  const r = b && b[y] ? some(b[y][x]) : none;
  return r;
};

export const canTetroFitBoard = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board
) => {
  const tetroBlocks = getTetroFromPieces(t, d);
  const tetroHeight = tetroBlocks.length - 1;
  const tetroWidth = tetroBlocks[0].length - 1;

  const boardHeight = b.length - 1;
  const boardWidth = b[0].length - 1;

  const isValidY = y >= 0 && y <= boardHeight;
  const isValidX = x >= 0 && x <= boardWidth;
  const isValidHeight = y + tetroHeight <= boardHeight;
  const isValidWidth = x + tetroWidth <= boardWidth;

  return isValidY && isValidX && isValidWidth && isValidHeight && isValidWidth;
};

export const isOccupied = (
  t: TetroEnum,
  d: DirectionEnum,
  x: number,
  y: number,
  b: Board
): boolean => {
  const canFit = canTetroFitBoard(t, d, x, y, b);
  if (!canFit) {
    return true;
  }
  const hasCollisionWithBoard = getTetroFromPieces(t, d).some((tetroRow, tetroRowIdx) => {
    const resultTetroRow = tetroRow.some((tetroCell, tetroCellIdx) => {
      const futureBoardTetroY = y + tetroRowIdx;
      const futureBoardTetroX = x + tetroCellIdx;
      const futureBoardCell = b[futureBoardTetroY][futureBoardTetroX];
      const hasTetroCellValue = tetroCell !== 0;
      const hasFutureBoardCellValue = futureBoardCell !== 0;
      return hasTetroCellValue && hasFutureBoardCellValue;
    });
    return resultTetroRow;
  });

  return hasCollisionWithBoard;
};

export const rotateTetroDirectionCW = (d: DirectionEnum) => {
  const values = Object.values(DirectionEnum);
  const index = values.indexOf(d);
  const next = values[index + 1];
  const newDirection = next === undefined ? values[0] : next;
  return newDirection;
};

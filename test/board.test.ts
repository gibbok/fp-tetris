import { mkEmptyBoard, addTetroToBoard, getCompleteLineIdxs } from '../src/board';
import {
  BOARD_EMPTY,
  BOARD_ROW_EMPTY,
  BOARD_FULL_S,
  BOARD_ROW_S,
  BOARD_HALF_S_Y
} from './data.support.test';
import { TetroEnum, DirectionEnum, I, Board, S } from '../src/types';

describe('board', () => {
  describe('mkEmptyBoard', () => {
    it('sould return empty board', () => {
      expect(mkEmptyBoard(20)(10)).toEqual(BOARD_EMPTY);
    });
  });

  describe('addTetroToBoard', () => {
    it('sould return new board with locked tetro', () => {
      const test = addTetroToBoard(TetroEnum.I)(DirectionEnum.E)(1)(1)(BOARD_EMPTY);
      const result: Board = [
        BOARD_ROW_EMPTY,
        [0, I, I, I, I, 0, 0, 0, 0, 0],
        ...Array(18).fill(BOARD_ROW_EMPTY)
      ];
      expect(test).toEqual(result);
    });

    it('sould return new board with locked tetro overwritting any present tetro', () => {
      const test = addTetroToBoard(TetroEnum.I)(DirectionEnum.E)(0)(0)(BOARD_FULL_S);
      const result: Board = [[I, I, I, I, S, S, S, S, S, S], ...Array(19).fill(BOARD_ROW_S)];
      expect(test).toEqual(result);
    });
  });

  describe('getCompleteLineIdxs', () => {
    it('should return an empty array of full line positions if not found', () => {
      expect(getCompleteLineIdxs(BOARD_EMPTY)).toEqual([]);
    });

    it('should return an array of full line positions if foundu any', () => {
      expect(getCompleteLineIdxs(BOARD_HALF_S_Y)).toEqual([
        ...Array(14)
          .fill(0)
          .map((_x, idx) => idx + 6)
      ]);
    });
  });
});

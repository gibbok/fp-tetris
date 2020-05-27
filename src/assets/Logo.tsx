import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import { PaletteEnum } from '../game/settings';

const COLOR_MAIN = PaletteEnum.Cedar;
const ANIM_DURATION_S = 4;

const STYLE_PATH = {
  stroke: COLOR_MAIN,
  fill: 'transparent',
};

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export function Logo({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="509.06"
      height="207.94"
      viewBox="0 0 509.06 207.94"
    >
      <Timeline
        duration={ANIM_DURATION_S}
        target={
          <>
            <path
              {...STYLE_PATH}
              d="M491 35.3c17.35.68 22.76-26.56 2.74-26.56C476.47 8 471.3 35.37 491 35.3zM68.9 29.39q0-5.57-.85-7.29c-9.15-2.31-23.49 0-30.5 4.46l-.18 1.2c9.41 10.42.7 26.8-4.71 53.63q-8.82 34.11-9.66 44.9c8.61 1.5 19.23-.42 26.73-2.4-.6-12.03 18.8-84.23 19.17-94.5z"
            ></path>
            <path
              {...STYLE_PATH}
              d="M383.17 106.18c.13-.18.25-.37.38-.57 0 .17-.07.34-.1.5m0 0c-2.32 12.37-2.27 12.39-1.95 20.35q17.31 0 24.51-2.74 0-12.34 9.42-53.81c38.51-21.7-15.31 58 19.62 57.92 11.79-.28 22.32-9.55 31.71-15.23-1.27 25.3 29.69 13.1 39.52 2.72l-2.92-6c-3 1.6-10 4.65-9.94 4.28-6.87-12.27 14.86-49.95 5.49-62.89q-20.4 0-29.48 2.57l-.17 2.23c9.4 12.95 6.12 17.61 1.72 36.41-1.08 2.26-2.23 12.9-3.49 11.12-24.08 16.66-22.71 13.67-16.07-16.04 11.29-34.33-3.18-48.55-33.59-27 6.53-33.36 12.36-44.46 8.06-60a77 77 0 00-25.19 4.63c4.71 17.1-9.79 65.54-15.36 93.46-7.3 3-20.82 16.79-32.68 16.72-21.35 3.09-13.75-65.08 6.68-55.35l-2.57 15.08c3.7 3.69 13.34 6.6 18.51 6.51 25.43-40.11-61.95-47.63-60.28 14.19-3.62 6.07-20.23 20.38-30.33 19.57-21.36 3.08-13.76-65.08 6.68-55.35l-2.57 15.08c3.69 3.69 13.33 6.6 18.5 6.51 22.63-35.87-42.8-43.25-55.71-8.37a87.85 87.85 0 01-12.31 1.52c.08-20.19-6.71-29.47-20-24-31.5-5.33-49.17 28.08-43.69 55.84l-18.68 7.56q-1.55 0-1.54-6.43C154.7 93.83 178.56 13.09 170.86 0a76.58 76.58 0 00-25 4.63c2.66 18.18-1.47 32.71-7.58 63.38-10.18-.89-19.41.42-30.63 3.27q-7.36-7.53-19.88-9.42a51.73 51.73 0 0020.57-11.65C120.57 39 118.93 16.2 103 8.74q-13.36-7.2-36.15-7.2-29.65 0-48.32 11.05c-23.35 11.1-25.78 44.32-.69 50.3a25.75 25.75 0 004.63-12.68c-16.72-4.77-13.58-21.64 2.65-30C37.49 12 69 7.94 82.87 16.45c14.95 9.84 4.69 40.8-12.77 39.76a20.55 20.55 0 00-.51 10.1c8.06-.37 14.06 3.37 17.13 11.49C68.18 85.51 49.56 112 66 129c28.42 20.87 59.31-19.43 47.64-48.07 6.07-2 15.54-2.23 22.16-1.51q-5.88 27.54-5.89 33.47c1.38 28.42 35.75 8.73 47.08-1.19 6.68 21.48 36.82 20.52 48.37 2.9a73.11 73.11 0 0013.19-31.27c3.17-.63 7.16-1.41 10.05-2.17-11.14 56 36.71 58.44 67.15 23.72 7.89 38.73 49 21.23 67.43 1.35m-297.65 5.24c-12.23 24.69-26-10.13 3.42-22a48.19 48.19 0 01-3.42 22zM222 103.84c-9.35 14.91-23.38 12-22.36-9.25-.13-10.42 4-37.09 15.07-36-6.65 12.32-3.24 26.68 15.25 25.71a61.62 61.62 0 01-7.96 19.54zM359 154.7c-2.75 0-6.16 1.67-10.26 5a12.36 12.36 0 00-1.12-4.71q-9.49 0-13.25 1.19l-.08 1c9 10.74-6 39.39-2.87 50.69a35.39 35.39 0 0011.09-2.16c-.64-8.6 5.91-34.16 6.23-42.06 12.86-10.6 8.92 26.24-1.36 22.9l-.56 3.12c21.4 10.4 29.62-33.54 12.18-34.97z"
            ></path>
            <path
              {...STYLE_PATH}
              d="M428 182.73c-3.17 1.19-6.19-.36-11.37-1.92 2.62-3.61 11.38-15.71 15-19.62l-.64-2.28c-5.29 1.05-18.94-1.74-23.47.57a27.34 27.34 0 00.36 9c4.72-2.38 6.55-1.68 13.22-2a74.26 74.26 0 01-10.38 12.73c-2.62-.7-5.51 2.19-6.94 4.47l-.17-.28c-3.47 1.25-4.5 3.22-4.76 0-.11-2 4.43-22.22 4-24.42-3.89-.09-8.78.25-10.31 1 .4 3-2.78 17.37-4 22.82-13.88 8.27.92-19.34-2.56-23.89a65.72 65.72 0 00-12.73 1l-.07.92c6.17 4.59-2 18-1.14 23.86.46 9.38 10.32 6.8 16.14 1.6 1.85 7.41 10 4.74 15.38.47 3 4.14 4.49 4.87 8.16-.61 9.75 3.76 19.16 12.37 20.05-5.69l-2.13-.5a10.87 10.87 0 01-1.64 2.77zM457.48 182.73c-3.18 1.19-6.2-.36-11.38-1.92 2.63-3.61 11.38-15.71 15-19.62l-.64-2.28c-5.29 1.05-18.94-1.74-23.46.57a27.32 27.32 0 00.35 9c4.72-2.38 6.56-1.68 13.23-2a74.26 74.26 0 01-10.38 12.73c-2.82-1.05-7.46 4-7.68 6.19 1.76 4.52 4.92 7.2 8.67.78 9.76 3.76 19.17 12.37 20.06-5.69l-2.14-.5a10.92 10.92 0 01-1.63 2.74zM480.59 141.35a6.18 6.18 0 00-.72-3.48 31.85 31.85 0 00-10.38 1.92c1.09 7.58-.55 13.25-3.09 26.06-5.87 21.46-4.87 32.39 13.9 19.87l-1.3-2.49-5 1.77c-.42 0-.64-.89-.64-2.67-.12-3.26 8.06-37.33 7.23-40.98z"
            ></path>
            <path
              {...STYLE_PATH}
              d="M502.84 175.55c16.78-11.84-4.5-24.25-15.82-11.83-14.54 16.62 1.56 38.54 19.73 20.72l-1.7-2.27c-4.4 4.18-13 5.71-13.16-3.28a30.31 30.31 0 0010.95-3.34zm-11-.14c.1-3.51 1.12-12.94 5.62-13.15q2.26 0 2.27 3.84c.04 5.02-3.06 8.47-7.91 9.31z"
            ></path>
          </>
        }
      >
        <Tween
          from={{
            svgDraw: [0, 0.5],
          }}
          to={{
            svgDraw: [1, 0],
          }}
          duration={1.25}
        ></Tween>
        <Tween to={{ fill: COLOR_MAIN }} duration={2} />
      </Timeline>
    </svg>
  );
}

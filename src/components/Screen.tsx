import * as React from 'react';
import { ScreenEnum } from '../game/types';
import styled from 'styled-components';
import { ScreenIntro } from './ScreenIntro';
import { ScreenGame } from './ScreenGame';
import { ScreenOver } from './ScreenOver';
import { wood } from '../assets/images';
import { ScreenTransaction } from '../components/ScreenTransaction';

const StyledScreen = styled.div`
  background-color: #d7b185;
  background-image: url(${wood});
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: -5rem;
`;

export const Screen = ({ screen }: { screen: ScreenEnum }) => (
  <StyledScreen>
    <ScreenTransaction
      current={screen}
      intro={<ScreenIntro />}
      game={<ScreenGame />}
      over={<ScreenOver />}
    />
  </StyledScreen>
);

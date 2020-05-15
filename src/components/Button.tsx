import styled from 'styled-components';
import React from 'react';

const ButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  display: block;
  font-size: 2.5rem;
  color: white;
  background: linear-gradient(
    0deg,
    rgba(50, 140, 0, 1) 0%,
    rgba(62, 171, 3, 1) 25%,
    rgba(69, 188, 4, 1) 85%,
    rgba(63, 173, 2, 1) 100%
  );
  border-radius: 0.6rem;
  box-shadow: 0 4px 7px 0px #165801, inset 0px 0px 4px 0px #1a6f00;
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
`;

type Props = Readonly<{
  children?: React.ReactNode;
  onClick: () => void;
}>;

export function Button({ children, onClick }: Props) {
  return (
    <ButtonStyled onClick={onClick}>
      <Content>{children}</Content>
    </ButtonStyled>
  );
}

import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed !important;
  right: 0;
  left: 0;

  z-index: 11 !important;

  ${({ onTop }) =>
    onTop &&
    css`
      top: 0;
    `}

  ${({ position }) =>
    position &&
    css`
      position: ${position} !important;
    `}
`;

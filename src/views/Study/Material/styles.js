import styled, { css } from "styled-components";

export const Content = styled.div``;

export const IFrames = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 20px;

  iframe {
    transition: transform 0.5s, opacity 0.3s;
    margin: auto;
    border-radius: 8px;
    opacity: 0.5;

    ${({ selected }) =>
      selected &&
      css`
        transform: scale(2);
        opacity: 1;
      `}

    :hover {
      transform: scale(1.5);
      opacity: 1;
    }
  }
`;

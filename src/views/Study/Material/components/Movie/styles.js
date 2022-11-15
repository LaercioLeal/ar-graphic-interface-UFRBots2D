import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;

  box-shadow: ${transparentize(0.3, themes.colors.info)} 0px 1px 2px 0px,
    ${transparentize(0.15, themes.colors.info)} 0px 1px 3px 1px;

  background-color: ${transparentize(0.85, themes.colors.info)};

  transition: transform 0.5s;
  :hover {
    transform: scale(1.05);
  }

  div {
    :last-child {
      display: flex;
      justify-content: flex-start;
    }
  }

  svg {
    color: ${themes.colors.blue};
  }

  button {
    height: 40px;
    margin-bottom: 0;
    :first-child {
      margin-right: 10px;
      svg {
        color: white;
      }
    }
  }

  iframe {
    width: 100%;
    border-radius: 8px;
  }
`;

export const Info = styled.p`
  line-height: 24px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.bold};

  margin: 10px 0 10px;
  color: ${themes.colors.gray};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(14)};
  `}
`;

import styled from "styled-components";
import { rem } from "polished";
import themes from "Provider/themes";

export const Container = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const Obs = styled.p`
  font-size: ${rem(9)};
  color: ${themes.colors.blue};
  font-weight: ${themes.fonts.text};
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  button {
    width: 20%;

    :last-child {
      width: 30%;
    }
    ${themes.medias.lessThan("hd")`
      width: 15%;

      :last-child {
        width: 30%;
      }
    `}
  }

  svg {
    margin-left: 10px;
  }

  .MuiInputBase-root {
    height: 39px !important;
  }
`;

export const Title = styled.h1`
  margin: 20px 0;

  line-height: 22px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.darkblue};
`;

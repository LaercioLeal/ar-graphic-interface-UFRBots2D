import styled, { css } from "styled-components";
import themes from "Provider/themes";
import { rem, transparentize } from "polished";

const textStyle = css`
  line-height: 24px;
  font-size: ${rem(14)};
  font-family: ${themes.fonts.bold};

  color: ${transparentize(0.5, themes.colors.gray)};
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
  background-color: ${themes.colors.white};
  border: 1px solid ${themes.colors.lightGray};

  ${textStyle}
  color: ${transparentize(0.2, themes.colors.gray)};

  :focus {
    outline: none !important;
    border: 1px solid ${themes.colors.blue};
    box-shadow: 0 0 10px #719ece;
  }

  ::placeholder {
    color: ${themes.colors.lightGray};
  }
`;

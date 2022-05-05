import styled from "styled-components";
import { rem } from "polished";
import themes from "Provider/themes";

export const Container = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  button {
    width: 31%;
  }

  .MuiInputBase-root {
    height: 39px !important;
  }
`;

export const Title = styled.h1`
  line-height: 22px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.bold};

  color: ${({ memory }) =>
    !!memory ? themes.colors.primary : themes.colors.darkblue};
`;

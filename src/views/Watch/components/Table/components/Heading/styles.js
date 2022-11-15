import styled from "styled-components";
import { rem } from "polished";
import themes from "Provider/themes";

export const Container = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const Obs = styled.p`
  font-size: ${rem(10)};
  color: ${themes.colors.blue};
  font-weight: ${themes.fonts.text};
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

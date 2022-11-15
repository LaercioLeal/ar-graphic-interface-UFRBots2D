import styled from "styled-components";
import { rem } from "polished";
import themes from "Provider/themes";

export const Container = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    max-height: 50px;
    svg {
      margin: 0 0 0 10px;
    }
  }

  .MuiInputBase-root {
    height: 39px !important;
  }

  :nth-child(2) {
    margin-top: -10px;
    margin-bottom: 10px;
    justify-content: flex-start;
    text {
      margin: 0 5px 0 0;

      font-size: ${rem(9.2)};
      font-family: ${themes.fonts.medium};

      color: ${themes.colors.darkblue};
    }
  }
`;

export const Title = styled.h1`
  margin: 20px 0;

  line-height: 22px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.darkblue};
`;

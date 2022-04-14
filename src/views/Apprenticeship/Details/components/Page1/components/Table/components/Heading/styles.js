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

  margin-bottom: 10px 0;

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
`;

export const Title = styled.h1`
  margin: 20px 0;

  line-height: 22px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.darkblue};
`;

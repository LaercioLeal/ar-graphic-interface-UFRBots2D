import styled from "styled-components";
import OutlinedInput from "@material-ui/core/OutlinedInput";
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

  button {
    width: 151px;
  }

  .MuiInputBase-root {
    height: 39px !important;
  }
`;

export const Input = styled(OutlinedInput).attrs({
  size: "small",
})`
  && {
    border-radius: 8px;

    font-size: ${rem(14)};
    color: ${themes.colors.gray};
    font-family: ${themes.fonts.medium};

    fieldset {
      border-color: ${themes.colors.gray100};
    }

    svg {
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

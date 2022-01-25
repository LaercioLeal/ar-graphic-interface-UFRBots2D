import styled, { keyframes } from "styled-components";

import { Form as FormComponent } from "components";
import { rem } from "polished";
import themes from "Provider/themes";

const fadeIdAnimation = keyframes`
  from {
    opacity: 0;    
  }
  to {
    opacity: 1;    
  }
`;

export const Container = styled.div`
  position: relative;

  overflow: hidden;
  background-color: ${themes.colors.light200};
`;

export const Content = styled.div`
  padding: 28px 40px 66px;
  animation: ${fadeIdAnimation} 0.5s;
`;

export const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h2`
  line-height: 24px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.regular};

  color: ${themes.colors.gray};
`;

export const Actions = styled.div`
  button {
    height: 32px;
    line-height: normal;

    svg {
      margin-right: 8px;
    }
  }

  button:first-of-type {
    width: 125px;
  }

  button:last-of-type {
    width: 125px;
  }

  button + button {
    margin-left: 16px;
  }
`;

export const Form = styled(FormComponent)`
  margin-top: 42px;

  .MuiInputBase-sizeSmall {
    line-height: 21px;
    font-size: ${rem(14)};
  }
`;

export const Legend = styled.legend`
  margin-bottom: 24px;

  line-height: 24px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.regular};

  color: ${themes.colors.gray};
`;

export const Fieldset = styled.fieldset`
  border: none;

  & + & {
    margin-top: 44px;
  }
`;

export const Message = styled.small`
  display: block;

  margin-top: 8px;
  font-size: ${rem(12)};
  font-family: ${themes.fonts.regular};

  color: ${themes.colors.gray};
`;

export const Paragraph = styled.p`
  padding: 0 54px 32px;

  line-height: 21px;
  text-align: center;
  font-size: ${rem(14)};
  font-family: ${themes.fonts.medium};

  color: ${themes.colors.gray};
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: -17px;

  button + button {
    margin-left: 16px;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 400px;

  > span {
    text-align: center;
    font-size: ${rem(24)};
    font-family: ${themes.fonts.medium};

    color: ${themes.colors.white};
  }
`;

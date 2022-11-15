import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Content = styled.div``;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;
  align-items: flex-start;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  > div {
    margin: 0 10px 0 50px;
  }

  button {
    margin-left: auto;
  }
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  width: 100%;
`;

export const Title = styled.h2`
  line-height: 24px;
  font-size: ${rem(20)};
  font-family: ${themes.fonts.bold};

  color: ${transparentize(0.5, themes.colors.gray)};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(18)};
  `}

  p {
    color: ${transparentize(0.5, themes.colors.gray)};
    font-size: ${rem(16)};
    .info {
      color: ${themes.colors.lightGray};
      font-size: ${rem(14)};
      font-style: italic;
    }
  }

  span {
    font-style: italic;
    color: ${themes.colors.lightGray};
  }
`;

export const Teammate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  width: 100%;
  margin-bottom: 20px;

  transition: border-right 1s linear, border-color 1s linear;
  border-right: ${({ divisor }) => (divisor ? "1" : "0")}px solid;
  border-color: ${({ divisor }) =>
    divisor ? themes.colors.lightGray : themes.colors.white};

  button {
    align-self: center;
    margin: auto;
  }

  :first-child {
    ${themes.medias.lessThan("hd")`
      margin-right: 50px;
    `}
  }

  :last-child {
    border: none;
  }
`;

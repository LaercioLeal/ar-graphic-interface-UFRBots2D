import { rem } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Content = styled.div``;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;
  align-items: flex-start;
`;

export const Bottom = styled.section`
  display: flex;
  justify-content: flex-end;

  margin-top: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  margin-top: 30px;
  width: 100%;
`;

export const Title = styled.h2`
  line-height: 24px;
  font-size: ${rem(20)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.lightGray};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(20)};
  `}

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
  margin-bottom: 50px;

  transition: border-right 1s linear, border-color 1s linear;
  border-right: ${({ divisor }) => (divisor ? "1" : "0")}px solid;
  border-color: ${({ divisor }) =>
    divisor ? themes.colors.lightGray : themes.colors.white};

  button {
    align-self: center;
    margin: auto;
  }

  :last-child {
    border: none;
  }
`;

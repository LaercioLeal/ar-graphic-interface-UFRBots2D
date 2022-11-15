import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`;

export const Bottom = styled.footer`
  display: flex;
  justify-content: space-around;

  button {
    svg {
      margin: 10px 20px;
    }

    :first-child {
      border-top-left-radius: 99px;
      border-bottom-left-radius: 99px;
    }

    :last-child {
      border-top-right-radius: 99px;
      border-bottom-right-radius: 99px;
    }
  }
`;

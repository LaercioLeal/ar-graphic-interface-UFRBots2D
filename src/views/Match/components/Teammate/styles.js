import styled from "styled-components";
import { rem } from "polished";
import themes from "Provider/themes";

export const Infos = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.text`
  line-height: 24px;
  font-size: ${rem(14)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.lightGray};

  span {
    font-style: italic;
    color: ${themes.colors.blue};
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 95%;
`;

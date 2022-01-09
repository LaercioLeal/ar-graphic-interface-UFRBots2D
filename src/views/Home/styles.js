import { rem } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Title = styled.h1`
  line-height: 24px;
  font-size: ${rem(18)};
  font-family: ${themes.fonts.medium};

  color: ${themes.colors.gray};
`;

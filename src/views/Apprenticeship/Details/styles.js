import { rem } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  margin-top: -30px;

  ${themes.medias.lessThan("hd")`
    margin-top: 0;
  `}

  span {
    line-height: 24px;
    font-size: ${rem(14)};
    font-family: ${themes.fonts.bold};

    color: ${themes.colors.blue};
  }

  .MuiBox-root {
    width: 100% !important;
  }

  .Mui-selected {
    span {
      color: ${themes.colors.darkblue};
    }
  }

  .Mui-disabled {
    span {
      color: ${themes.colors.lightGray};
    }
  }

  .MuiAppBar-root {
    background: tomato;
    background-color: ${themes.colors.white};
    background: #f6f6f6;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    margin-bottom: 30px;
  }

  .PrivateTabIndicator-colorSecondary-5 {
    background-color: ${themes.colors.primary};
  }

  .MuiAppBar-root .MuiTabs-root .MuiTabs-fixed {
    border-color: gold;
  }
`;

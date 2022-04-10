import styled, { css } from "styled-components";
import { rem, rgba, size, transparentize } from "polished";
import themes from "Provider/themes";
import { NavLink } from "react-router-dom";

export const Container = styled.section`
  margin-bottom: 32px;

  padding: 0 20px;
  border-radius: 20px;

  background-color: ${themes.colors.white};
  box-shadow: 0px 2px 4px ${rgba(themes.colors.black, 0.2)};

  > div {
    border-radius: 0 !important;
  }

  .rdt_Table {
    .rdt_TableHead,
    .rdt_TableRow {
      font-size: ${rem(14)};
      color: ${themes.colors.gray};
    }

    .rdt_TableHead {
      font-family: ${themes.fonts.bold};

      .rdt_TableHeadRow {
        border-bottom: none;
      }
    }

    .rdt_TableBody {
      font-family: ${themes.fonts.medium};

      .rdt_TableRow {
        height: 60px;

        &.expanded {
          &,
          button[aria-label="Expand Row"] svg,
          button[aria-label="Collapse Row"] svg {
            color: ${themes.colors.darkblue};
          }
        }

        .rdt_TableCell {
          align-items: flex-end;

          padding-bottom: 10px;
        }

        button[aria-label="Expand Row"],
        button[aria-label="Collapse Row"] {
          &:hover,
          &:focus {
            background: transparent;
          }

          svg {
            border-radius: 50%;

            ${size(28)};

            margin-bottom: 4px;
          }
        }
      }
    }
  }

  .rdt_Pagination {
    padding-top: 24px;
    padding-bottom: 16px;

    font-size: ${rem(14)};
    font-family: ${themes.fonts.medium};
  }
`;

export const Link = styled(NavLink)``;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Percentage = styled.p`
  line-height: 24px;
  font-family: ${themes.fonts.bold};
  margin-top: auto;

  color: ${transparentize(0.5, themes.colors.gray)};
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 100px;
  height: 10px;
  overflow: hidden;
`;

export const Bar = styled.div`
  background-color: ${themes.colors.success};

  @keyframes slideIn {
    from {
      width: 0;
    }
    to {
      width: ${({ width }) => `${width}%`};
    }
  }
  animation-name: slideIn;
  animation-duration: 2s;
  width: ${({ width }) => `${width}%`};
`;

export const BarOff = styled.div`
  background-color: ${themes.colors.primary};

  @keyframes slideOut {
    from {
      width: 100%;
    }
    to {
      width: ${({ width }) => `${100 - width}%`};
    }
  }
  animation-name: slideOut;
  animation-duration: 2s;
  width: ${({ width }) => `${100 - width}%`};
`;

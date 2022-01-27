import styled from "styled-components";
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

export const Status = styled.text`
  font-size: ${rem(14)};
  font-family: ${themes.fonts.bold};

  color: ${({ done }) =>
    done ? themes.colors.success : themes.colors.primary};

  border: 1px solid
    ${({ done }) => (done ? themes.colors.success : themes.colors.primary)};
  background-color: ${({ done }) =>
    transparentize(0.9, done ? themes.colors.success : themes.colors.primary)};
  text-align: center;
  padding: 5px;

  border-radius: 8px;
`;

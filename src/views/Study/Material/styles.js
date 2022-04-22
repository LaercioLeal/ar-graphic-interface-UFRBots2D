import { NavLink } from "components";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Content = styled.div``;

export const Movies = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 20px;
  margin: 20px 0;
`;

export const Articles = styled.section`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 20px;
`;

export const HeaderOption = styled(motion.div)`
  display: flex;

  button {
    :first-child {
      margin-right: 20px;
    }

    svg {
      margin-left: 20px;
    }
  }
`;

export const Link = styled(NavLink)``;

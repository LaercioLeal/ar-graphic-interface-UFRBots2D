import React from "react";

import { Container } from "components";

import * as S from "./styles";
import items from "./items";
import { Item } from "./components";
import { motion } from "framer-motion";

import animate from "./animation.config";

function Home() {
  return (
    <Container footer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animate.heading.container}
      >
        <S.Title variants={animate.heading.titles}>
          <span>ARbot</span>
        </S.Title>
        <S.Title variants={animate.heading.titles}>
          Aprendizado por Reforço com Futebol de Robôs
        </S.Title>
      </motion.div>
      <S.WrapperItems
        initial="hidden"
        animate="visible"
        variants={animate.shortcuts.container}
      >
        {items.map((item) => {
          return (
            <S.Link key={item.id} to={item.link}>
              <S.Item variants={animate.shortcuts.items}>
                <Item item={item} />
              </S.Item>
            </S.Link>
          );
        })}
      </S.WrapperItems>
    </Container>
  );
}

export default Home;

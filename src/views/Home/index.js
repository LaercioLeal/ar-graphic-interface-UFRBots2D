import React from "react";

import { Container } from "components";

import * as S from "./styles";
import items from "./items";
import { Item } from "./components";

function Home() {
  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container footer>
      <S.Title>
        <span>Bem-vindo ao LARBot</span>
      </S.Title>
      <S.Title>
        Interface Gráfica Didática para o Ensino De Aprendizado por Reforço
      </S.Title>
      <S.WrapperItems
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {items.map((item) => {
          return (
            <S.Item id={item.id} href={item.link} variants={itemVariants}>
              <Item item={item} />
            </S.Item>
          );
        })}
      </S.WrapperItems>
    </Container>
  );
}

export default Home;

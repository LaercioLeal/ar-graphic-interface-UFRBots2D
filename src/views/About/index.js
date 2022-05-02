import React from "react";

import Lottie from "react-lottie";
import animationData from "./about.json";

import { Container, HeadingPage } from "components";

import aboutIcon from "assets/icon/about.png";
import * as S from "./styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

function About() {
  return (
    <Container footer>
      <HeadingPage
        page="about"
        title="Um pouco sobre o projeto"
        icon={aboutIcon}
      />
      <S.Content>
        <S.Card initial="hidden" animate="visible" variants={variants}>
          <div>
            <Lottie options={defaultOptions} />
          </div>
          <div>
            <S.Title>
              <span className="higher">ARbot</span>
            </S.Title>
            <S.Title>
              é um sistema, dedicada ao auxílio nos estudos do Aprendizado por
              Reforço (AR), uma técnica de Inteligência Artificial bastante
              conhecida e útil. O futebol de robôs aqui abordado, dispõe de um
              execelente ambiente para execução de experimentos.
            </S.Title>
            <br />
            <S.Title>
              Seu fomento ocorreu dentro da UFRBots, a equipe de futebol de
              robôs da UFRB (Universidade Federal do Recôncavo da Bahia), como
              uma das etapas de Trabalho de Conclusão de Curso, do Bacharelado
              em Engenharia de Computação.
            </S.Title>
          </div>
        </S.Card>
        <S.Title>Envolvidos no desenvolvimento do projeto:</S.Title>
        <S.Body>
          <S.Info>
            <S.Title>
              <strong>Higor Santos de Jesus</strong>
              <br />
              <span className="email">higor-sj@hotmail.com</span>
            </S.Title>
          </S.Info>
          <S.Info>
            <S.Title>
              <strong>Prof. André Luiz Carvalho Ottoni</strong>
              <br />
              <span className="email">andre.ottoni@ufrb.edu.br</span>
            </S.Title>
          </S.Info>
        </S.Body>
      </S.Content>
    </Container>
  );
}

export default About;

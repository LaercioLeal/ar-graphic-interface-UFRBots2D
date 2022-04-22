import React from "react";

import * as Icons from "@material-ui/icons";
import { Button, Container, HeadingPage, SectionTitle } from "components";

import studentIcon from "assets/icon/student.png";
import * as S from "./styles";
import { movies, articles } from "./items";
import { Article, Movie } from "./components";
import ANIMATION from "./animation.config";
import routes from "constants/routes";

function Material() {
  return (
    <Container>
      <HeadingPage
        page="material"
        title="Material"
        icon={studentIcon}
        children={
          <S.HeaderOption
            initial="hidden"
            animate="visible"
            variants={ANIMATION}
          >
            <S.Link to={routes.study.code}>
              <Button
                color="blue"
                tooltip="Venha conhecer um pouco do código do time UFRBots"
                onClick={() => {}}
              >
                Entender código AR
                <Icons.Book />
              </Button>
            </S.Link>
            <S.Link to={routes.study.quiz}>
              <Button
                color="blue"
                tooltip="Chegou o momento de testar seus conhecimentos :D"
                onClick={() => {}}
              >
                Quiz <Icons.QuestionAnswer />
              </Button>
            </S.Link>
          </S.HeaderOption>
        }
      />
      <S.Content>
        <SectionTitle title="Artigos | Apostilas | Livros" />
        <S.Articles>
          {articles.map((article) => {
            return <Article article={article} />;
          })}
        </S.Articles>
        {movies.map((movie) => {
          return (
            <>
              <SectionTitle title={movie.title} />
              <S.Movies>
                {movie.data.map((movie) => {
                  return <Movie movie={movie} />;
                })}
              </S.Movies>
            </>
          );
        })}
      </S.Content>
    </Container>
  );
}

export default Material;

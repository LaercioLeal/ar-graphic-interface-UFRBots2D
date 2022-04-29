import React from "react";

import * as Icons from "@material-ui/icons";
import { Container, HeadingPage, SectionTitle } from "components";

import studentIcon from "assets/icon/student.png";
import * as S from "./styles";
import { movies, articles } from "./items";
import { Article, Movie } from "./components";
import routes from "constants/routes";

function Material() {
  return (
    <Container>
      <HeadingPage page="material" title="Material" icon={studentIcon} />
      <S.Content>
        <S.Cards>
          <S.Link to={routes.study.code}>
            <S.Card>
              <Icons.Book />
              <h3>Entender código AR</h3>
            </S.Card>
          </S.Link>
          <S.Link to={routes.study.quiz}>
            <S.Card>
              <Icons.QuestionAnswer />
              <h3>Quiz</h3>
            </S.Card>
          </S.Link>
        </S.Cards>
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

import React from "react";

import { Container, HeadingPage, SectionTitle } from "components";

import studentIcon from "assets/icon/student.png";
import * as S from "./styles";
import { movies, articles } from "./items";
import { Article, Movie } from "./components";

function Material() {
  return (
    <Container>
      <HeadingPage page="material" title="Material" icon={studentIcon} />
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

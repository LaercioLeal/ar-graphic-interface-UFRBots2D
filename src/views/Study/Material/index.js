import React from "react";

import { Container, HeadingPage } from "components";

import studentIcon from "assets/icon/student.png";
import * as S from "./styles";
import { movies } from "./items";
import { Movie } from "./components";

function Material() {
  return (
    <Container>
      <HeadingPage page="material" title="Material" icon={studentIcon} />
      <S.Content>
        <S.Movies>
          {movies.map((movie) => {
            return <Movie movie={movie} />;
          })}
        </S.Movies>
      </S.Content>
    </Container>
  );
}

export default Material;

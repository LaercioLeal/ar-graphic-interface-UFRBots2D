import React, { useState } from "react";

import { Container, HeadingPage } from "components";

import studentIcon from "assets/icon/student.png";
import * as S from "./styles";

function Material() {
  const [selected, setSelected] = useState("");

  const movies = [
    {
      id: "HZ2CoPuMUB0",
      title: "YouTube video player",
    },
    {
      id: "5u8yNEN5arQ",
      title: "YouTube video player",
    },
    {
      id: "RzsKrjV1GJk",
      title: "YouTube video player",
    },
    {
      id: "HoNan13GXXw",
      title: "YouTube video player",
    },
    {
      id: "HoNan13GXXw",
      title: "YouTube video player",
    },
  ];

  const handleClick = (id) => {
    if (selected === id) setSelected("");
    else selected(id);
  };

  return (
    <Container>
      <HeadingPage page="material" title="Material" icon={studentIcon} />
      <S.Content>
        <S.IFrames>
          {movies.map((movie) => {
            return (
              <iframe
                selected={selected === movie.id}
                src={"https://www.youtube.com/embed/" + movie.id}
                title={movie.title}
                onClick={() => handleClick(movie.id)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            );
          })}
        </S.IFrames>
      </S.Content>
    </Container>
  );
}

export default Material;

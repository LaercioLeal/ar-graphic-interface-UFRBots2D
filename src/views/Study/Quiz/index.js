import React from "react";

import { Container, HeadingPage } from "components";

import quizIcon from "assets/icon/quiz.png";

function Quiz() {
  return (
    <Container>
      <HeadingPage page="quiz" title="Quiz" icon={quizIcon} />
    </Container>
  );
}

export default Quiz;

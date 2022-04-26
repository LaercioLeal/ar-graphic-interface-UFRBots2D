import React from "react";
import * as S from "./styles";
import { Container, HeadingPage, SectionTitle } from "components";

import codingIcon from "assets/icon/coding.png";
import studentIcon from "assets/icon/student.png";
import { CodeBlock } from "./components";
import { codes } from "./codes";

function Code() {
  return (
    <Container>
      <HeadingPage
        page="code"
        title="Código"
        subtitle="Exemplo de lógica de programação para um código de Aprendizado por Reforço (AR)"
        icon={codingIcon}
      />
      <S.Section>
        <S.Image
          src={studentIcon}
          layoutId={`icon-page-material`}
          transition={{ duration: 1 }}
        />
        <S.PopupVoice>
          <S.Description>
            Excelente ideia! Agora vamos conhecer um pouco da lógica por traz de
            um código de Aprendizado por Reforço.
          </S.Description>
        </S.PopupVoice>
      </S.Section>
      {codes.map(({ title, description, code, language }) => {
        return (
          <>
            {!!title && <SectionTitle title={title} />}
            <S.Description>{description}</S.Description>
            <CodeBlock code={code} language={language} />
          </>
        );
      })}
    </Container>
  );
}

export default Code;

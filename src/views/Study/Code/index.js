import React, { useState } from "react";
import * as S from "./styles";
import * as Icons from "@material-ui/icons";
import { Button, Container, HeadingPage, SectionTitle } from "components";

import codingIcon from "assets/icon/coding.png";
import studentIcon from "assets/icon/student.png";
import { CodeBlock } from "./components";
import pages from "./pages";

function Code() {
  const [currentPage, setPage] = useState(pages[0]);

  return (
    <Container>
      <HeadingPage
        page="code"
        title="Código"
        subtitle="Exemplo de lógica de programação para um código de Aprendizado por Reforço (AR)"
        icon={codingIcon}
      />
      <S.Section>
        {!!currentPage?.message && (
          <>
            <S.Image
              src={studentIcon}
              layoutId={`icon-page-material`}
              transition={{ duration: 1 }}
            />
            <S.PopupVoice>
              <S.Description>{currentPage.message}</S.Description>
            </S.PopupVoice>
          </>
        )}
      </S.Section>
      {currentPage.codes.map(({ title, description, code, language }) => {
        return (
          <>
            {!!title && <SectionTitle title={title} />}
            <S.Description>{description}</S.Description>
            <CodeBlock code={code} language={language} />
          </>
        );
      })}
      <S.Pagination>
        <Button
          color="blue"
          isDisabled={currentPage.page === 0}
          onClick={() => setPage(pages[currentPage.page - 1])}
        >
          <Icons.ArrowLeft />
        </Button>
        <div>
          {pages.map(({ page }) => (
            <S.Dot
              active={page === currentPage.page}
              onClick={() => setPage(pages[page])}
            >
              <p>{page + 1}</p>
            </S.Dot>
          ))}
        </div>
        <Button
          color="blue"
          isDisabled={currentPage.page === pages.length - 1}
          onClick={() => setPage(pages[currentPage.page + 1])}
        >
          <Icons.ArrowRight />
        </Button>
      </S.Pagination>
    </Container>
  );
}

export default Code;

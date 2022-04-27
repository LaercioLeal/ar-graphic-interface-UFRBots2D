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
      <S.Container>
        <S.FullHeight>
          <S.Pagination>
            <Button
              color="blue"
              isDisabled={currentPage.page === 0}
              onClick={() => setPage(pages[currentPage.page - 1])}
            >
              <Icons.ArrowDropUp />
            </Button>
            <div>
              {pages.map(({ page }) => (
                <S.Dot
                  active={page === currentPage.page}
                  onClick={() => setPage(pages[page])}
                  less={
                    page > currentPage.page + 2 || page < currentPage.page - 2
                  }
                  hidden={
                    page > currentPage.page + 10 || page < currentPage.page - 10
                  }
                />
              ))}
            </div>
            <Button
              color="blue"
              isDisabled={currentPage.page === pages.length - 1}
              onClick={() => setPage(pages[currentPage.page + 1])}
            >
              <Icons.ArrowDropDown />
            </Button>
          </S.Pagination>
        </S.FullHeight>
        <S.Content>
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
          {currentPage?.codes?.length > 0 &&
            currentPage.codes.map(({ title, description, code, language }) => {
              return (
                <>
                  {!!title && <SectionTitle title={title} />}
                  <S.Description>{description}</S.Description>
                  <CodeBlock code={code} language={language} />
                </>
              );
            })}
        </S.Content>
      </S.Container>
    </Container>
  );
}

export default Code;

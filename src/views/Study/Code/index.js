import React, { useState } from "react";
import * as S from "./styles";
import { Container, HeadingPage, Pagination, SectionTitle } from "components";

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
        subtitle="Exemplo da lógica de programação para um código de Aprendizado por Reforço (AR)"
        icon={codingIcon}
      />
      <S.Container>
        <Pagination
          currentPage={currentPage.page}
          pages={pages}
          setPage={setPage}
        />
        <S.Content>
          {!!currentPage?.message && (
            <S.Section>
              <S.Image
                src={studentIcon}
                layoutId={`icon-page-material`}
                transition={{ duration: 1 }}
              />
              <S.PopupVoice>
                <S.Description>{currentPage.message}</S.Description>
              </S.PopupVoice>
            </S.Section>
          )}
          {currentPage?.infos?.length > 0 &&
            currentPage?.infos.map(
              ({ title, description, code, language, image, size }) => {
                if (!!image) return <S.Image src={image} content />;
                return (
                  <>
                    {!!title && <SectionTitle title={title} />}
                    {!!description && (
                      <S.Description
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    )}
                    {!!code && <CodeBlock code={code} language={language} />}
                  </>
                );
              }
            )}
        </S.Content>
      </S.Container>
    </Container>
  );
}

export default Code;

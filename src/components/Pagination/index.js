import React from "react";
import Button from "components/Button";
import * as Icons from "@material-ui/icons";
import * as S from "./styles";

export default function Pagination({ currentPage, pages, setPage }) {
  return (
    <S.Container>
      <Button
        color="blue"
        isDisabled={currentPage === 0}
        onClick={() => setPage(pages[currentPage - 1])}
      >
        <Icons.ArrowDropUp />
      </Button>
      <div>
        {pages.map(({ page }) => {
          if (page > currentPage + 4 || page < currentPage - 4) return <></>;
          return (
            <S.Dot
              active={page === currentPage}
              onClick={() => setPage(pages[page])}
              less={page > currentPage + 2 || page < currentPage - 2}
              hidden={page > currentPage + 4 || page < currentPage - 4}
            >
              <p>{page + 1}</p>
            </S.Dot>
          );
        })}
      </div>
      <Button
        color="blue"
        isDisabled={currentPage === pages.length - 1}
        onClick={() => setPage(pages[currentPage + 1])}
      >
        <Icons.ArrowDropDown />
      </Button>
    </S.Container>
  );
}

import React, { useEffect, useState } from "react";
import { LinearProgress } from "components";

import items from "./items";
import * as S from "./styles";

function Navigation() {
  const [isPageNotOnTop, setIsPageNotOnTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsPageNotOnTop(window.pageYOffset > 10);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Container top={isPageNotOnTop}>
      <S.Logo show={isPageNotOnTop} />
      {items.map((item) => (
        <S.Link key={item.path} top={isPageNotOnTop} to={item.path} item={item}>
          <span>{item.label}</span>
        </S.Link>
      ))}
      {false && <LinearProgress position="absolute" style={{ bottom: -4 }} />}
    </S.Container>
  );
}

export default Navigation;

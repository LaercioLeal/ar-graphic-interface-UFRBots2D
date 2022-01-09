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
      {items.map((item) => (
        <S.Link key={item.path} to={item.path}>
          <span>{item.label}</span>
        </S.Link>
      ))}
      <S.Logo show={isPageNotOnTop} />
      {false && <LinearProgress position="absolute" style={{ bottom: -4 }} />}
    </S.Container>
  );
}

export default Navigation;

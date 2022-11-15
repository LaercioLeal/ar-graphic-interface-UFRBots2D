import React, { useEffect, useState } from "react";
import { LinearProgress } from "components";

import items from "./items";
import * as S from "./styles";

function Navigation() {
  const [isOnTop, setTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setTop(window.pageYOffset < 5);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Container top={isOnTop}>
      {items.map((item) => (
        <S.Link key={item.path} top={isOnTop} to={item.path} item={item}>
          <span>{item.label}</span>
        </S.Link>
      ))}
      {false && <LinearProgress position="absolute" style={{ bottom: -4 }} />}
    </S.Container>
  );
}

export default Navigation;

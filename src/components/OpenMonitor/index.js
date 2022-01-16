import React, { useCallback } from "react";

import icon from "assets/icon/power-button.png";
import * as S from "./styles";

export default function OpenMonitor() {
  const handleOpen = useCallback(() => {}, []);

  return (
    <S.Container
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { x: -50, opacity: 0 },
        visible: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: 2,
          },
        },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={handleOpen}
    >
      <S.Image src={icon} />
    </S.Container>
  );
}

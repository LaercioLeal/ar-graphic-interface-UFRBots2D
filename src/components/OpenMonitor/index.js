import React from "react";
import { Tooltip, Zoom } from "@material-ui/core";

import icon from "assets/icon/power-button.png";
import * as S from "./styles";
import { openMonitor } from "services";

export default function OpenMonitor() {
  return (
    <Tooltip
      arrow
      TransitionComponent={Zoom}
      placement="top-start"
      title="Aqui você pode abrir o monitor para assistir suas partidas ;)"
    >
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
        onClick={openMonitor}
      >
        <S.Image src={icon} />
      </S.Container>
    </Tooltip>
  );
}

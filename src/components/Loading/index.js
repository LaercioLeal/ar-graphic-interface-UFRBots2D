import React from "react";
import Lottie from "react-lottie";

import * as S from "./styles";
import animationData from "./loading.json";

const defaultOptions = {
  loop: true,
  delay: 1,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loading({ onTop, position, ...props }) {
  return (
    <S.Container>
      <div>
        <Lottie options={defaultOptions} />
      </div>
    </S.Container>
  );
}

export default Loading;

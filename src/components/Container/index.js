import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

function Container({ children, htmlElement, ...props }) {
  return htmlElement === "div" ? (
    <S.Div data-testid="container-div" {...props}>
      {children}
    </S.Div>
  ) : (
    <S.Section
      data-testid="container-section"
      {...props}
      windowHeight={window.innerHeight}
    >
      {children}
      {props.footer && (
        <S.FooterContainer>
          <S.Footer>
            <span>Copyright © 2022 Higor Santos | UFRBots</span>
            <span>Copyright © 2022 Higor Santos | UFRBots</span>
          </S.Footer>
          <S.Logo />
        </S.FooterContainer>
      )}
    </S.Section>
  );
}

Container.defaultProps = {
  htmlElement: "section",
};

Container.propTypes = {
  htmlElement: PropTypes.oneOf(["section", "div"]),
};

export default Container;

import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";
import ANIMATION from "./animation.config";
import CustomTooltip from "components/CustomTooltip";

function Button({
  variant,
  isLoading,
  isDisabled,
  children,
  color,
  bold,
  tooltip,
  onClick,
  ...props
}) {
  return (
    <CustomTooltip title={tooltip}>
      <S.Container
        bold={bold}
        color={color}
        isLoading={isLoading}
        isDisabled={isDisabled}
        variant={variant || "primary"}
        initial="hidden"
        animate="visible"
        variants={ANIMATION}
        whileTap={{ scale: isDisabled ? 1 : 0.9 }}
        onClick={!isDisabled && onClick}
        {...props}
      >
        {children}
      </S.Container>
    </CustomTooltip>
  );
}

Button.defaultProps = {
  variant: "primary",
  isLoading: false,
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outlined"]),
  color: PropTypes.oneOf(["red", "white", "success"]),
  isLoading: PropTypes.oneOf([true, false]),
};

export default Button;

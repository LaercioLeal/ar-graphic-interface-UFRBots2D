import React from "react";

import { Tooltip, Zoom } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import themes from "Provider/themes";

function CustomTooltip({
  title,
  placement = "top-start",
  color = themes.colors.primary,
  children,
}) {
  const Custom = withStyles({
    tooltip: {
      color: "white",
      backgroundColor: color,
      fontSize: 12,
      padding: 10,
      borderRadius: 8,
    },
    arrow: {
      color: color,
    },
  })(Tooltip);
  if (!!title)
    return (
      <Custom
        arrow
        TransitionComponent={Zoom}
        placement={placement}
        title={title}
      >
        {children}
      </Custom>
    );
  else return children;
}

export default CustomTooltip;

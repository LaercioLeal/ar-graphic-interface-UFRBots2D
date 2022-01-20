import React, { useCallback } from "react";
import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLink({ children, to, ...props }) {
  // istanbul ignore next
  const checkActivePath = useCallback(
    (path, location) => {
      const isActive =
        (path.length > 1 && location.pathname.includes(path)) ||
        path === location.pathname;

      if (props?.item) {
        return location.pathname.includes(props?.item?.base);
      }

      return isActive;
    },
    [props?.item]
  );

  return (
    <Link
      exact
      to={to}
      isActive={
        /* istanbul ignore next */ (_, location) =>
          checkActivePath(to, location)
      }
      {...props}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default NavLink;

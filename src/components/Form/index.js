import React from "react";
// @ts-ignore
import FormikErrorFocus from "formik-error-focus";

const Form = ({ children, offsetOnScroll = 0, ...props }) => {
  return (
    <form {...props}>
      {children}

      <FormikErrorFocus
        offset={offsetOnScroll}
        align="bottom"
        focusDelay={200}
        ease="linear"
        duration={500}
      />
    </form>
  );
};

export default Form;

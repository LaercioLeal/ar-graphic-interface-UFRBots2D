import React from "react";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
// import { Grid } from "@material-ui/core";
// import { FormikProvider, useFormik } from "formik";

// import { themes } from '@saude-facil/styles'
// import { isZipcode, useDebounce } from '@saude-facil/tools'
// import { Button, Input, Select, Modals } from '@saude-facil/componentsv2'
// import { getAddressByZipcode } from '@saude-facil/services/lib/api/addresses'

import * as S from "./styles";

const variants = {
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

function Form({
  data,
  isUpdate,
  onSubmit,
  onCancel,
  onToggleActivation,
  isLoading,
  loadingText,
}) {
  return (
    <S.Container
      initial="closed"
      animate="visible"
      inherit={false}
      variants={variants}
    >
      <p>teste</p>
    </S.Container>
  );
}

export default Form;

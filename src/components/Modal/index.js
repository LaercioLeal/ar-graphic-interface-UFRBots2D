import React from "react";
import { Modal } from "@material-ui/core";
import { Container } from "./styles";

export default function ModalFC({ open, handleClose, children }) {
  return (
    <Modal open={open} onClose={handleClose} onBackdropClick={handleClose}>
      <Container>{children}</Container>
    </Modal>
  );
}

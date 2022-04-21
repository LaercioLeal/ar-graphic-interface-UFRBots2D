import React, { useCallback } from "react";
import * as Icons from "@material-ui/icons";
import { useDropzone } from "react-dropzone";
import * as S from "./styles";

function Dropzone({ onDropFiles }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onDropFiles(acceptedFiles);
    },
    [onDropFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <S.Container {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Solte aqui...</p>
      ) : (
        <p>
          Arraste e solte seus arquivos aqui ou clique para selecionar os
          arquivos
        </p>
      )}
      <Icons.CloudUpload />
    </S.Container>
  );
}

export default Dropzone;

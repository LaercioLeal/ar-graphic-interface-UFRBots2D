import React from "react";
import { CodeBlock as Code, dracula } from "react-code-blocks";

export default function CodeBlock({ code, language, showLineNumbers = false }) {
  return (
    <Code
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
      customStyle={{
        borderRadius: "8px",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px",
        maxWidth: "70%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}

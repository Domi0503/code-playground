import Editor from "@monaco-editor/react";
import React, { useEffect, useRef, useState } from "react";
import "./CodeBox.scss";
import FileButton from "../Chip/Chip";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import codeExamples from "../../codeExamples";

export default function CodeBox() {
  const [openEditors, setOpenEditors] = useState<any>([]);
  const [fileName, setFileName] = useState("index.html");

  const file = codeExamples[fileName];

  useEffect(() => {
    setOpenEditors([
      { name: "index.html" },
      { name: "app.js" },
      { name: "styles.css" },
    ]);
  }, []);

  const changeFile = (event: any) => {
    setFileName(event.target.innerText);
  };

  return (
    <div className="CodeBox-container">
      <div className="CodeBox-file-track">
        {openEditors.map((item: any, key: any) => {
          return (
            <FileButton
              key={key}
              icon={faCode}
              name={item.name}
              isExitable={true}
              changeFile={changeFile}
            />
          );
        })}
      </div>

      <Editor
        height="75vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  );
}

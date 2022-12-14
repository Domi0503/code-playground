import Editor from "@monaco-editor/react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import "./CodeBox.scss";
import FileButton from "../Chip/Chip";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import codeExamples from "../../codeExamples";
import { emmetCSS, emmetHTML } from "emmet-monaco-es";

const CodeBox = forwardRef((props: any, _ref) => {
  const [isEditorReady, setIsEditorReady] = useState(false);

  const [openEditors, setOpenEditors] = useState<any>([]);
  const [fileName, setFileName] = useState("index.html");
  const [codeValue, setCodeValue] = useState("");

  const file = codeExamples[fileName];

  const handleEditorDidMount = () => {
    emmetHTML();
    emmetCSS();
    setIsEditorReady(true);
  };

  useEffect(() => {
    setOpenEditors([
      { name: "index.html" },
      // { name: "app.js" },
      // { name: "styles.css" },
    ]);

    setCodeValue(file.value);
  }, []);

  const changeFile = (event: any) => {
    setFileName(event.target.innerText);
  };

  useImperativeHandle(_ref, () => ({
    getCode: () => {
      return codeValue;
    },
  }));

  const handleEditorChange = (value: any) => {
    setCodeValue(value);
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
              isExitable={false}
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
        onChange={handleEditorChange}
        loading={"Loading your code, please wait..."}
        options={{ minimap: { enabled: false }, rulers: [80] }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
});

export default CodeBox;

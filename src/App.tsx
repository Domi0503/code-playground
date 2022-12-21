import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.scss";
import CodeBox from "./components/CodeBox/CodeBox";
import Navbar from "./components/Navbar/Navbar";
import PreviewBox from "./components/PreviewBox/PreviewBox";
import { useRef } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function App() {
  const childStateRef = useRef<any>();

  const previewCode = () => {
    const codePreviewElement: any = getCodePreview();
    if (codePreviewElement != undefined) {
      codePreviewElement.contentDocument.body.innerHTML = getCodeValue();
    }
  };

  //TODO: Find a better solution
  const getCodePreview = () => {
    const codePreview: any = document.getElementById(
      "code-preview"
    ) as HTMLIFrameElement;

    return codePreview;
  };

  const getCodeValue = () => {
    const childState = childStateRef.current?.getCode();

    return childState;
  };

  return (
    <div className="App">
      <Navbar>
        <h1>
          Learn to Code <span className="navbar-subtext">&lt;/&gt;</span>
        </h1>
        <button onClick={previewCode} className="preview-btn">
          Run
          <FontAwesomeIcon icon={faPlay} size={"xs"} />
        </button>
      </Navbar>
      <div className="App-codeBox-n-previewBox-container">
        <CodeBox ref={childStateRef} />
        <PreviewBox />
      </div>
    </div>
  );
}

export default App;

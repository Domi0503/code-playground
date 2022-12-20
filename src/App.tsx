import "./App.scss";
import CodeBox from "./components/CodeBox/CodeBox";
import Navbar from "./components/Navbar/Navbar";
import PreviewBox from "./components/PreviewBox/PreviewBox";
import codeExamples from "./codeExamples";

function App() {
  const previewCode = () => {
    const codePreviewElement: any = getCodePreview();
    if (codePreviewElement != undefined) {
      codePreviewElement.contentDocument.body.innerHTML =
        codeExamples["index.html"].value;
    }
  };

  //TODO: Find a better solution
  const getCodePreview = () => {
    const codePreview: any = document.getElementById(
      "code-preview"
    ) as HTMLIFrameElement;

    return codePreview;
  };

  return (
    <div className="App">
      <Navbar>
        <h1>
          Learn to Code <span>&lt;/&gt;</span>
        </h1>
        <button onClick={previewCode}>RUN</button>
      </Navbar>
      <div className="App-codeBox-n-previewBox-container">
        <CodeBox />
        <PreviewBox />
      </div>
    </div>
  );
}

export default App;

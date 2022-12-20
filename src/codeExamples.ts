const someHTMLCodeExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
    <span>This is a span</span>
    <p>I edited this</p>
</body>
</html>
`;

const someJSCode = `let a = 5;
let b = 5;

//prints 10 to the console
console.log(a + b);
`;

const someCSSCode = `body {
    background-color: black;
    color: red;
}`;

const codeExamples: any = {
  "index.html": {
    name: "index.html",
    language: "html",
    value: someHTMLCodeExample,
  },
  "app.js": {
    name: "app.js",
    language: "javascript",
    value: someJSCode,
  },
  "styles.css": {
    name: "styles.css",
    language: "css",
    value: someCSSCode,
  },
};

export default codeExamples;

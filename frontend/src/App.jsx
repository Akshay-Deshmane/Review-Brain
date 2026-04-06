import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";
import EditorModule from "react-simple-code-editor";

const Editor = EditorModule.default;

function App() {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setLoading(false);
      setReview(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.js, "js")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          {loading && <p>Please Wait Getting The Resopnse</p>}
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
}

export default App;

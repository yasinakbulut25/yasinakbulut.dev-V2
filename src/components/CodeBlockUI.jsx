import { CodeBlock } from "react-code-block";
import CopyButton from "./CopyButton";
import { themes } from 'prism-react-renderer';

function CodeBlockUI({ code, language, highlightedLines }) {
  return (
    <div className="relative">
      <CodeBlock theme={themes.okaidia} code={code} language={language} lines={highlightedLines}>
        <CodeBlock.Code className="bg-gray-900 py-6 overflow-auto rounded-xl shadow-lg">
          {({ isLineHighlighted }) => (
            <div
              className={`table-row ${
                isLineHighlighted ? "bg-violet-500/30" : ""
              }`}
            >
              <CodeBlock.LineNumber
                className={`table-cell pl-6 pr-4 text-sm text-right select-none ${
                  isLineHighlighted ? "text-gray-300" : "text-gray-500"
                }`}
              />
              <CodeBlock.LineContent className="table-cell w-full pr-6">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          )}
        </CodeBlock.Code>
        <CopyButton code={code} />
      </CodeBlock>
    </div>
  );
}

export default CodeBlockUI;

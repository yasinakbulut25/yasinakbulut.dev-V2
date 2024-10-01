import { CodeBlock } from "react-code-block";
import CopyButton from "./CopyButton";
import { themes } from "prism-react-renderer";
import { useBlogContext } from "../../context/BlogContext";

function CodeBlockUI({ code, language, highlightedLines, title }) {
  const { theme } = useBlogContext();

  return (
    <div className="relative border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 dark:bg-slate-800 dark:border-slate-700 px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="size-3 rounded-full bg-gray-200 dark:bg-slate-700"></span>
            <span className="size-3 rounded-full bg-gray-200 dark:bg-slate-700"></span>
            <span className="size-3 rounded-full bg-gray-200 dark:bg-slate-700"></span>
          </span>
          <p className="m-0 text-sm">{title}</p>
        </div>
        <CopyButton code={code} />
      </div>
      <CodeBlock
        theme={theme === "dark" ? themes.vsDark : themes.github}
        code={code}
        language={language}
        lines={highlightedLines}
      >
        <CodeBlock.Code className="bg-white dark:bg-slate-800 py-6 overflow-auto text-xs">
          {({ isLineHighlighted }) => (
            <div
              className={`table-row ${
                isLineHighlighted ? "bg-slate-400/30 dark:bg-slate-700/60" : ""
              }`}
            >
              <CodeBlock.LineNumber
                className={`table-cell pl-6 pr-4 text-sm text-right select-none ${
                  isLineHighlighted
                    ? "text-gray-500 dark:text-gray-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
              <CodeBlock.LineContent className="table-cell w-full pr-6">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          )}
        </CodeBlock.Code>
      </CodeBlock>
    </div>
  );
}

export default CodeBlockUI;

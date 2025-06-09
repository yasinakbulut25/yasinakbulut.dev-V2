import { TextSearchIcon, XIcon } from "lucide-react";
import { array } from "prop-types";
import { useState } from "react";

function Titles({ titles }) {
  const [isOpen, setIsOpen] = useState(false);
  if (!titles || titles.length < 1) return;

  return (
    <div
      className={`fixed flex flex-col ${
        isOpen ? "px-3 py-2 rounded-md" : "p-0 rounded-full"
      }  text-gray-500 dark:text-slate-400 border bg-gray-50 border-gray-200 dark:bg-slate-800 dark:border-slate-700 max-h-[420px] overflow-y-auto right-6 md:bottom-auto bottom-6 md:top-1/2 md:transform md:-translate-y-1/2 z-[9999999]`}
    >
      {isOpen ? (
        <>
          <div className="flex justify-between items-center border-b-2 pb-1 mb-1 text-sm border-gray-200 dark:border-slate-700">
            Başlıklar
            <XIcon
              className="cursor-pointer min-w-max"
              onClick={() => setIsOpen(false)}
              width={20}
            />
          </div>
          <div className="flex flex-col text-sm gap-1">
            {titles.map((t) => {
              return (
                <a
                  className="hover:text-black dark:hover:text-white"
                  key={t.id}
                  href={`#${t.id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {t.innerText}
                </a>
              );
            })}
          </div>
        </>
      ) : (
        <span className="p-2 cursor-pointer" onClick={() => setIsOpen(true)}>
          <TextSearchIcon width={24} />
        </span>
      )}
    </div>
  );
}

Titles.propTypes = {
  titles: array.isRequired,
};

export default Titles;

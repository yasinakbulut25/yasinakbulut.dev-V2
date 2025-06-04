import { NavLink } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import { blogComponents } from "../../content/blog/blogs";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function BlogList() {
  const { setSubMenuOpen, language } = useBlogContext();
  const [activeSubData, setActiveSubData] = useState({
    index: null,
    open: false,
  });

  return (
    <div className="navLinks flex flex-col gap-1 text-sm">
      {blogComponents.map((blog, index) => {
        if (blog.subData) {
          const isActiveBlog =
            Number(activeSubData.index) === Number(index) && activeSubData.open;

          return (
            <div
              key={index}
              className={`relative ${
                isActiveBlog
                  ? "max-h-auto bg-gray-200 dark:bg-slate-800"
                  : "max-h-[110px]"
              } cursor-pointer overflow-hidden flex flex-col gap-1  transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-lg p-3`}
            >
              {!isActiveBlog && (
                <div className="absolute bottom-0 h-8 w-full left-0 bg-gradient-to-b from-transparent to-zinc-50 dark:to-gray-900" />
              )}

              <span
                onClick={() =>
                  setActiveSubData((prev) => {
                    return {
                      index: index,
                      open: !prev.open,
                    };
                  })
                }
                className="flex justify-between items-center font-semibold dark:text-slate-300"
              >
                {blog.title}
                {isActiveBlog ? (
                  <ChevronUp width={16} className="min-w-max" />
                ) : (
                  <ChevronDown width={16} className="min-w-max" />
                )}
              </span>
              <div className="flex flex-col flex-wrap gap-1 transition-colors duration-300 text-slate-500 dark:text-slate-400 mt-1">
                {blog.subData.map((data, i) => {
                  return (
                    <NavLink
                      className="subDataLink text-[14px] px-[4px] py-[6px] text-slate-500 rounded"
                      key={i}
                      onClick={() => setSubMenuOpen(false)}
                      to={`/${language}/blogs/${data.url}`}
                    >
                      ➔ {data.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          );
        }

        return (
          <NavLink
            key={index}
            onClick={() => setSubMenuOpen(false)}
            className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-lg p-3"
            to={`/${language}/blogs/${blog.url}`}
          >
            <span className="font-semibold dark:text-slate-300">
              {blog.title}
            </span>
            <div className="flex flex-wrap gap-1 transition-colors duration-300 text-slate-500 dark:text-slate-400 mt-1">
              {blog.categories.map((c, i) => {
                return (
                  <span
                    className="text-[10px] px-[4px] py-[2px] bg-slate-300/40 dark:bg-slate-600/40 rounded"
                    key={i}
                  >
                    {c}
                  </span>
                );
              })}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default BlogList;

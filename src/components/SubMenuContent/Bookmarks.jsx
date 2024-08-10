import { NavLink } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import { bookmarks } from "../../content/bookmarks";
import { useBlogContext } from "../../context/BlogContext";

function Bookmarks() {
  const { setSubMenuOpen, language } = useBlogContext();

  return (
    <div className="navLinks flex lg:flex-col flex-wrap gap-1 text-sm justify-center">
      {bookmarks.length > 0 ? (
        bookmarks.map((item) => {
          return (
            <NavLink
              key={item.id}
              onClick={() => setSubMenuOpen(false)}
              className="w-full flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-lg px-3 py-2 z-10"
              to={`/${language}/bookmarks/${item.url}`}
            >
              <span className="font-semibold dark:text-slate-300">
                {item.title}
              </span>
              <time className="transition-colors duration-300 text-slate-500 dark:text-slate-500">
                {`${item.contents.length} bookmarks`}
              </time>
            </NavLink>
          );
        })
      ) : (
        <Spinner className="w-full h-20" color="default" />
      )}
    </div>
  );
}

export default Bookmarks;

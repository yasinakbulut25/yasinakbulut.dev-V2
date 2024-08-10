import { useState, useEffect } from "react";
import { string } from "prop-types";
import BlogList from "./SubMenuContent/BlogList";
import Projects from "./SubMenuContent/Projects";
import Works from "./SubMenuContent/Works";
import { useBlogContext } from "../context/BlogContext";
import Bookmarks from "./SubMenuContent/Bookmarks";

function SubMenu({ firstSegment }) {
  const { subMenuOpen, TEXTS } = useBlogContext();

  const [renderMenu, setRenderMenu] = useState();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (firstSegment) {
      case "blogs":
        setRenderMenu(<BlogList />);
        setTitle(TEXTS.BLOGS);
        break;
      case "projects":
        setRenderMenu(<Projects />);
        setTitle(TEXTS.PROJECTS);
        break;
      case "works":
        setRenderMenu(<Works />);
        setTitle(TEXTS.WORKS);
        break;
      case "bookmarks":
        setRenderMenu(<Bookmarks />);
        setTitle(TEXTS.BOOKMARKS);
        break;
      default:
        setRenderMenu(<></>);
    }
  }, [firstSegment]);

  const addedClass = subMenuOpen ? "flex" : "lg:flex hidden";

  return (
    <div
      className={`scrollable-area lg:relative absolute flex-col bg-zinc-50 lg:border-r lg:min-w-[350px] lg:max-w-[350px] w-full z-10 ${addedClass} dark:bg-gray-900 dark:border-slate-700`}
    >
      <div
        style={{ zIndex: 11 }}
        className="sticky top-0 border-b bg-zinc-50 dark:border-slate-700 dark:bg-gray-900 px-5 py-3"
      >
        <span className="text-sm font-semibold tracking-tight capitalize dark:text-slate-300">
          {title}
        </span>
      </div>
      <div className="bg-zinc-50 dark:bg-gray-900 p-3 z-1">{renderMenu}</div>
    </div>
  );
}

SubMenu.propTypes = {
  firstSegment: string,
};

SubMenu.defaultProps = {
  firstSegment: "",
};

export default SubMenu;

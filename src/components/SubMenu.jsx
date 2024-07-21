import { useState, useEffect } from "react";
import { string } from "prop-types";
import BlogList from "./SubMenuContent/BlogList";
import Projects from "./SubMenuContent/Projects";
import Works from "./SubMenuContent/Works";
import { useBlogContext } from "../context/BlogContext";

function SubMenu({ firstSegment }) {
  const { subMenuOpen } = useBlogContext();

  const [renderMenu, setRenderMenu] = useState();

  useEffect(() => {
    switch (firstSegment) {
      case "blogs":
        setRenderMenu(<BlogList />);
        break;
      case "projects":
        setRenderMenu(<Projects />);
        break;
      case "works":
        setRenderMenu(<Works />);
        break;
      default:
        setRenderMenu(<></>);
    }
  }, [firstSegment]);

  const addedClass = subMenuOpen ? "flex" : "lg:flex hidden";

  return (
    <div
      className={`scrollable-area lg:pt-0 pt-12 lg:relative absolute flex-col bg-zinc-50 lg:border-r lg:min-w-[350px] lg:max-w-[350px] w-full ${addedClass}`}
    >
      <div style={{zIndex: 11}} className="sticky top-0 border-b bg-zinc-50 px-5 py-3">
        <span className="text-sm font-semibold tracking-tight capitalize">
          {firstSegment}
        </span>
      </div>
      <div className="bg-zinc-50 p-3">{renderMenu}</div>
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

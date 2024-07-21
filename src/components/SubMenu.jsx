import { useState, useEffect } from "react";
import { string } from "prop-types";
import BlogList from "./SubMenuContent/BlogList";
import Projects from "./SubMenuContent/Projects";

function SubMenu({ firstSegment }) {
  const [renderMenu, setRenderMenu] = useState();

  useEffect(() => {
    switch (firstSegment) {
      case "blogs":
        setRenderMenu(<BlogList />);
        break;
      case "projects":
        setRenderMenu(<Projects />);
        break;
      default:
        setRenderMenu(<></>);
    }
  }, [firstSegment]);

  return (
    <div className="scrollable-area relative flex-col hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r min-w-[350px] max-w-[350px]">
      <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
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

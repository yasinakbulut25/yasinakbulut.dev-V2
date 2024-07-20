import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function SubMenu({ firstSegment }) {
  const [renderMenu, setRenderMenu] = useState();

  useEffect(() => {
    switch (firstSegment) {
      case "blogs":
        setRenderMenu(<BlogList />);
        break;
      default:
        setRenderMenu(<></>);
    }
  }, [firstSegment]);

  return (
    <div className="scrollable-area relative flex-col hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r min-w-[350px] max-w-[350px]">
      <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
        <span className="text-sm font-semibold tracking-tight">Blogs</span>
      </div>
      <div className="bg-zinc-50 p-3">{renderMenu}</div>
    </div>
  );
}

export default SubMenu;

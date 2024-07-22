import { Link, useLocation } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Home from "./components/Home";
import LeftMenu from "./components/LeftMenu";
import MobileMenu from "./components/MobileMenu";
import SubMenu from "./components/SubMenu";
import { Routes, Route } from "react-router-dom";
import { findParam } from "./utils/index";
import ProjectDetail from "./components/ProjectDetail";
import WorkDetail from "./components/WorkDetail";
import Experiences from "./components/Experiences";
import { useBlogContext } from "./context/BlogContext";
import { LINKS } from "./utils/constants";

function App() {
  const { language } = useBlogContext();

  const location = useLocation();
  const firstSegment = findParam(location.pathname, 1);

  return (
    <main className="lg:flex block flex-1">
      <MobileMenu />
      <LeftMenu />
      {firstSegment && firstSegment !== "experiences" && (
        <SubMenu firstSegment={firstSegment} />
      )}
      <div className="flex flex-1">
        <div className="scrollable-area relative flex w-full flex-col bg-white p-8">
          <Routes>
            <Route path="/tr" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path={`/${language}/blogs/:url`} element={<BlogDetail />} />
            <Route
              path={`/${language}/projects/:url`}
              element={<ProjectDetail />}
            />
            <Route path={`/${language}/works/:url`} element={<WorkDetail />} />
            <Route
              path={`/${language}/experiences`}
              element={<Experiences />}
            />
          </Routes>
          <footer className="w-full flex justify-center items-center border-t border-slate-200 pt-6">
            <span className="text-slate-400 text-xs flex gap-2">
              <Link
                className="underline underline-offset-4 decoration-solid decoration-slate-300"
                target="_blank"
                to={LINKS.LINKEDIN}
              >
                Yasin Akbulut
              </Link>
              @2024
            </span>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default App;

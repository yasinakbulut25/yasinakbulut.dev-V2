import { useLocation } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Home from "./components/Home";
import LeftMenu from "./components/LeftMenu";
import MobileMenu from "./components/MobileMenu";
import SubMenu from "./components/SubMenu";
import { Routes, Route } from "react-router-dom";
import { findFirstParam } from "./utils/index";
import ProjectDetail from "./components/ProjectDetail";
import WorkDetail from "./components/WorkDetail";
import Experiences from "./components/Experiences";

function App() {
  const location = useLocation();
  const firstSegment = findFirstParam(location.pathname);

  return (
    <main className="lg:flex block flex-1">
      <MobileMenu />
      <LeftMenu />
      {firstSegment && firstSegment !== "experiences" && (
        <SubMenu firstSegment={firstSegment} />
      )}
      <div className="lg:pt-0 pt-10 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:url" element={<BlogDetail />} />
          <Route path="/projects/:url" element={<ProjectDetail />} />
          <Route path="/works/:url" element={<WorkDetail />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;

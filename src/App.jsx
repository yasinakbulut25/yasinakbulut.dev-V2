import { useLocation } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Home from "./components/Home";
import LeftMenu from "./components/LeftMenu";
import MobileMenu from "./components/MobileMenu";
import SubMenu from "./components/SubMenu";
import { Routes, Route } from "react-router-dom";
import { findFirstParam } from "./utils/index";

function App() {
  const location = useLocation();
  const firstSegment = findFirstParam(location.pathname);

  return (
    <main className="lg:flex block flex-1">
      <MobileMenu />
      <LeftMenu />
      {firstSegment && <SubMenu firstSegment={firstSegment} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:url" element={<BlogDetail />} />
      </Routes>
    </main>
  );
}

export default App;

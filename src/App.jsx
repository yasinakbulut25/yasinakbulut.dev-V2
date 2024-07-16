import BlogDetail from "./components/BlogDetail";
import LeftMenu from "./components/LeftMenu";
import MobileMenu from "./components/MobileMenu";
import SubMenu from "./components/SubMenu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="lg:flex block flex-1">
      <MobileMenu />
      <LeftMenu />
      <SubMenu />
      <Routes>
        <Route path="/" element={<BlogDetail />} />
      </Routes>
    </main>
  );
}

export default App;

import BlogDetail from "./components/BlogDetail";
import LeftMenu from "./components/LeftMenu";
import SubMenu from "./components/SubMenu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="flex">
      <LeftMenu />
      <div className="flex flex-1">
        <SubMenu />
        <Routes>
          <Route path="/" element={<BlogDetail />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;

import BlogDetail from "./components/BlogDetail";
import BlogTopics from "./components/BlogTopics";
import LeftMenu from "./components/LeftMenu";
import Profile from "./components/Profile";

function App() {
  return (
    <main className="scrollable-area">
      <LeftMenu />
      {/*   <div className="lg:w-3/4 w-full">
        <BlogDetail />
      </div>
      <div className="lg:w-1/4 w-full lg:border-l border-transparent border-slate-200 lg:pl-8 ">
        <div className="sticky top-24 gap-8 flex lg:flex-col flex-col-reverse w-full">
          <Profile />
          <BlogTopics />
        </div>
      </div> */}
    </main>
  );
}

export default App;

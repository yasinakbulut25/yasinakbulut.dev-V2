import BlogDetail from "./components/BlogDetail";
import BlogTopics from "./components/BlogTopics";
import NavbarUI from "./components/NavbarUI";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <NavbarUI />
      <main className="flex lg:flex-row flex-col gap-8 justify-between pt-8 pb-16 px-4 mx-auto max-w-screen-xl">
        <div className="lg:w-3/4 w-full">
          <BlogDetail />
        </div>
        <div className="lg:w-1/4 w-full lg:border-l border-transparent border-slate-200 pl-8 ">
          <div className="sticky top-24">
            <Profile />
            <BlogTopics />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

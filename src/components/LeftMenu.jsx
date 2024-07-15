import Profile from "./Profile";

function LeftMenu() {
  return (
    <div className="scrollable-area relative w-full flex-col hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-60 xl:w-72">
      <div className="bg-zinc-50 px-4 py-6">
        <div className="flex w-full flex-col text-sm">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;

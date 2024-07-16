import Profile from "./Profile";

function LeftMenu() {
  return (
    <div className="scrollable-area relative flex-col hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r min-w-64">
      <div className="bg-zinc-50 px-4 py-6">
        <div className="flex w-full flex-col text-sm">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;

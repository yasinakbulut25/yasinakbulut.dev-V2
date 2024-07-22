import Profile from "./Profile";

function LeftMenu() {
  return (
    <div className="scrollable-area relative flex-col hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:min-w-[265px] lg:max-w-[265px] dark:bg-gray-900 dark:border-slate-700">
      <div className="px-4 py-6">
        <div className="flex w-full flex-col text-sm">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;

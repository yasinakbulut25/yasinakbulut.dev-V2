function SubMenu() {
  return (
    <div className="scrollable-area relative w-full flex-col hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-80 xl:w-96">
      <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
        <span className="text-sm font-semibold tracking-tight">Blogs</span>
      </div>
      <div className="bg-zinc-50 p-3">
        <div className="flex flex-col gap-1 text-sm">
          <a
            className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-3"
            href="/writing/mini-itx-teenage-engineering-computer-1"
          >
            <span className="font-medium">
              Building a Mini-ITX PC with Teenage Engineering Computer-1 and
              Apple Studio Display
            </span>
            <span className="transition-colors duration-300 text-slate-500">
              <time>May 21, 2024</time>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;

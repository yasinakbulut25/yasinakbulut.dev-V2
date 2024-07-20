
function BlogList() {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <a
        className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-2"
        href="/writing/mini-itx-teenage-engineering-computer-1"
      >
        <span className="font-medium">
          Building a Mini-ITX PC with Teenage Engineering Computer-1 and Apple
          Studio Display
        </span>
        <span className="transition-colors duration-300 text-slate-500">
          <time>May 21, 2024</time>
        </span>
      </a>
    </div>
  );
}

export default BlogList;

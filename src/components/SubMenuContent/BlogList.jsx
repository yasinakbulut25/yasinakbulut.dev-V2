import { NavLink } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import { blogComponents } from "../../content/blog/blogs";

function BlogList() {
  const { setSubMenuOpen, language } = useBlogContext();
  return (
    <div className="navLinks flex flex-col gap-1 text-sm">
      {blogComponents.map((blog, index) => {
        return (
          <NavLink
            key={index}
            onClick={() => setSubMenuOpen(false)}
            className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-lg p-3"
            to={`/${language}/blogs/${blog.url}`}
          >
            <span className="font-semibold dark:text-slate-300">{blog.title}</span>
            <div className="flex flex-wrap gap-1 transition-colors duration-300 text-slate-500 dark:text-slate-400 mt-1">
              {blog.categories.map((c, i) => {
                return <span className="text-[10px] px-[4px] py-[2px] bg-slate-300/40 dark:bg-slate-600/40 rounded" key={i}>{c}</span>;
              })}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default BlogList;

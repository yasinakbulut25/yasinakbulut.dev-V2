import { NavLink } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import { blogComponents } from "../../content/blog/blogs";

function BlogList() {
  const { setSubMenuOpen, language } = useBlogContext();
  return (
    <div className="navLinks flex flex-col gap-1 text-sm">
      {blogComponents.map((blog) => {
        return (
          <NavLink
            key={blog.id}
            onClick={() => setSubMenuOpen(false)}
            className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-lg p-3"
            to={`/${language}/blogs/${blog.url}`}
          >
            <span className="font-semibold dark:text-slate-300">{blog.title}</span>
            <time className="transition-colors duration-300 text-slate-500 dark:text-slate-500">
              {blog.date}
            </time>
          </NavLink>
        );
      })}
    </div>
  );
}

export default BlogList;

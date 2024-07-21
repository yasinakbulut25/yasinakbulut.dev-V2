import { NavLink } from "react-router-dom";
import { blogComponents } from "../../utils/blogs";
import { useBlogContext } from "../../context/BlogContext";

function BlogList() {
  const { setSubMenuOpen} = useBlogContext();
  return (
    <div className="navLinks flex flex-col gap-1 text-sm">
      {blogComponents.map((blog) => {
        return (
          <NavLink
            key={blog.id}
            onClick={() => setSubMenuOpen(false)}
            className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-3"
            to={`/blogs/${blog.url}`}
          >
            <span className="font-medium">{blog.title}</span>
            <time className="transition-colors duration-300 text-slate-500">
              {blog.date}
            </time>
          </NavLink>
        );
      })}
    </div>
  );
}

export default BlogList;

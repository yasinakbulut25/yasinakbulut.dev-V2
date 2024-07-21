import { NavLink } from "react-router-dom";
import { blogComponents } from "../utils/blogs";

function BlogList() {
  return (
    <div className="navLinks flex flex-col gap-1 text-sm">
      {blogComponents.map((blog) => {
        return (
          <NavLink
            key={blog.id}
            className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-3"
            to={`/blogs/${blog.url}`}
          >
            <span className="font-medium">{blog.title}</span>
            <time className="transition-colors duration-300 text-slate-400">
              {blog.date}
            </time>
          </NavLink>
        );
      })}
    </div>
  );
}

export default BlogList;

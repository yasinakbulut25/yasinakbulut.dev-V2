import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import { blogComponents } from "../content/blog/blogs";

function BlogDetail() {
  const { url } = useParams();
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  const notFound = () => <div>Component not found</div>;

  useEffect(() => {
    let foundComponent = null;

    // 1. Ana dizide arıyoruz
    const mainBlog = blogComponents.find((b) => b.url === url);
    if (mainBlog) {
      foundComponent = mainBlog.component;
    } else {
      // 2. subData içindeki elemanları arıyoruz
      for (const blog of blogComponents) {
        if (blog.subData) {
          const subBlog = blog.subData.find((sub) => sub.url === url);
          if (subBlog) {
            foundComponent = subBlog.component;
            break; // bulunca çık
          }
        }
      }
    }

    if (foundComponent) {
      setComponent(() => foundComponent);
    } else {
      setComponent(() => notFound);
    }

    setLoading(false);
  }, [url]);

  if (loading) {
    return <Spinner className="w-full h-20" color="default" />;
  }

  return <Component />;
}

export default BlogDetail;

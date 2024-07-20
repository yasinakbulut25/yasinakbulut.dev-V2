import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogComponents } from "../utils/blogs";

function BlogDetail() {
  const { url } = useParams();
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  const notFound = () => <div>Component not found</div>;

  useEffect(() => {
    const blogComponent = blogComponents.find((b) => b.url === url);
    if (blogComponent) {
      setComponent(() => blogComponent.component);
    } else {
      setComponent(() => notFound);
    }
    setLoading(false);
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-1">
      <Component />
    </div>
  );
}

export default BlogDetail;

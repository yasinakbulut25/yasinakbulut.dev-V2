import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogComponents } from "../utils/blogs";
import { Spinner } from "@nextui-org/react";

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
    return <Spinner className="w-full h-20" color="default" />;
  }

  return (
    <div className="flex flex-1">
      <div className="scrollable-area relative flex w-full flex-col bg-white p-8">
        <Component />
      </div>
    </div>
  );
}

export default BlogDetail;

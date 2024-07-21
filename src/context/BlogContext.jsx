import { createContext, useContext } from "react";

const BlogContext = createContext();

export const Provider = ({ children }) => {
  const backendUrl = "https:";

  const sharedValuesAndMethods = {};

  return <BlogContext.Provider value={sharedValuesAndMethods}>{children}</BlogContext.Provider>;
};

export const useBlogContext = () => useContext(BlogContext);

export default BlogContext;
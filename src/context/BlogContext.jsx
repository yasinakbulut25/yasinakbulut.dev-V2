import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const BlogContext = createContext();

export const Provider = ({ children }) => {
  const backendUrl = "https://blogs.yasinakbulut.dev/backend/";
  const filePathUrl = "https://yasinakbulut.dev/";

  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getProjects();
    getWorks();
  }, []);

  const getProjects = async () => {
    await axios.get(backendUrl + "getProjects").then(function (response) {
      setProjects(response.data);
    });
  };

  const getWorks = async () => {
    await axios.get(backendUrl + "getWorks").then(function (response) {
      setWorks(response.data);
    });
  };

  const sharedValuesAndMethods = {
    filePathUrl,
    projects,
    works
  };

  return (
    <BlogContext.Provider value={sharedValuesAndMethods}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);

export default BlogContext;

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const BlogContext = createContext();

export const Provider = ({ children }) => {
  const backendUrl = "https://blogs.yasinakbulut.dev/backend/";
  const filePathUrl = "https://yasinakbulut.dev/";

  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getProjects();
    getWorks();
    getExperiences();
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

  const getExperiences = async () => {
    await axios.get(backendUrl + "getExperiences").then(function (response) {
      setExperiences(response.data);
    });
  };

  const sharedValuesAndMethods = {
    filePathUrl,
    projects,
    works,
    experiences
  };

  return (
    <BlogContext.Provider value={sharedValuesAndMethods}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);

export default BlogContext;

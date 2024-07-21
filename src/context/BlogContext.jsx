import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { findFirstParam, findSecondParam } from "../utils";

const BlogContext = createContext();

export const Provider = ({ children }) => {
  const backendUrl = "https://blogs.yasinakbulut.dev/backend/";
  const filePathUrl = "https://yasinakbulut.dev/";

  const location = useLocation();
  const firstSegment = findFirstParam(location.pathname);
  const secondSegment = findSecondParam(location.pathname);
  const [subMenuOpen, setSubMenuOpen] = useState((firstSegment && !secondSegment) ? true : false);

  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getAbout();
    getProjects();
    getWorks();
    getExperiences();
  }, []);

  const getAbout = async () => {
    await axios.get(backendUrl + "getAbout").then(function (response) {
      setAbout(response.data);
    });
  };

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
    experiences,
    about,
    subMenuOpen,
    setSubMenuOpen,
  };

  return (
    <BlogContext.Provider value={sharedValuesAndMethods}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);

export default BlogContext;

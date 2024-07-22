import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { findParam } from "../utils";
import { languagesTexts } from "../utils/constants";

const BlogContext = createContext();

export const Provider = ({ children }) => {
  const backendUrl = "https://blogs.yasinakbulut.dev/backend/";
  const filePathUrl = "https://yasinakbulut.dev/";

  const navigate = useNavigate();
  const location = useLocation();

  const language = findParam(location.pathname, 0);
  const firstSegment = findParam(location.pathname, 1);
  const secondSegment = findParam(location.pathname, 2);

  const currentLangIndex = language === "tr" ? 0 : 1;

  const [lang, setLang] = useState(currentLangIndex);
  const TEXTS = languagesTexts[lang];

  const [subMenuOpen, setSubMenuOpen] = useState(
    firstSegment && !secondSegment ? true : false
  );

  const localStorageParam = "YasinV2Theme";
  const [theme, setTheme] = useState(
    localStorage.getItem(localStorageParam) || "light"
  );

  const [about, setAbout] = useState();
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getAbout();
    getProjects();
    getWorks();
    getExperiences();
  }, [lang]);

  useEffect(() => {
    const storedTheme = localStorage.getItem(localStorageParam);
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem(localStorageParam, "light");
    }
    applyTheme(storedTheme || "light");
  }, []);

  const applyTheme = (theme) => {
    if (document) {
      document.body.className = theme;
    }
  };

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(localStorageParam, newTheme);
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (!currentPath.startsWith("/tr") && !currentPath.startsWith("/en")) {
      navigate("/tr", { replace: true });
    }
  }, [navigate]);

  const getAbout = async () => {
    await axios.get(backendUrl + "getAbout/" + lang).then(function (response) {
      setAbout(response.data);
    });
  };

  const getProjects = async () => {
    await axios
      .get(backendUrl + "getProjects/" + lang)
      .then(function (response) {
        setProjects(response.data);
      });
  };

  const getWorks = async () => {
    await axios.get(backendUrl + "getWorks/" + lang).then(function (response) {
      setWorks(response.data);
    });
  };

  const getExperiences = async () => {
    await axios
      .get(backendUrl + "getExperiences/" + lang)
      .then(function (response) {
        setExperiences(response.data);
      });
  };

  console.log("theme :>> ", theme);
  const sharedValuesAndMethods = {
    filePathUrl,
    projects,
    works,
    experiences,
    about,
    subMenuOpen,
    language,
    setLang,
    setSubMenuOpen,
    TEXTS,
    theme,
    handleThemeChange,
  };

  return (
    <BlogContext.Provider value={sharedValuesAndMethods}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);

export default BlogContext;

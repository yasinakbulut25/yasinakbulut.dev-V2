import { NavLink } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import { Chip, Image, Spinner } from "@nextui-org/react";
import { codingStringToArray, codingValues } from "../../utils";

function Projects() {
  const { projects, filePathUrl, setSubMenuOpen, language } = useBlogContext();

  return (
    <div className="navLinks flex lg:flex-col flex-wrap gap-4 text-sm justify-center">
      {projects.length > 0 ? (
        projects.map((project) => {
          const codings = codingStringToArray(project.coding);
          return (
            <NavLink
              key={project.id}
              onClick={() => setSubMenuOpen(false)}
              className="flex flex-col gap-3 transition-colors duration-300 border border-slate-200 hover:bg-gray-200 dark:border-slate-700 dark:hover:bg-gray-800 rounded-lg p-3 max-w-[325px]"
              to={`/${language}/projects/${project.id}`}
            >
              <span className="font-medium dark:text-slate-300">
                {project.name}
              </span>
              <Image
                className="aspect-video object-cover"
                width={300}
                height={150}
                src={filePathUrl + project.image}
              />
              <span className="flex flex-wrap gap-2">
                {codings.map((code, index) => (
                  <Chip
                    key={index}
                    variant="flat"
                    size="sm"
                    className="dark:bg-slate-700/40 dark:text-slate-400"
                  >
                    {codingValues[code]}
                  </Chip>
                ))}
              </span>
            </NavLink>
          );
        })
      ) : (
        <Spinner className="w-full h-20" color="default" />
      )}
    </div>
  );
}

export default Projects;

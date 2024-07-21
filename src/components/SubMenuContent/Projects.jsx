import { NavLink } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import { Chip, Image, Spinner } from "@nextui-org/react";
import { codingStringToArray, codingValues } from "../../utils";

function Projects() {
  const { projects, filePathUrl, setSubMenuOpen } = useBlogContext();

  return (
    <div className="navLinks flex lg:flex-col flex-wrap gap-4 text-sm">
      {projects.length > 0 ? (
        projects.map((project) => {
          const codings = codingStringToArray(project.coding);
          return (
            <NavLink
              key={project.id}
              onClick={() => setSubMenuOpen(false)}
              className="flex flex-col gap-2 transition-colors duration-300 border border-slate-200 hover:bg-gray-200 rounded-lg p-3 max-w-[325px]"
              to={`/projects/${project.id}`}
            >
              <span className="font-medium">{project.name}</span>
              <Image
                className="aspect-video object-cover"
                width={300}
                height={150}
                src={filePathUrl + project.image}
              />
              <span className="flex flex-wrap gap-2">
                {codings.map((code, index) => (
                  <Chip key={index} variant="flat" size="sm">
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

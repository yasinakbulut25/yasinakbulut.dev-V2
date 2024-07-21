import { NavLink } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import { Chip, Image, Spinner } from "@nextui-org/react";
import { codingStringToArray, codingValues } from "../../utils";

function Works() {
  const { works, filePathUrl } = useBlogContext();

  return (
    <div className="navLinks flex flex-col gap-4 text-sm">
      {works.length > 0 ? (
        works.map((project) => {
          const codings = codingStringToArray(project.coding);
          return (
            <NavLink
              key={project.id}
              className="flex flex-col gap-2 transition-colors duration-300 border border-slate-200 hover:bg-gray-200 rounded-lg p-3"
              to={`/works/${project.id}`}
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

export default Works;

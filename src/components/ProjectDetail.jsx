import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBlogContext } from "../context/BlogContext";
import { Button, Chip, Image, Link, Spinner } from "@nextui-org/react";
import { codingStringToArray, codingValues } from "../utils";

function ProjectDetail() {
  const { projects, filePathUrl } = useBlogContext();
  const { url } = useParams();
  const [project, setProject] = useState(null);
  const [codings, setCodings] = useState([]);

  useEffect(() => {
    const findProject = projects.find((b) => b.id === url);
    if (findProject) {
      setProject(findProject);
      setCodings(codingStringToArray(findProject.coding));
    }
  }, [projects, url]);

  return (
    <div className="flex flex-1">
      <div className="scrollable-area relative flex w-full flex-col bg-white p-8">
        {project ? (
          <article className="flex flex-col gap-4 lg:border-transparent border-b border-slate-200 pb-8">
            <h1 className="p-0 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
              {project.name}
            </h1>
            <Image src={filePathUrl + project.image} alt={project.name} />
            <div
              className="content-html text-md text-gray-800 flex flex-col"
              dangerouslySetInnerHTML={{ __html: project.exp }}
            ></div>
            <span className="flex flex-wrap gap-2 my-4">
              {codings.map((code, index) => (
                <Chip key={index} variant="flat" size="sm">
                  {codingValues[code]}
                </Chip>
              ))}
            </span>
            <Button
              size="lg"
              className="lg:fixed bg-black text-white z-10 lg:right-12 lg:bottom-8 lg:w-max shadow-lg"
              as={Link}
              href={project.link}
              target="_blank"
              showAnchorIcon
            >
              Live Project
            </Button>
          </article>
        ) : (
          <Spinner className="w-full h-20" color="default" />
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;

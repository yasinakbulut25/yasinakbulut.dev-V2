import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBlogContext } from "../context/BlogContext";
import { Button, Chip, Image, Link, Spinner } from "@nextui-org/react";
import { codingStringToArray, codingValues } from "../utils";
import { Eye, Github } from "lucide-react";

function WorkDetail() {
  const { works, filePathUrl, TEXTS } = useBlogContext();
  const { url } = useParams();
  const [content, setContent] = useState(null);
  const [codings, setCodings] = useState([]);

  useEffect(() => {
    const findContent = works.find((b) => b.id === url);
    if (findContent) {
      setContent(findContent);
      setCodings(codingStringToArray(findContent.coding));
    }
  }, [works, url]);

  return (
    <>
      {content ? (
        <article className="flex flex-col gap-4 lg:border-transparent border-b border-slate-200 dark:border-slate-700 pb-8 lg:pt-0 pt-8">
          <h1 className="p-0 text-3xl font-extrabold leading-tight text-gray-900 dark:text-slate-300 lg:text-4xl">
            {content.name}
          </h1>
          <Image src={filePathUrl + content.image} alt={content.name} />
          <div
            className="content-html text-md text-gray-800 dark:text-slate-400"
            dangerouslySetInnerHTML={{ __html: content.exp }}
          ></div>
          <span className="flex flex-wrap gap-2 my-4">
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
          <div className="flex gap-4 lg:flex-row flex-col lg:fixed z-10 lg:right-12 lg:bottom-8">
            {content.github && (
              <Button
                size="lg"
                className="bg-black text-white lg:w-max shadow-lg"
                as={Link}
                href={content.github}
                target="_blank"
                showAnchorIcon
                startContent={<Github width={16} />}
              >
                GitHub
              </Button>
            )}
            <Button
              size="lg"
              className="lg:w-max shadow-lg bg-indigo-600 text-white"
              as={Link}
              href={content.link}
              target="_blank"
              showAnchorIcon
              startContent={<Eye width={16} />}
            >
              {TEXTS.LIVE_PROJECT}
            </Button>
          </div>
        </article>
      ) : (
        <Spinner className="w-full h-20" color="default" />
      )}
    </>
  );
}

export default WorkDetail;

import { Avatar, Spinner } from "@nextui-org/react";
import { useBlogContext } from "../context/BlogContext";

function Experiences() {
  const { experiences, filePathUrl, TEXTS } = useBlogContext();

  return (
    <>
      {experiences.length > 0 ? (
        <div className="max-w-xl mx-auto py-8 lg:px-0 px-4">
          <h1 className="p-0 text-3xl font-bold leading-tight text-gray-900 dark:text-slate-300 lg:text-4xl mb-8">
            {TEXTS.MY_EXPERIENCES}
          </h1>
          <ol className="relative border-l border-gray-200 dark:border-slate-700">
            {experiences.map((experince) => (
              <li key={experince.id} className="mb-10 ms-12">
                <span className="absolute flex items-center justify-center rounded-full -start-7 ring-8 ring-transparent dark:ring-slate-900">
                  <Avatar
                    size="lg"
                    radius="lg"
                    className="bg-transparent shadow-lg hover:scale-110 duration-300"
                    src={filePathUrl + experince.image}
                  />
                </span>
                <span className="w-full flex justify-between items-center gap-2">
                  <h3 className="flex items-center mb-1 lg:text-xl text-lg font-semibold text-gray-900 dark:text-slate-300">
                    {experince.title}
                  </h3>
                  <span className="md:block hidden mb-2 text-xs font-normal leading-none text-gray-400 dark:text-slate-400">
                    {`${experince.startDate} - ${experince.endDate}`}
                  </span>
                </span>
                <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-slate-400">
                  {experince.company}
                  <span className="md:hidden inline-flex ml-1">{`| ${experince.startDate} - ${experince.endDate}`}</span>
                </span>
                <div
                  className="content-html mb-4 text-base font-normal text-gray-60 dark:text-slate-400"
                  dangerouslySetInnerHTML={{ __html: experince.exp }}
                ></div>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <Spinner className="w-full h-20" color="default" />
      )}
    </>
  );
}

export default Experiences;

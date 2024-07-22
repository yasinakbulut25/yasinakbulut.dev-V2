import { Button, Image, Spinner } from "@nextui-org/react";
import { useBlogContext } from "../context/BlogContext";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";
import ReactIcon from "../assets/react.svg";
import TailwindIcon from "../assets/tailwind.svg";
import ViteIcon from "../assets/vite.svg";
import NextUI from "../assets/nextui.svg";
import AxiosIcon from "../assets/axios.svg";
import LucideReact from "../assets/lucideReact.svg";
import ReactRouter from "../assets/reactRouterDom.svg";
import Php from "../assets/php.svg";
import GitHub from "../assets/github.svg";
import Cpanel from "../assets/cpanel.svg";

function Home() {
  const { about, TEXTS } = useBlogContext();

  return (
    <>
      {about ? (
        <div className="max-w-xl mx-auto py-8">
          <h1 className="flex flex-col p-0 mb-8 gap-2">
            <span className="flex gap-1 text-md text-gray-600 dark:text-slate-400">
              👋 {about.hello}
              <span className="sm:hidden flex">{about.ıam},</span>
            </span>
            <span className="text-3xl flex sm:flex-row flex-col gap-2 font-extrabold leading-tight text-gray-900 lg:text-4xl">
              <span className="sm:flex hidden dark:text-slate-400">{about.ıam},</span>
              <TypeAnimation
                className="text-indigo-600 dark:text-indigo-500"
                sequence={[
                  "Yasin Akbulut.",
                  1000,
                  "UI Developer.",
                  1000,
                  "Frontend Developer.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <div
            className="content-html mb-4 text-base font-normal text-gray-700 dark:text-slate-400"
            dangerouslySetInnerHTML={{ __html: about.about }}
          ></div>

          <Button
            className="bg-black text-white mt-4 dark:bg-slate-800 dark:text-slate-300"
            endContent={<Download width={16} />}
          >
            {about.download}
          </Button>

          <span className="block text-sm font-normal text-gray-500 dark:text-slate-400 mt-6">
            {TEXTS.CV_TEXT}
          </span>

          <div className="flex gap-4 flex-col my-8">
            <h2 className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-slate-400 lg:text-3xl">
              {TEXTS.WHAT_I_USED}
            </h2>

            <span className="block text-sm font-normal text-gray-500 dark:text-slate-400 mt-2 mb-2">
              {TEXTS.WHAT_I_USED_DESC}
            </span>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={ReactIcon}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">React</h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={NextUI}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">NextUI</h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={TailwindIcon}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">
                  Tailwind
                </h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={GitHub}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">GitHub</h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={ViteIcon}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">Vite</h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={AxiosIcon}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">Axios</h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={LucideReact}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">
                  Lucide React
                </h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={Php}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">PHP</h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={Cpanel}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">Cpanel</h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  src={ReactRouter}
                />
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">
                  React Router Dom
                </h3>
              </div>
              <div className="flex flex-col gap-1 text-center border border-slate-200 dark:border-slate-700 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 duration-300">
                <span className="block text-[65px]">🧩</span>
                <h3 className="text-md font-semibold text-gray-900 dark:text-slate-500">
                  React Code Block
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner className="w-full h-20" color="default" />
      )}
    </>
  );
}

export default Home;

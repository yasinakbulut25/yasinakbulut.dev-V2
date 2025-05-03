import { Rocket } from "lucide-react";
import { useBlogContext } from "../context/BlogContext";

function Skills() {
  const { TEXTS, language } = useBlogContext();

  const skillData = [
    {
      title: {
        en: "Tech Stack",
        tr: "Kullandığım Teknolojiler",
      },
      items: [
        "React",
        "Next.js",
        "Redux",
        "Saga",
        "Context API",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS/SCSS",
        "Styled Components",
        "PHP (PDO)",
        "TailwindCSS",
        "Bootstrap",
        "UI Libraries",
      ],
    },
    {
      title: {
        en: "API & Database",
        tr: "API & Veritabanı",
      },
      items: [
        "RESTful API Integration",
        "Axios",
        "JSON",
        "Postman",
        "MySQL",
        "PhpMyAdmin",
      ],
    },
    {
      title: {
        en: "Tools & Deployment",
        tr: "Araçlar ve Yayınlama",
      },
      items: [
        "Git / GitHub",
        "Monorepo",
        "RDS",
        "ESLint",
        "Figma for dev",
        "Notion",
        "Slack",
        "CPanel",
        "Vercel",
        "Netlify",
      ],
    },
    {
      title: {
        en: "Workflow",
        tr: "Çalışma Süreci",
      },
      items: [
        "Agile / Scrum Methodology",
        "Problem Solving",
        "Team Collaboration",
      ],
    },
    {
      title: {
        en: "Currently Learning",
        tr: "Şu Anda Öğrendiklerim",
      },
      items: ["TypeScript", "Vue.js"],
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto py-8 lg:px-0 px-4">
        <h1 className="flex items-center gap-3 p-0 text-3xl font-bold leading-tight text-gray-900 dark:text-slate-300 lg:text-4xl mb-8">
          <Rocket color="#4f46e5" width={28} height={28} /> {TEXTS.MY_SKILLS}
        </h1>
        <div className="flex flex-col gap-8">
          {skillData.map((skill, index) => {
            return (
              <div key={index} className="flex items-baseline gap-[6px]">
                <h3 className="text-md font-semibold min-w-max">
                  {skill.title["en"]}:{" "}
                </h3>
                <div className="flex items-center gap-[8px] flex-wrap">
                  {skill.items.map((s, index) => {
                    return (
                      <span
                        key={index}
                        className="flex min-w-max text-[13px] py-1 px-2 bg-gray-200 text--600 rounded w-max"
                      >
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;

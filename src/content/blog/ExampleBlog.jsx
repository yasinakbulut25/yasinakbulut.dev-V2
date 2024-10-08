import CodeBlockUI from "../../components/ui/CodeBlockUI";
import ImageUI from "../../components/ui/ImageUI";
import { Link } from "@nextui-org/react";
import TableUI from "../../components/ui/TableUI";
import { CalendarDays } from "lucide-react";

function Blog2() {
  const code = `
    const welcomeMessage = "Hello,";
    let target = "world!";
    
    function greet(target) {
      console.log(welcomeMessage + " " + target);
    }
    
    greet(target);
    
    for (let i = 0; i < 5; i++) {
      console.log();
    }
  `;

  const highlightedLines = ["4:6", 8];
  const language = "jsx";

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <article className="flex flex-col gap-4 lg:border-transparent border-b border-slate-200 pb-8 lg:pt-0 pt-8">
      <div className="flex gap-2 text-gray-500 font-light">
        <CalendarDays width={18} /> April 3, 2024
      </div>
      <h1 className="p-0 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
        Worst practices for successful prototypes
      </h1>

      <p>
        Flowbite is an open-source library of UI components built with the
        utility-first classes from Tailwind CSS. It also includes interactive
        elements such as dropdowns, modals, datepickers.
      </p>

      <ImageUI
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        alt="Digital Image"
      />
      <h2>Getting started with Flowbite</h2>
      <p>
        Youl also receive a lot of useful application UI, marketing UI, and
        e-commerce pages that can help you get started with your projects even
        faster. You can check out this{" "}
        <Link href="#" isExternal showAnchorIcon underline="hover">
          comparison table
        </Link>
        to better understand the differences between the open-source and pro
        version of Flowbite.
      </p>
      <ol className="space-y-2">
        <li>
          <strong>Usability testing</strong>. Does your user know how to exit
          out of screens? Can they follow your intended user journey and buy
          something from the site you’ve designed? By running a usability test,
          you’ll be able to see how users will interact with your design once
          it’s live;
        </li>
        <li>
          <strong>Involving stakeholders</strong>. Need to check if your GDPR
          consent boxes are displaying properly? Pass your prototype to your
          data protection team and they can test it for real;
        </li>
      </ol>
      <h3>Getting started with Flowbite</h3>
      <p>
        Youl also receive a lot of useful application UI, marketing UI, and
        e-commerce pages that can help you get started with your projects even
        faster. You can check out this{" "}
        <Link href="#" isExternal showAnchorIcon underline="hover">
          comparison table
        </Link>
        to better understand the differences between the open-source and pro
        version of Flowbite.
      </p>
      <ul className="space-y-2">
        <li>Low contrast between thick and thin strokes</li>
        <li>Diagonal stress in the strokes</li>
        <li>Slanted serifs on lower-case ascenders</li>
      </ul>

      <CodeBlockUI
        code={code}
        language={language}
        highlightedLines={highlightedLines}
      />

      <TableUI rows={rows} columns={columns} />
    </article>
  );
}

export default Blog2;

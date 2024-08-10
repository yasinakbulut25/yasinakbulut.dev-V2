import { object } from "prop-types";
import { Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
import FallbackImage from "../assets/fallback.png";

function BookmarkItem({ item }) {
  return (
    <Link
      className="shadow-md flex aspect-auto min-w-0 cursor-pointer flex-col gap-3 overflow-hidden rounded-xl border border-transparent dark:border-gray-700 bg-white dark:bg-gray-900 dark:hover:bg-gray-800 p-4 transition-colors duration-300 dark:shadow-transparent"
      to={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={item.image}
        alt={item.description}
        isZoomed
        fallbackSrc={FallbackImage}
        className="aspect-[1200/630] object-cover"
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-md font-bold text-gray-60 dark:text-slate-300">
          {item.title}
        </h2>
        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
          <Link2 width={14} />
          {item.url}
        </span>
        <span className="text-xs text-black text-gray-60 dark:text-slate-400">
          {item.description}
        </span>
      </div>
    </Link>
  );
}

BookmarkItem.propTypes = {
  item: object.isRequired,
};

export default BookmarkItem;

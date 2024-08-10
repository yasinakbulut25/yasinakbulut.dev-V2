import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import { bookmarks } from "../content/bookmarks";
import BookmarkItem from "./BookmarkItem";

function BookmarksDetail() {
  const { url } = useParams();
  const [bookmarkList, setBookmarkList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findBookmarks = bookmarks.find((b) => b.url === url);
    if (findBookmarks) {
      setBookmarkList(() => findBookmarks);
    }
    setLoading(false);
  }, [url]);

  if (loading) {
    return <Spinner className="w-full h-20" color="default" />;
  }

  const firstColumn = bookmarkList.contents.filter(
    (_, index) => index % 2 === 0
  );
  const secondColumn = bookmarkList.contents.filter(
    (_, index) => index % 2 === 1
  );

  return (
    <div className="flex flex-col gap-4 lg:border-transparent pb-8 lg:pt-0 pt-8">
      <h1 className="p-0 text-3xl font-extrabold leading-tight text-gray-900 dark:text-slate-300 lg:text-4xl">
        {bookmarkList.title}
      </h1>
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-4 items-baseline">
          {firstColumn.map((item, index) => (
            <BookmarkItem key={index} item={item} />
          ))}
        </div>
        <div className="grid gap-4 items-baseline">
          {secondColumn.map((item, index) => (
            <BookmarkItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookmarksDetail;

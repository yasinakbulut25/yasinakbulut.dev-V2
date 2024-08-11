import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import { bookmarks } from "../content/bookmarks";
import BookmarkItem from "./BookmarkItem";
import axios from "axios";

function BookmarksDetail() {
  const { url } = useParams();
  const [bookmarkList, setBookmarkList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setBookmarkList([]);

    const cacheValue = `yasinv2-${url}-bm`;
    const cachedData = localStorage.getItem(cacheValue);
    const cacheDuration = 24 * 60 * 60 * 1000; // 24 hours

    const fetchAndCacheData = async () => {
      const findBookmarks = bookmarks.find((b) => b.url === url);

      if (findBookmarks) {
        let metaDatas = [];

        for (let item of findBookmarks.contents) {
          try {
            const response = await axios.get(
              `https://api.dub.co/metatags?url=${item}`
            );
            const newData = {
              url: item,
              ...response.data,
            };
            metaDatas = [...metaDatas, newData];
            setBookmarkList(metaDatas);
          } catch (err) {
            console.error("An error occurred while retrieving metadata!");
          }
        }

        const dataToStore = {
          metadata: metaDatas,
          timestamp: new Date().getTime(),
        };

        localStorage.setItem(cacheValue, JSON.stringify(dataToStore));
        setLoading(false);
      }
    };

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      const now = new Date();

      if (now.getTime() - parsedData.timestamp < cacheDuration) {
        setBookmarkList(parsedData.metadata);
        setLoading(false);
      } else {
        fetchAndCacheData();
      }
    } else {
      fetchAndCacheData();
    }
  }, [url]);

  const firstColumn = bookmarkList.filter((_, index) => index % 2 === 0);
  const secondColumn = bookmarkList.filter((_, index) => index % 2 === 1);

  return (
    <div className="flex flex-col gap-4 lg:border-transparent pb-8 lg:pt-0 pt-8">
      <h1 className="p-0 text-3xl font-bold leading-tight text-gray-900 dark:text-slate-300 lg:text-4xl">
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
      {loading && <Spinner className="w-full h-20" color="default" />}
    </div>
  );
}

export default BookmarksDetail;

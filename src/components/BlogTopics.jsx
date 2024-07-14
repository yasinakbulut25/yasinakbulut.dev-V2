import { Chip } from "@nextui-org/react";

function BlogTopics() {
  return (
    <div className="">
      <div className="space-y-1">
        <h2 className="font-bold text-xl mb-4">Blog Categories</h2>
      </div>
      <div className="flex flex-wrap gap-2 w-full">
        <Chip variant="flat">Dot</Chip>
        <Chip variant="flat">Dasdot</Chip>
        <Chip variant="flat">Doat</Chip>
        <Chip variant="flat">Doasdt</Chip>
        <Chip variant="flat">Doasdt</Chip>
        <Chip variant="flat">Dodt</Chip>
        <Chip variant="flat">Dot</Chip>
      </div>
    </div>
  );
}

export default BlogTopics;

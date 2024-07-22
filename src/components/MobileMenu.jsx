import {
  Modal,
  ModalContent,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import Profile from "./Profile";
import { GanttChart, Github, ArrowLeft } from "lucide-react";
import { useBlogContext } from "../context/BlogContext";
import { LINKS } from "../utils/constants";
import { findParam } from "../utils";
import { NavLink, useLocation } from "react-router-dom";

function MobileMenu() {
  const location = useLocation();
  const { TEXTS, language, setSubMenuOpen } = useBlogContext();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const isDetailPage = findParam(location.pathname, 2);
  const prevPagePath = findParam(location.pathname, 1);

  return (
    <div
      style={{ zIndex: 20 }}
      className="flex fixed inset-x-0 top-0 px-4 h-14 w-full items-center justify-between overflow-hidden border-b bg-zinc-50 dark:bg-slate-900 dark:border-slate-700 text-sm font-medium lg:hidden"
    >
      <div className="flex items-center gap-4">
        {isDetailPage && (
          <Button
            size="sm"
            as={NavLink}
            to={`${language}/${prevPagePath}`}
            onClick={() => setSubMenuOpen(true)}
            className="h-auto min-w-0 p-2 bg-transparent lg:hidden flex dark:text-slate-300"
            startContent={<ArrowLeft width={16} />}
          />
        )}
        <Button
          className="px-0 data-[hover=true]:bg-transparent font-semibold dark:text-slate-300"
          onClick={onOpen}
          variant="light"
        >
          <GanttChart /> {TEXTS.MENU}
        </Button>
      </div>
      <Button
        size="sm"
        className="bg-black dark:bg-slate-800 text-white dark:text-slate-300 lg:w-max shadow-lg"
        as={Link}
        href={LINKS.GITHUB}
        target="_blank"
        showAnchorIcon
        startContent={<Github width={16} />}
      >
        GitHub
      </Button>
      <Modal
        isOpen={isOpen}
        size="lg"
        placement="bottom"
        onOpenChange={onOpenChange}
        className="absolute sm:my-0 rounded-bl-none rounded-br-none dark:bg-slate-900"
      >
        <ModalContent className="my-0">
          <div className="absolute-top-0 w-28 h-2 bg-gray-200 dark:bg-slate-800 rounded-full mx-auto mt-2"></div>
          <div className="p-6">
            <Profile closeMenu={onClose} />
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default MobileMenu;

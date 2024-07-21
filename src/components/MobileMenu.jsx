import { Modal, ModalContent, Button, useDisclosure, Link } from "@nextui-org/react";
import Profile from "./Profile";
import { GanttChart, Github } from "lucide-react";

function MobileMenu() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <div
      style={{ zIndex: 20 }}
      className="flex fixed inset-x-0 top-0 px-4 h-14 w-full items-center justify-between overflow-hidden border-b bg-white text-sm font-medium lg:hidden"
    >
      <Button
        className="px-0 data-[hover=true]:bg-transparent"
        onPress={onOpen}
        variant="light"
      >
        <GanttChart /> Menu
      </Button>
      <Button
        size="sm"
        className="bg-black text-white lg:w-max shadow-lg"
        as={Link}
        href='https://github.com/yasinakbulut25'
        target="_blank"
        showAnchorIcon
        startContent={<Github width={16} />}
      >
        My GitHub
      </Button>
      <Modal
        isOpen={isOpen}
        size="lg"
        placement="bottom"
        onOpenChange={onOpenChange}
        className="absolute sm:my-0 rounded-bl-none rounded-br-none"
      >
        <ModalContent>
          <div className="absolute-top-0 w-28 h-2 bg-gray-200 rounded-full mx-auto mt-2"></div>
          <div className="p-6">
            <Profile closeMenu={onClose} />
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default MobileMenu;

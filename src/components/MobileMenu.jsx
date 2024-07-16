import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import Profile from "./Profile";
import { GanttChart } from "lucide-react";

function MobileMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex sticky inset-x-0 top-0 z-10 px-4 h-12 w-full items-center justify-between overflow-hidden border-b bg-white text-sm font-medium lg:hidden">
      <Button
        className="px-0 data-[hover=true]:bg-transparent"
        onPress={onOpen}
        variant="light"
      >
        <GanttChart /> Menu
      </Button>
      <h3>Blog Title</h3>
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
            <Profile />
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default MobileMenu;

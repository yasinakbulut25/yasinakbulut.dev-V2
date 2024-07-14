import { useCopyToClipboard } from "react-use";
import { Copy, Check } from "lucide-react";
import { Tooltip, Button } from "@nextui-org/react";

function CopyButton({ code }) {
  const [isCopied, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    copyToClipboard(code);
  };

  return (
    <Tooltip content="Copy Code">
      <Button
        className="absolute top-2 right-2 text-white px-2 py-1 max-w-8 min-w-0 h-auto"
        onClick={copyCode}
        variant="light"
      >
        {isCopied.value ? <Check /> : <Copy />}
      </Button>
    </Tooltip>
  );
}

export default CopyButton;

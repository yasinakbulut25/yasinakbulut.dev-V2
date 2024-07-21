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
        className="text-gray-700 px-2 py-1 min-w-0 h-auto"
        onClick={copyCode}
        variant="light"
      >
        {isCopied.value ? <Check width={18} /> : <Copy width={18} />}
      </Button>
    </Tooltip>
  );
}

export default CopyButton;

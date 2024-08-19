import { useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { Copy, Check } from 'lucide-react';
import { Tooltip, Button } from '@nextui-org/react';

function CopyButton({ code }) {
  const [isCopied, copyToClipboard] = useCopyToClipboard();
  const [isCopying, setIsCopying] = useState(false);

  const copyCode = () => {
    copyToClipboard(code);
    setIsCopying(true);

    setTimeout(() => {
      setIsCopying(false);
    }, 3000);
  };

  return (
    <Tooltip className='text-gray-900 dark:text-slate-400' content="Copy Code">
      <Button
        className="text-gray-700 dark:text-gray-500 px-2 py-1 min-w-0 h-auto"
        onClick={copyCode}
        variant="light"
      >
        {isCopying && isCopied ? <Check width={18} /> : <Copy width={18} />}
      </Button>
    </Tooltip>
  );
}

export default CopyButton;

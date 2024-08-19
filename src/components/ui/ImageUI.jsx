import { Image } from "@nextui-org/react";

function ImageUI({ src, alt }) {
  return <Image width={1200} height={400} alt={alt} src={src} />;
}

export default ImageUI;

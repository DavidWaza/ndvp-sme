import React from "react";
import Image from "next/image";

interface ImageProps {
  src: any;
  width: number;
  height: number;
  className: string;
}
const ImageView: React.FC<ImageProps> = ({ src, width, height, className }) => {
  return (
    <div>
      <Image
        src={src}
        width={width}
        height={height}
        alt="images"
        className={className}
      />
    </div>
  );
};

export default ImageView;

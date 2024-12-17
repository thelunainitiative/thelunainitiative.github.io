import React from "react";
import Image, { StaticImageData } from "next/image";

export const TeamCard: React.FC<{
  imageSrc: StaticImageData;
  name: string;
  position: string;
}> = ({ imageSrc, name, position }) => (
  <div className="flex flex-col items-center p-5 h-80 md:h-[369px] w-44 md:w-64 bg-luna-blue text-luna-beige rounded-lg text-center">
    <Image className="w-[137px] md:w-[213px] h-[137px] md:h-[213px] object-cover" src={imageSrc} alt="luna team" />
    <p className="text-lg font-bold mt-5 leading-tight">{name}</p>
    <p className="py-3 leading-tight">{position}</p>
  </div>
);

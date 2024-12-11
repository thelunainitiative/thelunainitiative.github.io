import React from "react";
import Image, { StaticImageData } from "next/image";

export const TeamCard: React.FC<{
  imageSrc: StaticImageData;
  name: string;
  position: string;
}> = ({ imageSrc, name, position }) => (
  <div className="flex flex-col items-center p-5 h-[369px] w-64 bg-luna-blue text-white rounded-lg text-center">
    <Image src={imageSrc} width={213} alt="luna team" />
    <p className="text-lg font-bold mt-5">{name}</p>
    <p className="py-3">{position}</p>
  </div>
);

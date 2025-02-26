"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

interface TeamCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, imageSrc }) => {
  return (
    <div className='w-[95%] sm:w-full bg-white dark:bg-gray-800 rounded-[20px] overflow-hidden border border-gray-200 dark:border-gray-700 pb-4 shadow-md dark:shadow-gray-900/30 transition-transform duration-300 hover:scale-105'>
      <div className='w-full aspect-[3/4] relative'>
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes='(max-width: 640px) 95vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 240px'
          style={{
            objectFit: "cover",
            padding: "10px",
            borderRadius: "10%",
          }}
          className='dark:brightness-95'
        />
      </div>
      <div className='px-4 py-3 text-left'>
        <h2
          className={`${clashDisplay.className} text-lg sm:text-xl font-bold truncate text-black dark:text-white`}>
          {name}
        </h2>
        <p
          className={`${clashDisplay.className} text-sm sm:text-md text-[#F56E0F] dark:text-[#FF7A1F] line-clamp-2`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;

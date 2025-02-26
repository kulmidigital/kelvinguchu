import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import SlideReveal from "@/components/ui/slidereveal";

// Use Clash Display Font
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

const clashDisplay2 = localFont({
  src: [
    {
      path: "../app/fonts/ClashDisplay-Regular.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const WhyChooseUs = () => {
  // Reusable component for H3 with icon
  const H3WithIcon = ({
    iconSrc,
    altText,
    text,
  }: {
    iconSrc: string;
    altText: string;
    text: string;
  }) => {
    return (
      <>
        <SlideReveal direction='up' duration={0.7}>
          <h3 className='flex items-center text-[16px] sm:text-[18px] text-gray-600 dark:text-gray-300 mb-4'>
            {/* Image (Icon) */}
            <Image
              src={iconSrc}
              alt={altText}
              width={24}
              height={24}
              className='mr-2 dark:invert-[0.15]'
            />
            {/* Text */}
            {text}
          </h3>
        </SlideReveal>
      </>
    );
  };

  return (
    <section className='flex flex-col lg:flex-row px-4 sm:px-6 lg:px-12 justify-between mt-[60px] lg:mt-[100px] dark:bg-gray-900'>
      <div className='w-full lg:w-[48%] p-4 sm:p-6'>
        <SlideReveal direction='left' duration={0.7}>
          <div className={`${clashDisplay.className} text-left`}>
            <h2 className='text-[28px] sm:text-[36px] lg:text-[45px] mb-4 sm:mb-6 dark:text-white'>
              So why us?
            </h2>
            <h3
              className={`${clashDisplay2.className} text-gray-600 dark:text-gray-300 text-[16px] sm:text-[18px] mb-4 sm:mb-6`}>
              We founded Kulmi Digital with a focus on making brands succeed
              online. We not only work with big, national brands but also small
              to medium-sized businesses, and we love it!
            </h3>
          </div>
        </SlideReveal>
        <div className={`${clashDisplay.className}`}>
          <SlideReveal direction='left' duration={0.7}>
            <h3 className='text-xl sm:text-2xl mb-4 text-[#F56E0F] dark:text-[#FF7A1F] font-semibold'>
              Our promise
            </h3>
          </SlideReveal>
          <div className='border-b border-gray-200 dark:border-gray-700 w-full sm:w-[90%] mb-4'></div>

          <div className={`${clashDisplay2.className} space-y-3`} role='list'>
            {/* Reusable H3WithIcon Component Instances */}
            <div role='listitem'>
              <H3WithIcon
                iconSrc='/icons/star.svg'
                altText='star icon'
                text='Your business will never be a second thought.'
              />
            </div>
            <div role='listitem'>
              <H3WithIcon
                iconSrc='/icons/star.svg'
                altText='star icon'
                text='Your brand will always stay relevant and competitive.'
              />
            </div>
            <div role='listitem'>
              <H3WithIcon
                iconSrc='/icons/star.svg'
                altText='star icon'
                text='You will better navigate the fast-paced digital world.'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image on the right side */}
      <div className='relative w-full lg:w-[48%] h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl mb-8 lg:mb-0 overflow-hidden'>
        <Image
          src='/images/choose.webp'
          alt='Why Choose Kulmi Digital'
          fill
          sizes='(max-width: 1024px) 100vw, 48vw'
          className='object-contain dark:brightness-90 rounded-3xl'
          loading='lazy'
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;

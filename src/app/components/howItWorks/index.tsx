"use client";
import React, { useEffect, useRef, useState } from "react";

const videos = [
  {
    title: "For Candidates",
    color: "text-green",
    src: "/assets/videos/HOW_THIS_WORKS_VIDEO_JOB_SEEKERS.mp4",
  },
  {
    title: "For Companies",
    color: "text-red",
    src: "/assets/videos/HOW_THIS_WORKS_VIDEO_EMPLOYERS.mp4",
  },
];

export const HowItWorks = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    // Pause all videos that are currently playing
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
    setCurrentPlaying(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const videoElement = entry.target as HTMLVideoElement;
        if (!entry.isIntersecting) {
          videoElement.pause(); // Pause video when not in view
        }
      });
    });

    // Observe each video element
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Cleanup observer on unmount
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <section id="how_it_works" className="bg-[#f2f2f2]">
      <div className="w-full max-w-[85rem] mx-auto px-4 py-8 md:py-20 md:px-20 lg:px-28  2xl:max-w-[112rem] 2xl:px-40  2xl:py-28   ">
        <h1 className="text-center text-2xl md:text-left md:text-4xl lg:text-[2.6rem] pb-4 2xl:pb-6 2xl:text-[3.2rem]  md:font-medium w-full">
          HOW THIS WORKS
        </h1>

        <p
          className=" block 2xl:hidden text-center md:text-left mt-4 md:mt-14  lg:mt-12 md:text-xl lg:text-[1.6rem 2xl:text-[2rem] max-w-[30rem] 2xl:max-w-[52rem] font-extralight"
          style={{ lineHeight: "2rem" }}
        >
          We care about your comfort, so our team has created a video tutorial
          to simplify the platform adaptation process.
        </p>

        <p
          className=" hidden 2xl:block text-center md:text-left mt-4 md:mt-14  lg:mt-12 md:text-xl lg:text-[1.6rem 2xl:text-[2rem] max-w-[30rem] 2xl:max-w-[52rem] font-extralight"
          style={{ lineHeight: "2.8rem" }}
        >
          We care about your comfort, so our team has created a video tutorial
          to simplify the platform adaptation process.
        </p>

        <div className="mt-8 lg:mt-4 grid grid-cols-1 md:grid-cols-2 gap-6   w-full ">
          {videos.map((video, index) => (
            <div key={index} className="space-y-2 w-full">
              <video
                ref={(el: any) => (videoRefs.current[index] = el)}
                controls
                className="w-full h-auto"
                preload="metadata"
                onPlay={() => handlePlay(index)}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2
                className={`text-2xl font-bold w-full 2xl:text-4xl ${
                  video.title === "For Companies" ? "text-right" : "text-left"
                } ${video.color}`}
              >
                {video.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

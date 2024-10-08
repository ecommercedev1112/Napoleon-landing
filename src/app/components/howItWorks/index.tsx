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
      <div className="w-full  mx-auto px-4 pt-[5%] md:px-[12%] ">
        <h1 className="text-center text-[6vw] md:text-[3vw] md:text-left font-medium w-full">
          HOW THIS WORKS
        </h1>

        <p className="w-full mx-auto md:mx-0 md:mb-10 text-[4.vw] max-w-[22rem] lg:max-w-[28rem] xl:max-w-[38rem] md:text-[1.75vw] text-center md:text-left  mt-[5%] lg:text-[1.6rem 2xl:text-[2rem]  2xl:max-w-[52rem] font-extralight">
          We care about your comfort, so our team has created a video tutorial
          to simplify the platform adaptation process.
        </p>

        <div className="lg:mt-4 grid grid-cols-1 md:grid-cols-2 gap-6   w-full mt-6  pb-[5%]">
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
                className={`text-[4vw] font-bold w-full md:text-[1.75vw] ${
                  video.title === "For Companies" ? "sm:text-right" : "text-left"
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

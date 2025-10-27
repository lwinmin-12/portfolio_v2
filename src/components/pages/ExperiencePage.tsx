"use client";
import React, { useMemo } from "react";

import { Timeline } from "../ui/timeline";
import { LayoutGrid } from "../ui/layout-grid";
import { detExp, douExp, maharExp, mmsItExp } from "@/lib/const";

const ExperiencePage = () => {
  const cards = [
    {
      id: 1,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const data = useMemo(
    () => [
      {
        title: "2022",
        content: (
          <div>
            <div className="flex flex-col sm:flex-row justify-between">
              <div>
                <p>Junior Frontend Developer</p>
                <p className="text-one font-medium sm:text-two">
                  MMS It One Stop It Solution
                </p>
              </div>

              <div className="mt-auto">
                <span className="text-gray-500 text-one px-0 sm:px-1">
                  ( 2022 - 2023 )
                </span>
              </div>
            </div>

            <div className="w-ful my-5">
              <ul className="list-disc">
                <li>
                  Experienced in creating prototypes and wireframes for various
                  websites, and developing both static and dynamic web
                  applications in collaboration with backend teams.{" "}
                </li>
              </ul>
            </div>

            <div className="w-full h-screen">
              <LayoutGrid cards={mmsItExp} />
            </div>
          </div>
        ),
      },
      {
        title: "2023",
        content: (
          <div>
            <div className="flex flex-col sm:flex-row justify-between">
              <div>
                <p>Fullstack Developer ( MERN )</p>
                <p className="text-one font-medium sm:text-two">
                  Digital Engineering Tech LTD
                </p>
              </div>

              <div className="mt-auto">
                <span className="text-gray-500 text-one px-0 sm:px-1">
                  (October / 2022 - November / 2023 )
                </span>
              </div>
            </div>

            <div className="w-full my-5">
              <ul className="list-disc">
                <li>
                  Created prototyping and wireframing collaboration with Ui, UX
                  designer for company websites and company product devices.
                </li>
                <li>
                  Developed Backend Service for the company's smart water
                  controller device and smart home assistant, enabling seamless
                  control of water pumps, light bulbs, fans, and air
                  conditioners. The API integrates voice command functionality,
                  compatible with platforms such as Alexa.
                </li>
                <li>
                  Designed the system architecture and developed both local and
                  cloud backend services for real-time fuel station automation
                  system using Raspberry Pi, Banana Pi M5, and Banana Pi R3,
                  enabling control of Prime and Tatsuno fuel dispensers via
                  mobile apps and cloud websites, with centralized monitoring
                  and data reporting across all stations.
                </li>
              </ul>
            </div>

            <div className="w-full h-screen">
              <LayoutGrid cards={detExp} />
            </div>
          </div>
        ),
      },
      {
        title: "2024",
        content: (
          <div>
            <div className="flex flex-col sm:flex-row justify-between">
              <div>
                <p>Backend Developer ( Node js )</p>
                <p className="text-one font-medium sm:text-two">
                  DouDouDoujin Co., Ltd.
                </p>
              </div>

              <div className="mt-auto">
                <span className="text-gray-500 text-one px-0 sm:px-1">
                  ( August / 2024 - July / 2025 )
                </span>
              </div>
            </div>

            <div className="my-5 w-full">
              <ul className="list-disc">
                <li>
                  Backend Development: Developed core backend features,
                  including Manga, Voice, Manga Pages, and Bookmark modules,
                  ensuring scalable and efficient database management and API
                  performance.
                </li>
                <li>
                  Frontend Development: Collaborated with UI/UX designers to
                  build user interfaces for Manga and Voice-related
                  functionalities, ensuring an intuitive and engaging user
                  experience.
                </li>
                <li>
                  Built responsive interfaces with React and Zustand, developed
                  robust backends using Hono and PostgreSQL, integrated AWS S3,
                  and ensured reliability through unit testing and Bun.js
                  optimizations
                </li>
              </ul>
            </div>

            <div className="w-full h-[60vh]">
              <LayoutGrid cards={douExp} />
            </div>
          </div>
        ),
      },
      {
        title: "2025",
        content: (
          <div>
            <div className="flex flex-col sm:flex-row justify-between">
              <div>
                <p>Frontend Developer ( Next js )</p>
                <p className="text-one font-medium sm:text-two">
                  ABC Content Solutions Co., Ltd
                </p>
              </div>

              <div className="mt-auto">
                <span className="text-gray-500 text-one px-0 sm:px-1">
                  ( November / 2023 - current )
                </span>
              </div>
            </div>

            <div className="my-5 w-full">
              <ul className="list-disc">
                <li>
                  Developed a Movie Content Management System (CMS) dashboard
                  using Next.js for the Mahar Mobile Application, simplifying
                  the handling of movie-related data.
                </li>
                <li>
                  Created a customer service dashboard for the Mahar Movie and
                  Music Application to improve client support and efficiency.
                </li>
                <li>
                  Developed various campaign pages to enhance user engagement
                  and drive marketing initiatives.
                </li>
                <li>
                  Designed and developed the Mahar Web Page to expand the
                  platform's reach and improve user experience.
                </li>
                <li>
                  Developed a new movie streaming platform called MyanFlix,
                  featuring a responsive UI, seamless video playback, and a
                  content management system for MyanFlix.
                </li>
                <li>
                  Developed a deep link system for Mahar's digital marketing
                  department, enabling seamless content sharing across social
                  media platforms. Designed and built a dashboard for generating
                  deep links, allowing marketers to create and track links
                  efficiently, enhancing user engagement and campaign
                  performance.
                </li>
              </ul>
            </div>

            <div className="w-full h-screen">
              <LayoutGrid cards={maharExp} />
            </div>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default ExperiencePage;

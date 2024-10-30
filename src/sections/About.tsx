"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GraphQLIcon from "@/assets/icons/graphql.svg";
import JestIcon from "@/assets/icons/jest.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next-js.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import memojiSmile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "GraphQL",
    iconType: GraphQLIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next JS",
    iconType: NextIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Jest",
    iconType: JestIcon,
  },
];

const hobbies = [
  {
    title: "Casse-têtes",
    emoji: "🧠",
    left: "5%",
    top: "5%",
  },
  {
    title: "Mangas",
    emoji: "📖",
    left: "50%",
    top: "5%",
  },
  {
    title: "Football",
    emoji: "⚽️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Musique",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Animaux",
    emoji: "🐕",
    left: "5%",
    top: "65%",
  },
  {
    title: "Jeux vidéos",
    emoji: "🎮",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="À propos de moi"
          title="Un aperçu de mon monde"
          description="Apprenez-en davantage sur qui je suis et ce que je fais."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-5 lg:col-span-3">
              <CardHeader
                className=""
                title="Ma Stack Technologique"
                description="Explorez les technologies et les outils que j'utilise pour créer mes projets"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-word-left [animation-duration:20s]"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-word-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Au-delà du Code"
                description="Explorez mes intérêts et mes passe-temps au-delà du domaine numérique."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card
              className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 cursor-pointer"
              onClick={() =>
                window.open("https://www.google.com/maps/place/Tours")
              }
            >
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={memojiSmile}
                  alt="Smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

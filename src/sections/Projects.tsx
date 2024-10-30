import perlImage from "@/assets/images/perl.png";
import greenstep from "@/assets/images/greenstep.png";
import pokedexImage from "@/assets/images/pokedex.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "PERL",
    year: "2024",
    title: "Application mobile sur l'e-sport",
    results: [
      { title: "Utilisation de React Native" },
      { title: "Conception d'une base de données" },
      { title: "Déploiement sur les store Apple et Google" },
    ],
    link: "https://iphone.apkpure.com/fr/app/perl-planet-esport/com.perl.perl",
    image: perlImage,
  },
  {
    company: "Wild Code School",
    year: "2024",
    title: "Green Step",
    results: [
      { title: "Utilisation de Next et de GraphQL" },
      { title: "Méthode Agile / Scrum" },
      {
        title:
          "Déploiement et Intégration continu avec Docker et Github Actions",
      },
    ],
    image: greenstep,
  },
  {
    company: "Mattéo Santamaria",
    year: "2023",
    title: "Pokédex Card",
    results: [
      { title: "Utilisation d'une API avec React" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://matstmr.github.io/pokedexcard/",
    image: pokedexImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Projets en vedette"
          eyebrow="Résultats concrets"
          description="Découvrez comment j'ai transformé des concepts en expériences numériques engageantes."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link ? (
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  ) : (
                    <div className="opacity-0">
                      <div className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span></span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

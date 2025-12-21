import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsText } from "../i18n/projectsData";

const Portfolio = ({ lang }) => {
  const { section, list } = projectsText[lang];

  return (
    <section
      id="portfolio"
      className="px-6 py-12 lg:px-20  dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <span className="text-orange-600 dark:text-orange-400 font-semibold tracking-wider text-sm uppercase">
          {section}
        </span>

        <div className="mt-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p, index) => (
            <ProjectCard key={index} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

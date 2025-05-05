"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface Tab {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: Tab[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Artificial Intelligence</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Python</li>
        <li>TensorFlow & PyTorch</li>
        <li>Flutter</li>
        <li>Full Stack Development</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Sophomore, CSE AI/ML Engineering</li>
      </ul>
    ),
  },
  {
    title: "Goals",
    id: "goals",
    content: (
      <ul className="list-disc pl-2">
        <li>Preparing for Google Summer of Code (GSoC)</li>
        <li>Exploring Flutter for mobile development</li>
        <li>Actively participating in hackathons</li>
        <li>Building AI-driven applications</li>
      </ul>
    ),
  },
  {
    title: "Languages and Tools",
    id: "languages-and-tools",
    content: (
      <div>
        <h2 className="text-lg font-semibold mb-2">💻 Tech Stack:</h2>
        <div className="flex flex-wrap gap-2">
          <a href="https://devdocs.io/c/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" />
          </a>
          <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
          </a>
          <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="C#" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
          </a>
          <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white" alt="Dart" />
          </a>
          <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
          </a>
          <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
          </a>
          <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
          </a>
          <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
          </a>
          <a href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" />
          </a>
          <a href="https://soliditylang.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white" alt="Solidity" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          </a>
          <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
          </a>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React.js" />
          </a>
          <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
          </a>
          <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="Vue.js" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
          </a>
          <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          </a>
        </div>
      </div>
    ),
  }  
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section className="text-gray-700 dark:text-white bg-gray-100 dark:bg-black py-12" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300">
            I am an AI/ML Engineer with a strong interest in building intelligent solutions. Currently, I am learning Flutter to expand my development skills, preparing for GSoC, and actively participating in hackathons to sharpen my problem-solving abilities. My goal is to integrate AI-driven solutions into real-world applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map(({ id, title }) => (
              <TabButton key={id} selectTab={() => handleTabChange(id)} active={tab === id}>
                {title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8 text-gray-700 dark:text-gray-300">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

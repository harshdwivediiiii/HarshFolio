"use client";

import Image from "next/image";

const SKILLS = [
  {
    name: "Python",
    logo: "python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  },
  {
    name: "C++",
    logo: "c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  },
  {
    name: "TypeScript",
    logo: "typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    name: "JavaScript",
    logo: "javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  },
  {
    name: "HTML5",
    logo: "html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  },
  {
    name: "CSS3",
    logo: "css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  },
  {
    name: "React",
    logo: "react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  },
  {
    name: "Node.js",
    logo: "node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  },
  {
    name: "Express.js",
    logo: "express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  },
  {
    name: "MongoDB",
    logo: "MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  },
  {
    name: "TensorFlow",
    logo: "TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
  },
  {
    name: "PyTorch",
    logo: "PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
  },
  {
    name: "OpenCV",
    logo: "opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white",
  },
  {
    name: "Flask",
    logo: "flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
  },
  {
    name: "YOLOv8",
    logo: "YOLOv8-8B5CF6?style=for-the-badge&logo=darknet&logoColor=white",
  },
  {
    name: "RNN / CNN",
    logo: "Neural_Networks-000000?style=for-the-badge&logo=openai&logoColor=white",
  },
  {
    name: "RAG",
    logo: "RAG_AI-4B5563?style=for-the-badge&logo=chatbot&logoColor=white",
  },
  {
    name: "LangChain",
    logo: "langchain-00A67E?style=for-the-badge&logo=chainlink&logoColor=white",
  },
  {
    name: "LlamaIndex",
    logo: "llamaindex-7C3AED?style=for-the-badge&logo=meta&logoColor=white",
  },
  {
    name: "OpenAI API",
    logo: "openai-412991?style=for-the-badge&logo=openai&logoColor=white",
  },
  {
    name: "NumPy",
    logo: "numpy-013243?style=for-the-badge&logo=numpy&logoColor=white",
  },
  {
    name: "Pandas",
    logo: "pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
  },
  {
    name: "Matplotlib",
    logo: "matplotlib-11557c?style=for-the-badge&logo=plotly&logoColor=white",
  },
  {
    name: "Seaborn",
    logo: "seaborn-4C72B0?style=for-the-badge&logo=python&logoColor=white",
  },
  {
    name: "Plotly",
    logo: "plotly-3F4F75?style=for-the-badge&logo=plotly&logoColor=white",
  },
  {
    name: "Jupyter",
    logo: "jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white",
  },
  {
    name: "Google Colab",
    logo: "googlecolab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=black",
  },
  {
    name: "SQL",
    logo: "mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
  },
  {
    name: "Docker",
    logo: "docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
  },
  {
    name: "FastAPI",
    logo: "fastapi-009688?style=for-the-badge&logo=fastapi&logoColor=white",
  },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-gray-100 bg-gray-50/50 py-12 dark:border-gray-800 dark:bg-black/50">
      <div className="fade-edges pointer-events-none absolute inset-0 z-20" />

      <div className="flex w-[200%] gap-8 whitespace-nowrap animate-marquee">
        {[...SKILLS, ...SKILLS].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="shrink-0 rounded-xl border border-gray-100 bg-white px-6 py-4 shadow-sm dark:border-gray-800 dark:bg-[#111]"
          >
            <Image
              src={`https://img.shields.io/badge/${skill.logo}`}
              alt={skill.name}
              width={100}
              height={30}
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .fade-edges {
          background: linear-gradient(
            to right,
            var(--background) 0%,
            transparent 15%,
            transparent 85%,
            var(--background) 100%
          );
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

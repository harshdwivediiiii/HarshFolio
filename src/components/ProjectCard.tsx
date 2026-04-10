import React from "react";
import { Code, Eye } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform border border-gray-100 dark:border-gray-800">
      <div
        className={`${styles.card} group overflow-hidden`}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className={`${styles.overlay} hidden group-hover:flex`}>
          <Link
            href={gitUrl}
            className={`h-14 w-14 mr-4 border-2 relative rounded-full ${theme === 'light' ? 'border-gray-300 bg-white shadow-md' : 'border-[#ADB7BE] bg-black/50'} hover:border-white transition-colors group/link`}
          >
            <Code className={`h-6 w-6 ${theme === 'light' ? 'text-gray-700' : 'text-[#ADB7BE]'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white`} />
          </Link>
          <Link
            href={previewUrl}
            className={`h-14 w-14 border-2 relative rounded-full ${theme === 'light' ? 'border-gray-300 bg-white shadow-md' : 'border-[#ADB7BE] bg-black/50'} hover:border-white transition-colors group/link`}
          >
            <Eye className={`h-6 w-6 ${theme === 'light' ? 'text-gray-700' : 'text-[#ADB7BE]'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white`} />
          </Link>
        </div>
      </div>
      <div className={`flex flex-col flex-grow ${theme === 'light' ? 'bg-white text-black' : 'bg-[#181818] text-white'} p-6 rounded-b-2xl`}>
        <h5 className="text-xl font-bold mb-3 text-green-500 dark:text-green-400">{title}</h5>
        <div className="overflow-y-auto max-h-48 custom-scrollbar">
          <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
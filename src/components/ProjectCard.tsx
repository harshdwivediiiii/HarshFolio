import React from "react";
import { Code, Eye } from "lucide-react"; // Use the correct icon names
import Link from "next/link";
import { useTheme } from "next-themes"; // Import useTheme
import styles from './ProjectCard.module.css'; // Import the CSS module

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div>
      <div
        className={`${styles.card} group`}
        style={{ backgroundImage: `url(${imgUrl})` }} // You can keep this inline for the background image
      >
        <div className={`${styles.overlay} hidden group-hover:flex`}>
          <Link
            href={gitUrl}
            className={`h-14 w-14 mr-2 border-2 relative rounded-full ${theme === 'light' ? 'border-slate-600' : 'border-[#ADB7BE]'} hover:border-white group/link`}
          >
            <Code className={`h-10 w-10 ${theme === 'light' ? 'text-slate-600' : 'text-[#ADB7BE]'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white`} />
          </Link>
          <Link
            href={previewUrl}
            className={`h-14 w-14 border-2 relative rounded-full ${theme === 'light' ? 'border-slate-600' : 'border-[#ADB7BE]'} hover:border-white group/link`}
          >
            <Eye className={`h-10 w-10 ${theme === 'light' ? 'text-slate-600' : 'text-[#ADB7BE]'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white`} />
          </Link>
        </div>
      </div>
      <div className={`${styles.cardContent} ${theme === 'light' ? 'bg-white text-black' : 'bg-[#181818] text-white'}`}>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className={`${theme === 'light' ? 'text-gray-700' : 'text-[#ADB7BE]'}`}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
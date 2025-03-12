import React from "react";
import { useTheme } from "next-themes"; // Import useTheme

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void; // Function that takes a string and returns void
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const { theme } = useTheme(); // Get the current theme

  // Define button styles based on the current theme
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : theme === 'light'
      ? "text-[#ADB7BE] border-slate-600 hover:border-white"
      : "text-[#ADB7BE] border-slate-600 hover:border-white"; // You can customize this for dark mode if needed

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
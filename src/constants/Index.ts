export interface ExperienceType {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
  type?: "Open Source" | "Ambassador" | "Internship" | "Freelance" | "Job"; 
  location?: string;
  link?: string;
  techStack?: string[];
  badge?: string;
}

export const experiences: ExperienceType[] = [
  {
    title: "Open Source Contributor",
    company_name: "Social Winter of Code",
    icon: "/SWOC_W_Black.png",
    iconBg: "#E6DEDD",
    date: "November 2024 - February 2025",
    type: "Open Source",
    location: "Remote",
    link: "https://swoc.tech",
    techStack: ["React", "Node.js", "GitHub"],
    points: [
      "Contributed to multiple open-source repositories during the program.",
      "Raised meaningful PRs and fixed major bugs in React and Node.js-based projects.",
      "Collaborated with maintainers and fellow contributors to improve project documentation.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "GirlScript Summer of Code",
    icon: "/GS_logo_Black.svg",
    iconBg: "dark:bg-black  #E6DEDD",
    date: "September 2024 - November 2024",
    type: "Ambassador",
    location: "Remote",
    link: "https://gssoc.girlscript.tech",
    techStack: ["Community", "Outreach", "Mentoring"],
    points: [
      "Promoted GirlScript Summer of Code across campuses and online communities.",
      "Organized informational sessions and onboarded participants.",
      "Acted as a bridge between the organization and contributors.",
    ],
  },
];

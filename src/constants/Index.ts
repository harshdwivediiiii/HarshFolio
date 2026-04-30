export const profile = {
  name: "Harshvardhan Dwivedi",
  shortName: "H. Dwivedi",
  role: "AI/ML Engineer & Full-Stack Developer",
  tagline: "Building intelligent systems and immersive interfaces at the intersection of machine learning and modern web.",
  location: "India",
  email: "harshvardhandwivedi18@gmail.com",
  social: {
    github: "https://github.com/harshdwivediiiii",
    linkedin: "https://linkedin.com/in/harshvardhan-d-86b375290",
    twitter: "https://x.com/Harshvdwivediii",
  },
};

export const stats = [
  { label: "Projects", value: 10, suffix: "+" },
  { label: "ML Models", value: 15, suffix: "+" },
  { label: "Commits", value: 1200, suffix: "+" },
  { label: "Coffee", value: 999, suffix: "+" },
];

export const skillGroups = [
  { title: "AI / ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "OpenCV"] },
  { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Rust"] },
  { title: "Frontend", items: ["React", "Next.js", "Three.js", "R3F", "Tailwind CSS", "Framer Motion"] },
  { title: "Backend & Cloud", items: ["Node.js", "FastAPI", "PostgreSQL", "Docker", "AWS", "Supabase"] },
];

export const projects = [
  {
    title: "DevCity AI",
    blurb: "Smart city AI platform using YOLOv8 and OpenCV for real-time traffic analysis and urban monitoring.",
    tags: ["Python", "YOLOv8", "OpenCV", "Flask", "MongoDB"],
    link: "#",
  },
  {
    title: "NeuroFunds AI",
    blurb: "AI-powered finance platform using Gemini AI for budgeting and personalized financial insights.",
    tags: ["Next.js", "Prisma", "Supabase", "Clerk", "Gemini AI"],
    link: "#",
  },
  {
    title: "Pathfinder AI",
    blurb: "AI-driven career roadmap platform providing personalized learning paths and skill recommendations.",
    tags: ["AI", "LLMs", "Next.js"],
    link: "#",
  },
  {
    title: "Neural Vision Studio",
    blurb: "Real-time computer vision playground with on-device transformer inference.",
    tags: ["PyTorch", "WebGL", "ONNX"],
    link: "#",
  },
  {
    title: "LLM Knowledge Mesh",
    blurb: "Retrieval-augmented chat over private docs with hybrid vector + graph search.",
    tags: ["LangChain", "pgvector", "FastAPI"],
    link: "#",
  },
];

export interface ExperienceType {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
  type?: "Open Source" | "Ambassador" | "Internship" | "Freelance" | "Job" | "Contributor";
  location?: string;
  link?: string;
  techStack?: string[];
  badge?: { image: string; link: string } | { image: string; link: string }[];
}

export const experiences: ExperienceType[] = [
  {
    title: "Open Source Contributor",
    company_name: "OSConnect",
    icon: "/osconnect_logo.svg",
    iconBg: "dark:bg-white #F0F0F0",
    date: "August 2025 - Present",
    type: "Contributor",
    location: "Remote",
    link: "https://www.osconnect.org/",
    techStack: ["Open Source", "Global Collaboration", "Git"],
    points: [
      "Selected to contribute to diverse open-source projects by OSConnect.",
      "Will be engaging with global developers to solve real-world problems.",
      "Looking forward to mentoring and community collaboration opportunities."
    ],
    badge: [
      { image: "/badges/osconnect_contributor_1.png", link: "" },
      { image: "/badges/osconnect_contributor_2.png", link: "" }
    ]
  },
  {
    title: "Open Source Contributor",
    company_name: "GirlScript Summer of Code",
    icon: "/GS_logo_Black.svg",
    iconBg: "dark:bg-black #E6DEDD",
    date: "July 2025 - Present",
    type: "Contributor",
    location: "Remote",
    link: "https://gssoc.girlscript.tech",
    techStack: ["Open Source", "Collaboration", "GitHub"],
    points: [
      "Contributing to multiple open-source repositories under GSSoC.",
      "Collaborating with project maintainers and fellow contributors.",
      "Enhancing project features, fixing bugs, and improving documentation."
    ],
    badge: {
      image: "/badges/contributer_gssoc.png",
      link: ""
    }
  },
  {
    title: "Mentor",
    company_name: "Social Summer of Code",
    icon: "/SSOC_logo.png",
    iconBg: "#E6DEDD",
    date: "May 2025 - July 2025",
    type: "Open Source",
    location: "Remote",
    link: "https://www.linkedin.com/showcase/socialsummerofcode/",
    techStack: ["Mentoring", "GitHub", "Open Source"],
    points: [
      "Mentoring contributors on open-source best practices and project contributions.",
      "Reviewing pull requests and providing constructive feedback to participants.",
      "Helping maintain project quality and guiding new contributors through their journey."
    ],
    badge: {
      image: "/badges/mentor_ssoc.png",
      link: "https://drive.google.com/file/d/1y0Zv4NX1aa38jwpiweN28pX-NSem0gMw/view"
    }
  },
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
      "Collaborated with maintainers and fellow contributors to improve project documentation."
    ],
    badge: {
      image: "/badges/contributor_swoc.png",
      link: "https://drive.google.com/file/d/1e_zmZUbr140bIv9_ZR7x4fYGR3tkUcwP/view"
    }
  }
];

export const SliderImages = [
  "/journey/1.png",
  "/journey/2.png",
  "/journey/3.png",
  "/journey/4.png",
  "/journey/5.png",
  "/journey/6.png",
  "/journey/7.png",
  "/journey/8.png",
  "/journey/9.png",
  "/journey/10.png",
  "/journey/11.png",
  "/journey/12.png",
  "/journey/13.png",
  "/journey/14.png",
  "/journey/15.png",
  "/journey/16.png",
  "/journey/17.png",
  "/journey/18.png"
];
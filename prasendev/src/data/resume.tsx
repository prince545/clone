import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, VideoIcon, FolderIcon } from "lucide-react";

export const DATA = {
  // Personal Info
  name: "Simerjeet Singh",
  initials: "SS",
  url: "https://github.com/prince545",
  location: "New Delhi, India",
  description: "I’m a Full Stack AI Engineer from India, turning ideas into intelligent software solutions. Code is my canvas, AI is my brush 🎨.",
  summary: "Hello! I'm a Full Stack AI Engineer based in New Delhi, India. I enjoy building innovative AI-powered applications and exploring cutting-edge technologies. Currently working on my own projects and open to freelance, collaboration, or full-time opportunities.",
  avatarUrl: "/ai-sora-avata.jpeg",

  // Skills
  skills: [
    "React", "ReactJS", "Angular", "Next.js", "TypeScript", "Node.js", "Nest.js",
    "Express", "Python", "TensorFlow", "Keras", "Scikit-learn", "Flask",
    "Firebase", "MongoDB", "PostgreSQL", "Jupyter Notebook", "VS Code", "Git",
    "GitHub", "Linux", "Docker", "HTML"
  ],

  // Navbar
  navbar: [
    { href: "/", icon: <HomeIcon className="size-3" />, label: "Home" },
    { href: "/projects", icon: <FolderIcon className="size-3" />, label: "Projects" },
    { href: "https://github.com/prince545", icon: <Icons.github className="size-3" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/simerjeet-singh-8b1700295/", icon: <Icons.linkedin className="size-3" />, label: "LinkedIn" },
  ],

  // Contact
  contact: {
    email: "simerjeetsingh20042006@gmail.com",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/prince545", icon: <Icons.github className="size-3" />, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/simerjeet-singh-8b1700295/", icon: <Icons.linkedin className="size-3" />, navbar: true },
      X: { name: "X", url: "https://x.com/SimerjeetS90539", icon: <Icons.x className="size-3" />, navbar: true },
      email: { name: "Send Email", url: "mailto:simerjeetsingh20042006@gmail.com", icon: <Icons.email className="size-3" />, navbar: false },
    },
  },

  // Projects
  projects: [
    {
      title: "Project 1",
      href: "https://project1.com",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description: "Description of project 1",
      technologies: ["React", "TypeScript", "Node.js"],
      links: [
        { type: "Website", href: "https://project1.com", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/project1", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Project 2",
      href: "https://project2.com",
      dates: "March 2025 - April 2025",
      active: true,
      description: "Description of project 2",
      technologies: ["Next.js", "TailwindCSS"],
      links: [
        { type: "Website", href: "https://project2.com", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/project2", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    // Add more projects here if needed
  ],
} as const;

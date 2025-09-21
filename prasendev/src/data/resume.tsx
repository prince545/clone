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
    "React", "ReactJS", "Angular", "Next.js", "TypeScript", "Node.js", "Next.js",
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
  title: "Blog App",
  href: "https://blog-app-heo1.vercel.app/",
  dates: "Jan 2025 - Feb 2025",
  active: true,
  description: `About: A modern full-stack blog application built with Next.js, Express, and MongoDB. This project features a beautiful UI, user authentication, blog CRUD, image uploads, search, category filtering, and more.`,
  technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Next.js", "TailwindCSS"],
  links: [
    { type: "Website", href: "https://blog-app-heo1.vercel.app/", icon: <Icons.globe className="size-3" /> },
    { type: "Source", href: "https://github.com/prince545/blog-app", icon: <Icons.github className="size-3" /> },
  ],
  image: "/1.png",
  video: "",
},
    
{
  title: "Doctor Appointment Booking App",
  href: "https://doctor-app-beta.vercel.app/",
  dates: "Jan 2025 - Feb 2025",
  active: true,
  description: `About: A modern full-stack Doctor appointment application built with Next.js, Express, and MongoDB. This project features a beautiful UI, user authentication, blog CRUD, image uploads, search, category filtering, and more.`,
  technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Next.js", "TailwindCSS"],
  links: [
    { type: "Website", href: "https://doctor-app-beta.vercel.app/", icon: <Icons.globe className="size-3" /> },
    { type: "Source", href: "https://github.com/prince545/Doctor-App", icon: <Icons.github className="size-3" /> },
  ],
  image: "/4.png",
  video: "",
},
{
  title: "AI Image Generation App",
  href: "https://imageapp-sigma.vercel.app/",
  dates: "Jan 2025 - Feb 2025",
  active: true,
  description: `A beautiful and modern React application that transforms text prompts into stunning AI-generated images. Built with React 19, Vite, Tailwind CSS, and integrated with multiple AI services.`,
  technologies: ["React", "TypeScript",  "TailwindCSS"],
  links: [
    { type: "Website", href: "https://imageapp-sigma.vercel.app/", icon: <Icons.globe className="size-3" /> },
    { type: "Source", href: "https://github.com/prince545/imageapp", icon: <Icons.github className="size-3" /> },
  ],
  image: "/5.png",
  video: "",
},
{
  title: "Flipkart Product Advicer",
  href: "https://flipkart-product-advisor.onrender.com/",
  dates: "Jan 2025 - Feb 2025",
  active: true,
  description: `AI-powered shopping assistant that analyzes Flipkart products and provides personalized recommendations using Google Gemini Pro. Built with Python, Flask, Selenium, and Tailwind CSS.`,
  technologies: ["Python", "Flask", "Selenium", "TailwindCSS", "Google Gemini Pro"],
  links: [
    { type: "Website", href: "https://flipkart-product-advisor.onrender.com/", icon: <Icons.globe className="size-3" /> },
    { type: "Source", href: "https://github.com/prince545/Flipkart-Product-Advisor", icon: <Icons.github className="size-3" /> },
  ],
  image: "/6.png",
  video: "",
},
{
      title: "Food Delivery App",
      href: "https://food-del-app-tv7p.vercel.app/",
      dates: "March 2025 - April 2025",
      active: true,
      description: "Description of project 2",
      technologies: ["Reactjs", "TailwindCSS",],
      links: [
        { type: "Website", href: "https://food-del-app-tv7p.vercel.app/", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/prince545/food-del-app", icon: <Icons.github className="size-3" /> },
      ],
      image: "/3.png",
    },
],
} as const;

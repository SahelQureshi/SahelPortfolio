import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Download,
  ArrowRight,
  Sparkles,
  Code,
  Heart,
  Zap,
  ChevronDown,
  Star,
  Rocket,
  Shield,
  ArrowUpRight,
  Quote,
  Trophy,
 Briefcase,
  Layers,
  Cpu,
  Twitter,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  Users,
} from "lucide-react";

export const designations = [
  "MERN Stack Developer",
  "React.js Specialist",
  "React Native Developer",
  "Next.js Full Stack Developer",
  "Frontend Developer",
];

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/SahelQureshi",
    label: "GitHub",
    color: "hover:bg-gray-500/20 hover:border-gray-400/30",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sahel-qureshi-47b1252a8",
    label: "LinkedIn",
    color: "hover:bg-blue-500/20 hover:border-blue-400/30",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/sahel.qureshi.948",
    label: "Facebook",
    color: "hover:bg-blue-600/20 hover:border-blue-500/30",
  },
  {
    icon: Mail,
    href: "mailto:sahelqureshi0089@gmail.com",
    label: "Email",
    color: "hover:bg-red-500/20 hover:border-red-400/30",
  },
];


export const statsData = [
    {
      icon: Trophy,
      number: "2+",
      label: "Years Experience",
      description: "Building digital solutions",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Briefcase,
      number: "50+",
      label: "Projects Completed",
      description: "From concept to deployment",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Star,
      number: "100%",
      label: "Client Satisfaction",
      description: "Exceeding expectations",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-500/10",
    },
    {
      icon: Layers,
      number: "100K+",
      label: "Lines of Code",
      description: "Clean & maintainable",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10",
    }
  ];

  export const techStack = [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "Node.js", level: 88, icon: "💚" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Tailwind", level: 92, icon: "🎨" },
    { name: "MongoDB", level: 82, icon: "🍃" }
  ];

 

export const projectsData = [
  {
    id: 1,
    title: "Dresza E-Commerce Platform (User)",
    year: 2025,
    description:
      "Full-stack e-commerce storefront built with Next.js featuring SSR for SEO, product browsing, cart, and secure Razorpay payments.",
    tags: ["Next.js", "React", "Redux Toolkit", "React Query", "Tailwind"],
    live: "https://dresza.netlify.app/",
    repo: "https://github.com/SahelQureshi",
    featured: true,
    images: [
      "/assets/projects/dresza-website (1).png",
      "/assets/projects/dresza-website (2).png",
      "/assets/projects/dresza-website (3).png",
      "/assets/projects/dresza-website (4).png",
    ],
  },
  {
    id: 2,
    title: "Dresza Admin Dashboard",
    year: 2025,
    description:
      "React-based admin panel for managing products, orders, and users with full CRUD operations and real-time data handling.",
    tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Express"],
    live: "https://dresza-admin.netlify.app",
    repo: "https://github.com/SahelQureshi",
    featured: true,
    images: [
      "/assets/projects/dresza-admin (1).png",
      "/assets/projects/dresza-admin (2).png",
      "/assets/projects/dresza-admin (3).png",
      "/assets/projects/dresza-admin (4).png",
    ],
  },
];

export const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sahelqureshi0089@gmail.com',
      link: 'mailto:sahelqureshi0089@gmail.com',
      color: 'from-fuchsia-500/20 to-purple-500/20',
      gradient: 'from-fuchsia-500 to-purple-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 90079 47586',
      link: 'tel:+919007947586',
      color: 'from-cyan-500/20 to-blue-500/20',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Birlagate, Barrackpore, Kolkata, India',
      link: '#',
      color: 'from-purple-500/20 to-pink-500/20',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  export const availabilityStats = [
    { icon: Clock, label: "Response Time", value: "< 24h", color: "emerald" },
    { icon: Calendar, label: "Experience", value: "2+ Years", color: "fuchsia" },
    { icon: Users, label: "Happy Clients", value: "15+", color: "cyan" },
    { icon: Zap, label: "Projects", value: "25+", color: "amber" },
  ];

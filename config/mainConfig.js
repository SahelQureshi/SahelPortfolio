import {
  Menu,
  X,
  Home,
  User,
  GraduationCap,
  Briefcase,
  Code,
  FolderOpen,
  MessageSquare,
  Mail,
  Sparkles,
  ChevronDown,
  Zap,
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Smartphone,
  Trophy,
  Target,
  Star,
  ChevronRight,
  Globe,
  Cloud,
  Shield,
  Layers,
  Cpu,
  Rocket,
  Award,
  TrendingUp,
  CheckCircle,
  BarChart3,
  Palette,
  Terminal,
  Braces,
  GitBranch,
  DatabaseZap,
  Quote,
  ArrowRight,
  Facebook,
  Github,
  Linkedin,
  Users,
  ChevronLeft,
  Heart,
  Crown,
  Clock,
  CheckCircle2,
  Diamond,
  ThumbsUp,
  Calendar,
  MapPin,
  Download,
  Play,
  Building,
  Medal,
  Brain,
  Phone,
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

 export const navItems = [
    { label: "Home", href: "#banner", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Projects", href: "#projects", icon: FolderOpen },
    { label: "Reviews", href: "#reviews", icon: MessageSquare },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

export const experiences = [
  {
    period: "December 2024 - Present",
    role: "MERN Stack Developer",
    company: "Leelia Web Solutions Pvt Ltd",
    location: "Remote",
    type: "Full-time",
    description: "At Leelia Web Solutions, I have been contributing to full-stack development using the MERN stack. My responsibilities include building scalable REST APIs, dynamic front-end interfaces, and implementing secure authentication flows. I collaborate closely with the UI/UX and DevOps teams to deliver modern and high-performing web applications.",
    achievements: ["Built 5+ scalable APIs", "Improved app performance by 40%", "Led authentication system implementation"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    current: true,
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10"
  },
  {
    period: "October 2024 - December 2024",
    role: "React.js Developer",
    company: "Talentrise Technokrate Pvt Ltd",
    location: "Remote",
    type: "Full-time",
    description: "At Talentrise Technokrate, I specialized in crafting modern UI components using React.js. I focused on building reusable components, improving performance through code-splitting and lazy loading, and integrating APIs to build dynamic dashboards. My role helped shape intuitive user experiences for enterprise clients.",
    achievements: ["Created 20+ reusable components", "Optimized load times by 30%", "Built 3 enterprise dashboards"],
    technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Git"],
    current: false,
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10"
  },
  {
    period: "June 2024 - September 2024",
    role: "Frontend Development Intern",
    company: "EMEI",
    location: "On-site",
    type: "Internship",
    description: "During my industrial training at EMEI, I gained hands-on experience with core front-end technologies and the React.js framework. This period laid a strong foundation in responsive design, component architecture, and version control using Git. It prepared me for professional development roles with practical exposure.",
    achievements: ["Mastered React fundamentals", "Built responsive layouts", "Learned Git workflows"],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
    current: false,
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10"
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

  export const education = [
  {
    title: "Bachelor of Computer Application (BCA)",
    institution: "SVIMS",
    date: "2021 - 2024",
    location: "India",
    grade: "First Class",
    desc: "Acquired comprehensive knowledge of computer applications, programming fundamentals (C, C++, Java), database management, and software development. Completed projects demonstrating practical implementation of theoretical concepts.",
    highlights: ["Programming Fundamentals", "Database Management", "Software Development", "Project Work"],
    achievements: ["First Class Grade", "Project Excellence Award"],
    icon: Code,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "12th Grade (Arts)",
    institution: "Man Matha Nath High School",
    date: "2019 - 2021",
    location: "India",
    grade: "85%",
    desc: "Pursued Science stream with specialization in Physics, Chemistry, and Mathematics. Gained problem-solving skills and scientific thinking that formed the basis for my technical education.",
    highlights: ["Geography", "English", "History", "Computer Applications"],
    achievements: ["Consistent Performer", "Subject Excellence"],
    icon: Brain,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "10th Grade",
    institution: "Man Matha Nath High School",
    date: "2018",
    location: "India",
    grade: "88%",
    desc: "Completed secondary education with focus on foundational subjects including Mathematics, Science, and Languages. Developed strong academic fundamentals that prepared me for higher studies.",
    highlights: ["Mathematics", "Science", "Languages", "Academic Foundation"],
    achievements: ["Logical Reasoning", "Academic Excellence"],
    icon: Medal,
    color: "from-purple-500 to-pink-500"
  },
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

  export const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  export const testimonialsData = [
  {
    name: "Aisha Khan",
    role: "Product Manager, FinTech Co.",
    rating: 5,
    quote:
      "Sahel delivered a robust web app ahead of schedule. The UI feels premium and performance is excellent. Our users love the smooth experience and the conversion rates have improved significantly.",
    initials: "AK",
    avatar: "/avatar1.jpg",
    company: "FinTech Co.",
    project: "E-commerce Platform",
    duration: "3 months",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aishakhan",
      email: "aisha@fintech.com",
    },
    highlight: "Conversion rates improved by 35%",
    metrics: { speed: "+45%", satisfaction: "98%", roi: "+32%" },
  },
  {
    name: "Rahul Mehta",
    role: "Founder, StartupX",
    rating: 5,
    quote:
      "Great communication and attention to detail. Our conversion rate improved noticeably after the revamp. The code quality is exceptional and the project was delivered on time.",
    initials: "RM",
    avatar: "/avatar2.jpg",
    company: "StartupX",
    project: "SaaS Dashboard",
    duration: "4 months",
    socialLinks: {
      linkedin: "https://linkedin.com/in/rahulmehta",
      github: "https://github.com/rahulmehta",
    },
    highlight: "Delivered 2 weeks ahead of schedule",
    metrics: { speed: "+30%", satisfaction: "96%", roi: "+28%" },
  },
  {
    name: "Emily Chen",
    role: "Design Lead, Studio 9",
    rating: 5,
    quote:
      "Clean, maintainable code and smooth animations. Handoffs were easy and the result matched the designs perfectly. The collaboration was seamless.",
    initials: "EC",
    avatar: "/avatar3.jpg",
    company: "Studio 9",
    project: "Design System",
    duration: "2 months",
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilychen",
      email: "emily@studio9.com",
    },
    highlight: "Pixel-perfect implementation",
    metrics: { speed: "+25%", satisfaction: "100%", roi: "+25%" },
  },
  {
    name: "Omar Farooq",
    role: "CTO, EduSphere",
    rating: 5,
    quote:
      "Our dashboard loads faster and users love the new features. Highly recommend working with Sahel. The technical expertise and problem-solving skills are outstanding.",
    initials: "OF",
    avatar: "/avatar4.jpg",
    company: "EduSphere",
    project: "Learning Management System",
    duration: "6 months",
    socialLinks: {
      linkedin: "https://linkedin.com/in/omarfarooq",
      github: "https://github.com/omarfarooq",
    },
    highlight: "50% faster load times",
    metrics: { speed: "+50%", satisfaction: "99%", roi: "+40%" },
  },
];



export const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    Icon: Layout,
    color: "from-pink-500/20 to-fuchsia-500/20",
    ring: "ring-pink-500/30",
    gradient: "from-pink-500 to-fuchsia-500",
    gradientLight: "from-pink-400 to-fuchsia-400",
    items: [
      { name: "React.js", level: 92, icon: "⚛️" },
      { name: "Next.js (SSR/SSG)", level: 88, icon: "▲" },
      { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
      { name: "Redux Toolkit", level: 85, icon: "🔴" },
      { name: "React Query", level: 82, icon: "📊" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "Bootstrap", level: 85, icon: "📱" },
      { name: "HTML5/CSS3", level: 92, icon: "🌐" },
    ],
  },
  {
    id: 2,
    title: "Mobile Development",
    Icon: Smartphone,
    color: "from-purple-500/20 to-pink-500/20",
    ring: "ring-purple-500/30",
    gradient: "from-purple-500 to-pink-500",
    gradientLight: "from-purple-400 to-pink-400",
    items: [
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Expo", level: 85, icon: "⚡" },
      { name: "Expo Router", level: 80, icon: "🧭" },
      { name: "Async Storage", level: 82, icon: "💾" },
      { name: "Push Notifications", level: 75, icon: "🔔" },
    ],
  },
  {
    id: 3,
    title: "Backend Development",
    Icon: Server,
    color: "from-emerald-500/20 to-teal-500/20",
    ring: "ring-emerald-500/30",
    gradient: "from-emerald-500 to-teal-500",
    gradientLight: "from-emerald-400 to-teal-400",
    items: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 85, icon: "🚂" },
      { name: "REST API Development", level: 90, icon: "🔌" },
      { name: "JWT Authentication", level: 88, icon: "🔐" },
      { name: "MVC Pattern", level: 85, icon: "🏗️" },
      { name: "Middleware", level: 82, icon: "⚙️" },
    ],
  },
  {
    id: 4,
    title: "Database & Cloud",
    Icon: Database,
    color: "from-cyan-500/20 to-blue-500/20",
    ring: "ring-cyan-500/30",
    gradient: "from-cyan-500 to-blue-500",
    gradientLight: "from-cyan-400 to-blue-400",
    items: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "MongoDB Atlas", level: 85, icon: "☁️" },
      { name: "Data Modeling", level: 80, icon: "📐" },
      { name: "Aggregation Pipeline", level: 78, icon: "🔗" },
      { name: "Firebase", level: 75, icon: "🔥" },
      { name: "Cloudinary", level: 80, icon: "🖼️" },
    ],
  },
  {
    id: 5,
    title: "Tools & Deployment",
    Icon: Cloud,
    color: "from-amber-500/20 to-orange-500/20",
    ring: "ring-amber-500/30",
    gradient: "from-amber-500 to-orange-500",
    gradientLight: "from-amber-400 to-orange-400",
    items: [
      { name: "Git & GitHub", level: 90, icon: "📦" },
      { name: "Vercel / Netlify", level: 88, icon: "🚀" },
      { name: "Render", level: 85, icon: "⚡" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "Expo CLI", level: 80, icon: "📱" },
      { name: "CI/CD", level: 75, icon: "🔄" },
    ],
  },
  {
    id: 6,
    title: "Core Technologies",
    Icon: Shield,
    color: "from-indigo-500/20 to-purple-500/20",
    ring: "ring-indigo-500/30",
    gradient: "from-indigo-500 to-purple-500",
    gradientLight: "from-indigo-400 to-purple-400",
    items: [
      { name: "State Management", level: 88, icon: "📦" },
      { name: "API Architecture", level: 85, icon: "🏛️" },
      { name: "Performance Optimization", level: 85, icon: "⚡" },
      { name: "Scalable Systems", level: 80, icon: "📈" },
      { name: "SSR/SSG", level: 85, icon: "🖥️" },
      { name: "Authorization (RBAC)", level: 82, icon: "🔒" },
    ],
  },
];

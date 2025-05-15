import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaGitAlt, FaGithub, FaRust, FaNpm, FaPhp } from "react-icons/fa";
import { SiExpress, SiDjango, SiFlask, SiSpring, SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase, SiKubernetes, SiTerraform, SiNextdotjs, SiGatsby, SiFigma, SiThreedotjs, SiNginx, SiApache, SiYarn, SiJamstack, SiDotnet } from "react-icons/si";
import { SiGo, SiRust, SiSwift, SiKotlin, SiTensorflow, SiPytorch } from "react-icons/si";
import { SiSvelte, SiFlutter, SiCypress, SiJest, SiSelenium, SiWebpack, SiVite, SiBabel } from "react-icons/si";
import { FaWordpress, FaReact as FaReactIcon } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { JSX } from "react";

const allTechs: Record<string, { id: string; name: string; tags: string[]; icon: JSX.Element }> = {
  // Frontend Libraries/Frameworks
  "react": { id: "react", name: "React", tags: ["frontend", "ui", "javascript"], icon: <FaReact /> },
  "vue": { id: "vue", name: "Vue", tags: ["frontend", "ui", "javascript"], icon: <FaVuejs /> },
  "angular": { id: "angular", name: "Angular", tags: ["frontend", "ui", "typescript"], icon: <FaAngular /> },
  "svelte": { id: "svelte", name: "Svelte", tags: ["frontend", "ui", "javascript"], icon: <SiSvelte /> },

  // Backend Technologies
  "node": { id: "node", name: "Node.js", tags: ["backend", "javascript", "runtime"], icon: <FaNodeJs /> },
  "express": { id: "express", name: "Express", tags: ["backend", "javascript", "framework"], icon: <SiExpress /> },
  "django": { id: "django", name: "Django", tags: ["backend", "python", "fullstack"], icon: <SiDjango /> },
  "flask": { id: "flask", name: "Flask", tags: ["backend", "python", "microframework"], icon: <SiFlask /> },
  "spring": { id: "spring", name: "Spring Boot", tags: ["backend", "java", "framework"], icon: <SiSpring /> },

  // Programming Languages
  "javascript": { id: "javascript", name: "JavaScript", tags: ["language", "frontend", "backend"], icon: <SiJavascript /> },
  "typescript": { id: "typescript", name: "TypeScript", tags: ["language", "frontend", "backend"], icon: <SiTypescript /> },
  "python": { id: "python", name: "Python", tags: ["language", "backend", "data"], icon: <FaPython /> },
  "java": { id: "java", name: "Java", tags: ["language", "backend", "mobile"], icon: <FaJava /> },
  "go": { id: "go", name: "Go", tags: ["language", "backend", "cloud"], icon: <SiGo /> },
  "rust": { id: "rust", name: "Rust", tags: ["language", "system", "webassembly"], icon: <FaRust /> },

  // Databases
  "mongodb": { id: "mongodb", name: "MongoDB", tags: ["database", "nosql", "document"], icon: <SiMongodb /> },
  "postgresql": { id: "postgresql", name: "PostgreSQL", tags: ["database", "sql", "relational"], icon: <SiPostgresql /> },
  "mysql": { id: "mysql", name: "MySQL", tags: ["database", "sql", "relational"], icon: <SiMysql /> },
  "redis": { id: "redis", name: "Redis", tags: ["database", "nosql", "cache"], icon: <SiRedis /> },
  "firebase": { id: "firebase", name: "Firebase", tags: ["database", "nosql", "realtime"], icon: <SiFirebase /> },

  // DevOps & Cloud
  "docker": { id: "docker", name: "Docker", tags: ["devops", "container", "cloud"], icon: <FaDocker /> },
  "kubernetes": { id: "kubernetes", name: "Kubernetes", tags: ["devops", "orchestration", "cloud"], icon: <SiKubernetes /> },
  "aws": { id: "aws", name: "AWS", tags: ["cloud", "devops", "hosting"], icon: <FaAws /> },
  "azure": { id: "azure", name: "Azure", tags: ["cloud", "devops", "hosting"], icon: <VscAzure /> },
  "terraform": { id: "terraform", name: "Terraform", tags: ["devops", "iac", "cloud"], icon: <SiTerraform /> },

  // Mobile Development
  "reactnative": { id: "reactnative", name: "React Native", tags: ["mobile", "javascript", "crossplatform"], icon: <FaReact /> },
  "flutter": { id: "flutter", name: "Flutter", tags: ["mobile", "dart", "crossplatform"], icon: <SiFlutter /> },
  "swift": { id: "swift", name: "Swift", tags: ["mobile", "ios", "language"], icon: <SiSwift /> },
  "kotlin": { id: "kotlin", name: "Kotlin", tags: ["mobile", "android", "language"], icon: <SiKotlin /> },

  // Testing
  "jest": { id: "jest", name: "Jest", tags: ["testing", "javascript", "unit"], icon: <SiJest /> },
  "cypress": { id: "cypress", name: "Cypress", tags: ["testing", "e2e", "javascript"], icon: <SiCypress /> },
  "selenium": { id: "selenium", name: "Selenium", tags: ["testing", "automation", "web"], icon: <SiSelenium /> },

  // Build Tools
  "webpack": { id: "webpack", name: "Webpack", tags: ["build", "javascript", "bundler"], icon: <SiWebpack /> },
  "vite": { id: "vite", name: "Vite", tags: ["build", "javascript", "bundler"], icon: <SiVite /> },
  "babel": { id: "babel", name: "Babel", tags: ["build", "javascript", "transpiler"], icon: <SiBabel /> },

  // CMS & Static Sites
  "wordpress": { id: "wordpress", name: "WordPress", tags: ["cms", "php", "blogging"], icon: <FaWordpress /> },
  "nextjs": { id: "nextjs", name: "Next.js", tags: ["frontend", "react", "ssr"], icon: <SiNextdotjs /> },
  "gatsby": { id: "gatsby", name: "Gatsby", tags: ["frontend", "react", "ssg"], icon: <SiGatsby /> },

  // Design & Animation
  "figma": { id: "figma", name: "Figma", tags: ["design", "ui", "prototyping"], icon: <SiFigma /> },
  "threejs": { id: "threejs", name: "Three.js", tags: ["3d", "animation", "javascript"], icon: <SiThreedotjs /> },

  // Web Servers
  "nginx": { id: "nginx", name: "Nginx", tags: ["server", "proxy", "devops"], icon: <SiNginx /> },
  "apache": { id: "apache", name: "Apache", tags: ["server", "webserver", "devops"], icon: <SiApache /> },

  // Version Control
  "git": { id: "git", name: "Git", tags: ["vcs", "collaboration", "tooling"], icon: <FaGitAlt /> },
  "github": { id: "github", name: "GitHub", tags: ["vcs", "collaboration", "platform"], icon: <FaGithub /> },

  // Package Managers
  "npm": { id: "npm", name: "npm", tags: ["package", "javascript", "tooling"], icon: <FaNpm /> },
  "yarn": { id: "yarn", name: "Yarn", tags: ["package", "javascript", "tooling"], icon: <SiYarn /> },

  // AI/ML
  "tensorflow": { id: "tensorflow", name: "TensorFlow", tags: ["ai", "ml", "python"], icon: <SiTensorflow /> },
  "pytorch": { id: "pytorch", name: "PyTorch", tags: ["ai", "ml", "python"], icon: <SiPytorch /> }
};


const groupedTechs = {
  "Frontend": ["react", "vue", "angular", "svelte", "nextjs", "gatsby",],
  "Backend": ["node", "express", "django", "flask", "spring", "mongodb", "postgresql", "mysql", "redis", "firebase"],
  "DevOps": ["docker", "kubernetes", "aws", "azure", "terraform", "nginx", "apache"],
  "Mobile": ["reactnative", "flutter", "swift", "kotlin"],
  "Testing": ["jest", "cypress", "selenium"],
  "Build Tools": ["webpack", "vite", "babel"],
  "CMS": ["wordpress"],
  "Version Control": ["git", "github"],
  "Package Managers": ["npm", "yarn"],
  "AI/ML": ["tensorflow", "pytorch"],
  "Languages": ["javascript", "typescript", "python", "java", "go", "rust", "swift", "kotlin"],
  "Frameworks": ["express", "django", "flask", "spring", "reactnative", "nextjs", "gatsby"],
  "Databases": ["mongodb", "postgresql", "mysql", "redis", "firebase"],
  "Cloud": ["aws", "azure", "docker", "kubernetes", "terraform"],
  "Design & animation": ["figma", "threejs"],
};


export const customStacks = {
  // JavaScript Fullstack
  "MERN": {
    id: "MERN",
    name: "MERN Stack",
    tags: ["fullstack", "javascript", "mongodb"],
    icon: <FaReact />,
    description: "MongoDB, Express.js, React, Node.js",
    technologies: ["mongodb", "express", "react", "node"]
  },
  "MEAN": {
    id: "MEAN",
    name: "MEAN Stack",
    tags: ["fullstack", "javascript", "mongodb"],
    icon: <FaAngular />,
    description: "MongoDB, Express.js, Angular, Node.js",
    technologies: ["mongodb", "express", "angular", "node"]
  },
  "MEVN": {
    id: "MEVN",
    name: "MEVN Stack",
    tags: ["fullstack", "javascript", "mongodb"],
    icon: <FaVuejs />,
    description: "MongoDB, Express.js, Vue.js, Node.js",
    technologies: ["mongodb", "express", "vue", "node"]
  },
  
  // Traditional Web Stacks
  "LAMP": {
    id: "LAMP",
    name: "LAMP Stack",
    tags: ["fullstack", "php"],
    icon: <FaPhp />,
    description: "Linux, Apache, MySQL, PHP",
    technologies: ["linux", "apache", "mysql", "php"]
  },
  "LEMP": {
    id: "LEMP",
    name: "LEMP Stack",
    tags: ["fullstack", "php"],
    icon: <FaPhp />,
    description: "Linux, Nginx, MySQL, PHP",
    technologies: ["linux", "nginx", "mysql", "php"]
  },
  
  // Python Stacks
  "Django": {
    id: "Django",
    name: "Django Stack",
    tags: ["fullstack", "python"],
    icon: <SiDjango />,
    description: "Django, PostgreSQL, React (optional)",
    technologies: ["django", "postgresql", "react"]
  },
  "Flask": {
    id: "Flask",
    name: "Flask Stack",
    tags: ["backend", "python"],
    icon: <SiFlask />,
    description: "Flask, SQLAlchemy, React/Vue",
    technologies: ["flask", "sqlalchemy", "react"]
  },
  
  // Modern Architectures
  "JAMstack": {
    id: "JAMstack",
    name: "JAMstack",
    tags: ["frontend", "serverless"],
    icon: <SiJamstack />,
    description: "JavaScript, APIs, Markup",
    technologies: ["react", "graphql", "netlify"]
  },
  "Serverless": {
    id: "Serverless",
    name: "Serverless Stack",
    tags: ["backend", "cloud"],
    icon: <FaAws />,
    description: "AWS Lambda, API Gateway, DynamoDB",
    technologies: ["aws-lambda", "api-gateway", "dynamodb"]
  },
  
  // Mobile Stacks
  "Flutter": {
    id: "Flutter",
    name: "Flutter Fullstack",
    tags: ["mobile", "fullstack"],
    icon: <SiFlutter />,
    description: "Flutter, Firebase, Node.js",
    technologies: ["flutter", "firebase", "node"]
  },
  "ReactNative": {
    id: "ReactNative",
    name: "React Native Fullstack",
    tags: ["mobile", "fullstack"],
    icon: <FaReact />,
    description: "React Native, Express.js, MongoDB",
    technologies: ["reactnative", "express", "mongodb"]
  },
  
  // Enterprise Stacks
  "Spring": {
    id: "Spring",
    name: "Spring Boot Stack",
    tags: ["backend", "java"],
    icon: <SiSpring />,
    description: "Spring Boot, MySQL, React",
    technologies: ["spring", "mysql", "react"]
  },
  ".NET": {
    id: "DotNet",
    name: ".NET Stack",
    tags: ["fullstack", "csharp"],
    icon: <SiDotnet />,
    description: "ASP.NET Core, SQL Server, React",
    technologies: ["dotnet", "sql-server", "react"]
  }
};



// HELPERS
const getTechById = (id: string) => allTechs[id]; 

export const getTechByTag = (tag: string) => Object.values(allTechs).filter(tech => tech.tags.includes(tag));

export const getTechsByCategory = (category: keyof typeof groupedTechs) => 
  groupedTechs[category]?.map(id => allTechs[id]) || [];

export const getAllTechs = () => Object.values(allTechs);
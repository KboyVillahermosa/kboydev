interface TopicData {
  keywords: string[];
  response: string;
}

interface PersonalInfo {
  [key: string]: TopicData | string[];
  skills: TopicData;
  experience: TopicData;
  education: TopicData;
  projects: TopicData;
  contact: TopicData;
  about: TopicData;
  hobbies: TopicData;
  location: TopicData;
  fallback: string[];
}

export const personalInfo: PersonalInfo = {
  skills: {
    keywords: ["skills", "tech stack", "technologies", "tools", "programming", "languages", "frameworks", "what can you do", "frontend", "backend", "mobile", "database", "cloud"],
    response: `I have expertise in multiple areas of development:

**Frontend**: HTML/CSS, JavaScript, TypeScript, React, Vue.js, Next.js, Tailwind CSS, Bootstrap

**Mobile**: React Native, Flutter, Android Studio development

**Backend**: Node.js, PHP, Laravel (including Laravel Inertia and Backpack)

**Databases**: MySQL, PostgreSQL, SQLite

**Cloud & Services**: Firebase, Supabase, RESTful APIs

**Tools**: Git, GitHub, VS Code, Figma, Laragon

I focus on creating responsive, efficient, and user-friendly applications across web and mobile platforms.`
  },
  experience: {
    keywords: ["experience", "work history", "job", "career", "background", "professional", "worked at", "company"],
    response: "I have experience working as a developer, specializing in frontend development with React and TypeScript, as well as mobile app development using React Native and Flutter."
  },
  education: {
    keywords: ["education", "degree", "university", "college", "school", "study", "studied", "graduate"],
    response: "I'm currently pursuing my degree in Information Technology at the University of Southern Philippines Foundation. I continuously expand my knowledge through professional projects and online courses."
  },
  projects: {
    keywords: ["projects", "portfolio", "work", "built", "created", "developed", "applications", "apps", "websites"],
    response: "I've built several projects including responsive websites, mobile applications, and interactive UIs using modern frameworks like React, Vue.js, and Flutter."
  },
  contact: {
    keywords: ["contact", "email", "reach", "message", "connect", "hire", "get in touch"],
    response: "You can reach me through the contact form on this site or connect with me on GitHub for collaboration opportunities."
  },
  about: {
    keywords: ["about", "who", "yourself", "bio", "introduction", "profile", "tell me about", "who are you"],
    response: "I'm a passionate web and mobile developer from Cebu City, Philippines. Currently pursuing my degree in Information Technology at the University of Southern Philippines Foundation. I'm driven by curiosity and love creating digital experiences that solve complex problems with elegant solutions. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sketching UI designs."
  },
  hobbies: {
    keywords: ["hobbies", "interests", "free time", "enjoy", "passion", "outside of work", "fun"],
    response: "Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, sketching UI designs, and continuously learning about emerging development trends."
  },
  location: {
    keywords: ["location", "based", "live", "from", "country", "city", "remote"],
    response: "I'm currently based in Cebu City, Philippines and am open to remote opportunities."
  },
  fallback: [
    "Thanks for reaching out! What specific area of my background would you like to know about?",
    "I'd be happy to tell you more about myself. You can ask about my skills, experience, projects, or anything else!",
    "Thanks for your interest in my profile. Feel free to ask about my work, skills, or background."
  ]
};
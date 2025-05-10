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
    keywords: ["skills", "tech stack", "technologies", "tools", "programming", "languages", "frameworks", "what can you do"],
    response: "I'm proficient in React, TypeScript, Next.js, Tailwind CSS, and building responsive web applications."
  },
  experience: {
    keywords: ["experience", "work history", "job", "career", "background", "professional", "worked at", "company"],
    response: "I have experience working as a developer, specializing in frontend development with React and TypeScript."
  },
  education: {
    keywords: ["education", "degree", "university", "college", "school", "study", "studied", "graduate"],
    response: "I studied Computer Science and have continued learning through professional experience and online courses."
  },
  projects: {
    keywords: ["projects", "portfolio", "work", "built", "created", "developed", "applications", "apps", "websites"],
    response: "I've built several projects including web applications, responsive websites, and interactive UIs using modern frameworks."
  },
  contact: {
    keywords: ["contact", "email", "reach", "message", "connect", "hire", "get in touch"],
    response: "You can reach me through the contact form on this site or via email at [your-email]."
  },
  about: {
    keywords: ["about", "who", "yourself", "bio", "introduction", "profile", "tell me about", "who are you"],
    response: "I'm a developer passionate about creating intuitive and efficient web experiences. I focus on frontend development with modern JavaScript frameworks."
  },
  hobbies: {
    keywords: ["hobbies", "interests", "free time", "enjoy", "passion", "outside of work", "fun"],
    response: "Outside of coding, I enjoy photography, hiking, and exploring new technologies."
  },
  location: {
    keywords: ["location", "based", "live", "from", "country", "city", "remote"],
    response: "I'm currently based in [Your Location] and am open to remote opportunities."
  },
  fallback: [
    "Thanks for reaching out! What specific area of my background would you like to know about?",
    "I'd be happy to tell you more about myself. You can ask about my skills, experience, projects, or anything else!",
    "Thanks for your interest in my profile. Feel free to ask about my work, skills, or background."
  ]
};
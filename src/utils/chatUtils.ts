import { personalInfo } from '@/data/personalInfo';

// Define interfaces for type safety
interface TopicData {
  keywords: string[];
  response: string;
}

interface PersonalInfo {
  [key: string]: TopicData | string[];
  fallback: string[];
}

export function matchIntent(message: string): string {
  const query = message.toLowerCase();
  
  // Check each topic for keyword matches
  for (const [topic, data] of Object.entries(personalInfo)) {
    // Skip the fallback array
    if (topic === 'fallback') continue;
    
    // Type assertion to help TypeScript understand the structure
    const topicData = data as TopicData;
    
    if (topicData.keywords && Array.isArray(topicData.keywords)) {
      for (const keyword of topicData.keywords) {
        if (query.includes(keyword.toLowerCase())) {
          return topicData.response;
        }
      }
    }
  }
  
  // Return a random fallback response if no intent is matched
  const fallbackResponses = personalInfo.fallback as string[];
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}
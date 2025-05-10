import { personalInfo } from '@/data/personalInfo';

export function matchIntent(message: string): string {
  // Convert message to lowercase for easier matching
  const normalizedMessage = message.toLowerCase();
  
  // Check each topic in personalInfo
  for (const [topic, data] of Object.entries(personalInfo)) {
    // Skip the fallback array
    if (topic === 'fallback') continue;
    
    // Check if the message contains any keywords for this topic
    const topicData = data as { keywords: string[], response: string };
    if (topicData.keywords.some(keyword => 
      normalizedMessage.includes(keyword.toLowerCase())
    )) {
      return topicData.response;
    }
  }
  
  // If no match is found, return a random fallback message
  const fallbacks = personalInfo.fallback as string[];
  const randomIndex = Math.floor(Math.random() * fallbacks.length);
  return fallbacks[randomIndex];
}
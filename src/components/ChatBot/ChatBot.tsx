"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

type ResponsePattern = {
  keywords: string[];
  response: string;
};

type SuggestedPrompt = {
  text: string;
  icon?: React.ReactNode;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi there! I'm KBOY's digital assistant. What would you like to know about his work, skills, or projects?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Helper function to check if the last message is from the bot
  const isLastMessageFromBot = () => {
    return messages.length > 0 && messages[messages.length - 1].sender === 'bot';
  };

  const suggestedPrompts: SuggestedPrompt[] = [
    { 
      text: "Who is KBOY?",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    },
    { 
      text: "Tell me about USPF Research Archive",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    },
    { 
      text: "What is the Ascentra app?",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    },
    { 
      text: "List your tech skills",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    },
    { 
      text: "How to contact you",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    },
    { 
      text: "Tell me about Search Job platform",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    },
    { 
      text: "Are you available for freelance?",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    }
  ];

  const responsePatterns: ResponsePattern[] = [
    // Personal identity
    { 
      keywords: ['who is kboy', 'who are you', 'your name', 'real name', 'full name', 'personal details', 'about you'],
      response: "My name is Francisco Villahermosa, also known as KBOY. I'm a 3rd year BSIT student from the University of Southern Philippines Foundation (USPF) and I'm a passionate web and mobile developer based in Cebu City, Philippines."
    },
    // Projects - Updated with your specific projects
    { 
      keywords: ['projects', 'work', 'portfolio', 'list projects', 'show projects'],
      response: "Here are my main projects:\n\n1. USPF Research Archive - A digital platform for academic research publications\n2. Techtool - A resource for improving computer science and IT skills\n3. Search Job - A job listings aggregator platform\n4. Ascentra - An app for discovering and tracking hiking spots in Cebu\n\nWould you like more details about any specific project?"
    },
    // Project-specific responses
    {
      keywords: ['uspf', 'research', 'archive', 'thesis', 'academic'],
      response: "USPF Research Archive is a digital platform where students and faculty can upload theses, dissertations, and research publications. It also automatically generates related studies, helping users find relevant academic work for their research. Built with Laravel, Backpack, Tailwind CSS, and MySQL."
    },
    {
      keywords: ['techtool', 'tech tool', 'computer science', 'IT resources'],
      response: "Techtool is a comprehensive resource designed to help users improve their computer science and IT skills. It provides learning materials, tutorials, and tools for various computing topics. Built with HTML, CSS, JavaScript, PHP, MySQL, and Tailwind CSS."
    },
    {
      keywords: ['search job', 'job search', 'job listings', 'job board', 'employment'],
      response: "Search Job is a platform that aggregates job listings from leading sources like LinkedIn, Indeed, Glassdoor, and more. It allows users to search, filter, and explore opportunities all in one place. Built with ReactJS, Node.js, Firebase, and TypeScript."
    },
    {
      keywords: ['ascentra', 'hiking', 'trails', 'cebu', 'adventure'],
      response: "Ascentra is an application that helps users discover and track hiking spots around Cebu. Users can post their adventures, monitor their progress and routes, and access maps of all local trails. Built with ReactJS, Node.js, Firebase, and TypeScript."
    },
    // Skills based on project technologies
    { 
      keywords: ['skills', 'technologies', 'tech stack', 'programming', 'languages', 'frameworks'],
      response: "My technical skills include:\n\n• Frontend: React, TypeScript, HTML, CSS, JavaScript, Tailwind CSS\n• Backend: Node.js, PHP, Laravel, Backpack\n• Databases: MySQL, Firebase\n• Other: Git, GitHub, Responsive Design\n\nI'm comfortable with both frontend and backend development, with experience building complete web applications."
    },
    // Contact - Updated with your contact information
    { 
      keywords: ['contact', 'hire', 'email', 'reach', 'message', 'get in touch'],
      response: "You can contact me through email at villahermosafrancisco@gmail.com or call +63 912 345 6789. I'm based in Cebu City, Philippines, and I'm currently open to freelance opportunities and collaborations."
    },
    // Location
    { 
      keywords: ['location', 'where', 'address', 'based', 'city', 'country', 'cebu'],
      response: "I'm based in Cebu City, Philippines."
    },
    // Education
    {
      keywords: ['education', 'study', 'degree', 'university', 'college', 'school', 'uspf', 'student'],
      response: "I'm currently a 3rd year Bachelor of Science in Information Technology (BSIT) student at the University of Southern Philippines Foundation (USPF)."
    }
  ];

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Check if the message matches any pattern
    for (const pattern of responsePatterns) {
      if (pattern.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return pattern.response;
      }
    }
    
    // Default response if no pattern matches
    return "I'm not sure I understand that question. You can ask me about Francisco's (KBOY's) projects, skills, education, experience, or how to contact him.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot thinking with a slight delay
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = generateResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInputValue(prompt);
    // Optional: auto-send the suggested prompt
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: prompt,
        sender: 'user',
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      
      setIsTyping(true);
      setTimeout(() => {
        const botResponse = generateResponse(prompt);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: 'bot',
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 600);
    }, 300);
  };

  return (
    <>
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#2f27ce] text-white flex items-center justify-center shadow-lg hover:bg-[#433bff] transition-colors z-50"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl border border-[#dedcff] flex flex-col overflow-hidden z-50">
          {/* Chat header */}
          <div className="bg-[#2f27ce] text-white p-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
              <span className="text-[#2f27ce] text-sm font-bold">KB</span>
            </div>
            <div>
              <h3 className="font-medium">Francisco's Assistant</h3>
              <p className="text-xs opacity-80">Ask me anything about KBOY</p>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#fbfbfe]">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Show bot avatar for bot messages */}
                {message.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#2f27ce] flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">KB</span>
                  </div>
                )}
                
                <div 
                  className={`p-3 rounded-lg max-w-[80%] ${
                    message.sender === 'user' 
                      ? 'bg-[#2f27ce] text-white rounded-br-none shadow-sm'
                      : 'bg-white border border-[#dedcff] text-[#050315] rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <span className="text-[10px] mt-1 block opacity-70 text-right">
                    {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
                
                {/* Show user avatar for user messages */}
                {message.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[#433bff] flex items-center justify-center ml-2 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">U</span>
                  </div>
                )}
              </div>
            ))}
            
            {/* Suggested prompts - shown after each bot message */}
            {isLastMessageFromBot() && !isTyping && (
              <div className="mt-4 mb-2">
                <p className="text-xs text-[#050315]/60 mb-2">You can also ask:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedPrompt(prompt.text)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-white border border-[#dedcff] rounded-full text-xs text-[#050315]/80 hover:border-[#2f27ce] hover:bg-[#fbfbfe] transition-colors"
                    >
                      {prompt.icon}
                      <span>{prompt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Typing indicator - shows when bot is "thinking" */}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="w-6 h-6 rounded-full bg-[#2f27ce] flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                  <span className="text-white text-xs font-bold">KB</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#dedcff] text-[#050315] rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-[#2f27ce] animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-[#2f27ce] animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-[#2f27ce] animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <div className="p-3 border-t border-[#dedcff] bg-white">
            <div className="flex rounded-full border border-[#dedcff] overflow-hidden">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 p-2 px-4 text-sm text-[#050315] focus:outline-none"
                autoComplete="off"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#2f27ce] text-white p-2 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
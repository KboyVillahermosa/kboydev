"use client";
import { useState, useRef, useEffect } from 'react';
import { useMarkdownIt } from '@/hooks/useMarkdownIt';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp?: string;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: "Hi there! I'm kkboy's assistant. What would you like to know today?", 
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const { renderMarkdown } = useMarkdownIt();

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add fade-in animation when opening the chat
  useEffect(() => {
    if (isOpen) {
      const chatInterface = document.getElementById('chat-interface');
      if (chatInterface) {
        // First set display to flex, then animate opacity and transform
        chatInterface.style.display = 'flex';
        
        // Trigger reflow to ensure the transition works
        void chatInterface.offsetWidth;
        
        chatInterface.style.opacity = '1';
        chatInterface.style.transform = 'translateY(0)';
      }
    }
  }, [isOpen]);

  const scrollToBottom = (smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: smooth ? 'smooth' : 'auto' 
      });
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Start typing animation
    setIsTyping(true);
    
    // Call the API
    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage.text }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('API response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };
        
        setIsTyping(false);
        setMessages(prev => [...prev, botMessage]);
      })
      .catch(error => {
        console.error('Error:', error);
        
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Sorry, I couldn't process your request right now.",
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };
        
        setIsTyping(false);
        setMessages(prev => [...prev, errorMessage]);
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const closeChat = () => {
    const chatInterface = document.getElementById('chat-interface');
    if (chatInterface) {
      chatInterface.style.opacity = '0';
      chatInterface.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        chatInterface.style.display = 'none';
        setIsOpen(false);
      }, 300);
    } else {
      setIsOpen(false);
    }
  };

  const toggleChat = () => {
    if (isOpen) {
      closeChat();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div id="chat-container" className="fixed z-50">
      {/* Chat Button */}
      <button
        id="chat-button"
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 py-3 px-4 md:px-5 hover:translate-y-[-2px]"
        aria-label="Chat with kkboy"
      >
        <div className="chat-icon-container relative w-6 h-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 chat-bubble">
            <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="hidden md:inline font-medium">Chat with Kboy</span>
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div 
          id="chat-interface" 
          className="fixed bottom-[90px] right-6 w-80 md:w-96 max-h-[520px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}
        >
          {/* Chat Header */}
          <div className="px-5 py-4 bg-slate-800 text-white flex justify-between items-center">
            <div>
              <div className="font-semibold text-lg">Chat with Kboy</div>
              <div className="flex items-center text-sm text-gray-300">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={closeChat}
              type="button" 
              className="text-gray-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat Messages */}
          <div 
            className="flex-1 p-5 overflow-y-auto scrollbar-chat" 
            id="chat-messages"
            ref={chatMessagesRef}
          >
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-4 ${message.sender === 'user' ? 'flex justify-end' : 'flex'}`}
              >
                {message.sender === 'bot' ? (
                  <div className="max-w-[80%] bg-indigo-500 text-white rounded-lg py-2.5 px-4">
                    <div 
                      className="markdown-content"
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }}
                    />
                    {message.timestamp && (
                      <div className="text-[10px] mt-1 text-right opacity-70">
                        {message.timestamp}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="max-w-[80%] bg-indigo-100 dark:bg-indigo-900/30 rounded-lg py-2.5 px-4 text-slate-800 dark:text-slate-100">
                    <p>{message.text}</p>
                    {message.timestamp && (
                      <div className="text-[10px] mt-1 text-right opacity-70">
                        {message.timestamp}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            
            {/* Enhanced Typing Animation */}
            {isTyping && (
              <div className="flex mb-4 typing-indicator-container animate-fade-in">
                <div className="max-w-[80%] bg-indigo-500 text-white rounded-lg py-2 px-4">
                  <div className="typing-animation">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-700">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-600 rounded-full shadow-sm pr-1.5">
              <input 
                type="text" 
                id="chat-input" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..." 
                className="flex-1 px-4 py-3 bg-transparent text-gray-800 dark:text-gray-100 rounded-full border-none focus:outline-none"
              />
              <button 
                id="send-button" 
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:bg-indigo-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Supporting styles */}
      <style jsx>{`
        .chat-icon-container {
          animation: slant 1.5s ease-in-out infinite;
        }
        
        @keyframes slant {
          0% { transform: rotate(-5deg); }
          50% { transform: rotate(0deg); }
          100% { transform: rotate(5deg); }
        }
        
        .scrollbar-chat::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-chat::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-chat::-webkit-scrollbar-thumb {
          background-color: rgba(79, 70, 229, 0.5);
          border-radius: 20px;
        }
        
        /* Enhanced typing animation */
        .typing-indicator-container {
          opacity: 0;
          animation: fadeIn 0.3s forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .typing-animation {
          display: flex;
          align-items: center;
          column-gap: 6px;
          padding: 6px 0;
        }
        
        .typing-animation .dot {
          display: block;
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
        }
        
        .typing-animation .dot:nth-child(1) {
          animation: typingAnimation 1.5s infinite;
        }
        
        .typing-animation .dot:nth-child(2) {
          animation: typingAnimation 1.5s infinite;
          animation-delay: 0.2s;
        }
        
        .typing-animation .dot:nth-child(3) {
          animation: typingAnimation 1.5s infinite;
          animation-delay: 0.4s;
        }
        
        @keyframes typingAnimation {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-5px);
            opacity: 1;
          }
          50% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(5px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
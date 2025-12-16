import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';

const CHAT_PARTNER = "Alex";

const CONVERSATION_DATA = [
  { id: 1, sender: 'Alex', message: "Hey, are you free this weekend?", delay: 1500 },
  { id: 2, sender: 'Me', message: "Maybe! What were you thinking of doing?", delay: 2000 },
  { id: 3, sender: 'Alex', message: "I heard there's a new cafe downtown with great coffee.", delay: 3500 },
  { id: 4, sender: 'Me', message: "Ooh, I'm definitely in for that. Which day works best for you?", delay: 2500 },
  { id: 5, sender: 'Alex', message: "Saturday afternoon?", delay: 1000 },
  { id: 6, sender: 'Me', message: "Perfect. See you then!", delay: 1500 },
];

// --- Revised Checkmark Component (Always Double Green) ---
const Checkmark = () => {
  const baseClasses = "ml-1.5 text-xs text-green-500";
  
  // Renders a double green checkmark always, simulating 'read' for the demo.
  return (
    <span className={baseClasses} aria-label="Read">
      ✓✓
    </span>
  );
};

// --- Main Chat Page Component ---
const MobileChatPage = () => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  // Custom hook/function to simulate the slow conversation
  const simulateConversation = useCallback(() => {
    let currentDelay = 0;
    
    CONVERSATION_DATA.forEach((chatMessage) => {
      // Accumulate the delay to queue the messages correctly
      currentDelay += chatMessage.delay;
      
      // Set a timeout for each message to appear
      setTimeout(() => {
        setDisplayedMessages(prevMessages => [...prevMessages, chatMessage]);
        // Scroll to the bottom when a new message appears
        scrollToBottom();
      }, currentDelay);
    });
  }, []);

  // Start the simulation when the component mounts
  useEffect(() => {
    simulateConversation();
  }, [simulateConversation]);

  // Scroll to bottom whenever displayedMessages changes (ensures new messages are visible)
  useEffect(() => {
    scrollToBottom();
  }, [displayedMessages.length]);

  return (
    <>
      <Head>
        <title>{CHAT_PARTNER}</title>
      </Head>
      
      {/* Outer container - Will be shaped like a mobile view */}
      <div className="flex justify-center bg-gray-100 min-h-screen">
        <div className="w-full max-w-sm bg-white shadow-xl flex flex-col h-screen">
          
          {/* Chat Header */}
          <header className="bg-black text-white p-4 flex items-center shadow-md z-10">
            <h1 className="text-lg font-semibold ml-2">{CHAT_PARTNER}</h1>
          </header>

          {/* Chat Body Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {displayedMessages.map((message) => {
              const isPartner = message.sender === CHAT_PARTNER;
              const bubbleClasses = "max-w-[80%] p-2.5 rounded-xl break-words relative";
              // Partner bubble
              const partnerClasses = 
                "bg-white text-black border border-black rounded-tl-sm self-start";
              // Self bubble
              const myClasses = 
                "bg-gray-200 text-black rounded-br-sm self-end flex items-end";

              return (
                <div 
                  key={message.id} 
                  className={`flex ${isPartner ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`${bubbleClasses} ${isPartner ? partnerClasses : myClasses}`}>
                    <span className="leading-snug">{message.message}</span>
                    
                    {/* Double green checkmark */}
                    {!isPartner && <Checkmark />}
                  </div>
                </div>
              );
            })}
            
            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileChatPage;
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Image  from 'next/image';

const CHAT_PARTNER = "Alex";

// The whole conversation
const CONVERSATION_DATA = [
  { sender: 'Alex', image: "/nextJS/images/nextJs.png", delay: 100 },
  { sender: 'Alex', message: "Selamat siang gan, cover mobil untuk Alphard Hybrid 2024 modelista ukuran tinggi bisa nggak ya?", delay: 1400 },
  { sender: 'Alex', message: "Maaf nanya dulu nih gan, soalnya pengalaman beli brand lain tidak tercover sampai bawah mobilnya.", delay: 1500 },
  { sender: 'Alex', message: "Akhirnya saya complain ke sellernya. Mohon info ya gan, Terima kasih.", delay: 1000 },
  { sender: 'Me', message: "Selamat siang kak! Untuk produk yang kakak link bisa langsung dipakai untuk mobil Alphard Hybrid 2024 kakak ya. Car covernya tutup sampai bawah kok kak, jadi tidak usah khawatir.", delay: 1300 },
  { sender: 'Me', message: "Bahkan kalau ukurannya juga mau sampai ke ban juga bisa kak, tinggal kasih note saja dan kita bisa buat cover yang custom.", delay: 1200 }
];

// Double green checkmark component
const Checkmark = () => {
  const baseClasses = "ml-1.5 text-xs text-green-500";
  return (
    <span className={baseClasses} aria-label="Read">
      ✓✓
    </span>
  );
};

// Product preview component
const Product = () => {
  return(
    <></>
  )
}

const DisplayConversationData = () => {
  let str = "";
  CONVERSATION_DATA.map((data, index) => {
    let line = "{";
    let values = Object.entries(data).map(([key, value]) => {
      line = line + {key} + ":" + {value} + ", ";
    
    });
    line = line + "},"
    str = str + line;
  });

  str = str.substring(0, str.length - 1);
  return str;
}

console.log(DisplayConversationData());

const MobileChatPage = () => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Scroll to bottom function (duh)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  // Delay function
  const simulateConversation = useCallback(() => {
    let currentDelay = 0;
    
    CONVERSATION_DATA.forEach((chatMessage) => {
      currentDelay += chatMessage.delay;
      setTimeout(() => {
        setDisplayedMessages(prevMessages => [...prevMessages, chatMessage]);
        scrollToBottom();
      }, currentDelay);
    });
  }, []);

  // Start the simulation when the component mounts
  useEffect(() => {
    simulateConversation();
  }, [simulateConversation]);

  // Scroll to bottom whenever a message appears
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
                    {message.image && 
                      <Image
                            src = {message.image}
                            alt  =  "image"
                            width = {200}
                            height = {200}
                            blurDataURL='data:...'
                            placeholder='blur'
                            className = "w-[200px] h-auto max-h-[400px] object-cover overflow-hidden"
                            />
                    }
                    {message.message &&<span className="leading-snug">{message.message}</span>}
                    
                    {/* Double green checkmark */}
                    {/* {!isPartner && <Checkmark />} */}
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
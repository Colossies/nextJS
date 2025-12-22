"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Image  from 'next/image';

const CHAT_PARTNER = "Alex";

// The whole conversation
const CONVERSATION_DATA = [
  { id: 1, sender: 'Alex', image: "/nextJS/images/nextJs.png", message: "Selamat siang gan, cover mobil untuk Alphard Hybrid 2024 modelista ukuran tinggi bisa nggak ya?", delay: 100 },
  { id: 2, sender: 'Alex', message: "Maaf nanya dulu nih gan, soalnya pengalaman beli brand lain tidak tercover sampai bawah mobilnya.", delay: 1500 },
  { id: 3, sender: 'Alex', message: "Akhirnya saya complain ke sellernya. Mohon info ya gan, Terima kasih.", delay: 1000 },
  { id: 4, sender: 'Me', message: "Selamat siang kak! Untuk produk yang kakak link bisa langsung dipakai untuk mobil Alphard Hybrid 2024 kakak ya. Car covernya tutup sampai bawah kok kak, jadi tidak usah khawatir.", delay: 1300 },
  { id: 5, sender: 'Me', message: "Bahkan kalau ukurannya juga mau sampai ke ban juga bisa kak, tinggal kasih note saja dan kita bisa buat cover yang custom.", delay: 1200 }
];

let conversationId = CONVERSATION_DATA.length + 1;

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
      line = line + `${key}` + ":" + `${value}` + ", ";
    
    });
    line = line + "},"
    str = str + line;
  }); 

  str = str.substring(0, str.length - 1);
  return str;
}

console.log(DisplayConversationData());

// The page
export default function Page() {
  const [conversations, setConversations] = useState(CONVERSATION_DATA);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const timeoutsRef = useRef([]);

  // Scroll to bottom function (duh)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  // Delay function
  const simulateConversation = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setDisplayedMessages([]);
    let currentDelay = 0;
    
    conversations.forEach((chatMessage) => {
      currentDelay += chatMessage.delay;
      const timer = setTimeout(() => {
        setDisplayedMessages(prevMessages => [...prevMessages, chatMessage]);
        scrollToBottom();
      }, currentDelay);
      timeoutsRef.current.push(timer);
    });
  }, [conversations]);

  // Start the simulation when the component mounts
  useEffect(() => {
    simulateConversation();
  }, [simulateConversation]);

  // Scroll to bottom whenever a message appears
  useEffect(() => {
    scrollToBottom();
  }, [displayedMessages.length]);

  const removeDialog = (id) => {
    setConversations(oData => oData.filter(item => item.id !== id));
  }

  const addDialog = (content) => {

  }

  const modifyConversation = (id, content) => {
    // const data = CONVERSATION_DATA.filter(d => d.id === id)[0];
    // const mData = Object.assign(data, content);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    const timer = setTimeout(() => {
      setConversations(oData => oData.map(item => item.id === id ? {...item, ...content} : item));
    }, 1000);
    timeoutsRef.current.push(timer);
  }

  const reorderConversation = (id1, id2) => {
    if (id1 === id2) return;
    const data = [...conversations];
    const index1 = data.findIndex(i => i.id === id1);
    const index2 = data.findIndex(i => i.id === id2);

    const [old] = data.splice(index1, 1);
    data.splice(index2, 0, old);
    setConversations(data);

    return [index1, index2];
  }

  // Drag handlers
  const dragStartEvent = (event, id) => {
    event.dataTransfer.setData("draggedId", id);
    event.target.classList.add("opacity-50");

  }

  const dragOverEvent = (event) => {
    event.preventDefault();
  }

  const dropEvent = (event) => {
    event.preventDefault();
    if(event.target.classList.contains("dataDropzone")) {
      const id1 = event.dataTransfer.getData("draggedId");;
      const id2 = event.target.getAttribute('data-id');

      if(id1 && id2 && id1 !== id2) {
        reorderConversation(Number(id1), Number(id2));
      }
    }
  }


  // the actual content of the page
  const [canDrag, setCanDrag] = useState(false);
  return (
    
    <div className = "w-full h-full flex flex-row justify-between">
      {/* Data Editor */}
      <div className = "flex flex-col space-y-2 p-2">
        {conversations.map((content) => {
          
          return (
            <div data-id = {content.id} key = {`${content.id}_outer`} className = "p-0 dataDropzone bg-gray-200 rounded-md p-2"
             draggable = {canDrag}
             onDragStart = {(e) => {
              dragStartEvent(e, content.id);
             }}
             onDragOver = {(e) => {
              dragOverEvent(e);
             }}
             onDrop = {(e) => {
              dropEvent(e);
             }}
             >
              <div key = {content.id} className = "flex flex-row space-x-2">
                {/* Dragger thing */}
                <button key = {`${content.id}_drag`} className = "h-full m-r-1"
                 onMouseEnter = {() => {
                  setCanDrag(true);
                 }}
                 onMouseLeave = {() => {
                  setCanDrag(false);
                 }}
                >
                  dragbtn
                </button>
                {
                  Object.entries(content).map(([key, value]) => {
                    if(key === 'id') return null;
                    return (
                      <div key = {key} className = "flex flex-col space-y-1">
                        <label className = "w-20 text-xs uppercase space-x-2">
                          {key}
                        </label>
                        <input 
                          type = "text"
                          className = "text-xs"
                          value = {value}
                          onChange = {(e) => {
                            modifyConversation(content.id, {[key]: e.target.value});
                          }}
                        >
                        </input>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
          
        })}
        <button onClick = {simulateConversation}> Restart Conversation </button>

      </div>
      {/* Outer container For Chat View */}
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
                <>
                {message.message && 
                  <div 
                    className={`flex ${isPartner ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`${bubbleClasses} ${isPartner ? partnerClasses : myClasses}`}>
                      <span className="leading-snug">{message.message}</span>
                    </div>
                  </div>
                }
                {message.image && 
                  <div 
                    className={`flex ${isPartner ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`${bubbleClasses} rounded-br-sm self-end flex items-end p-0`}>
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
                    </div>
                  </div>
                }
                </>
              ); 
            })}
            
            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

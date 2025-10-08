
// import  { useState, useRef, useEffect, useCallback, useMemo } from "react";
// import { FaTimes, FaPaperPlane, FaSpinner, FaMicrophone } from "react-icons/fa";

// const responseMap = {
//   hi: "Hi there! 👋 How can I help you today?",
//   hello: "Hi there! 👋 How can I help you today?",
//   greet: "I'm Fine ",
//   services: "We offer Web Development, UI/UX Design, E-commerce Solutions, WordPress Development, SEO Optimization, and IT Services.",
//   pricing: "Pricing depends on the project. For a basic website, it starts from $200. Get a custom quote by sharing your needs!",
//   cost: "Pricing depends on the project. Get a custom quote by sharing your needs!",
//   charge: "Pricing depends on the project. Get a custom quote by sharing your needs!",
//   contact: "You can contact us at zeshig01@gmail.com or via WhatsApp at +923174652685.",
//   portfolio: "You can view our portfolio here: https://zeshi-the-brand.vercel.app/",
//   help: "I'm here to assist you! Ask about services, prices, portfolio, or timelines.",
//   support: "I'm here to assist you! Ask about services, prices, portfolio, or timelines.",
//   timeline: "Most basic websites are delivered in 1–2 weeks. Complex apps may take 3–6 weeks.",
//   duration: "Most basic websites are delivered in 1–2 weeks. Complex apps may take 3–6 weeks.",
// };

// const suggestedQuestions = [
//   "💼 Services?",
//   "💰 Pricing?",
//   "📞 Contact info?",
//   "🖼️ Portfolio?",
//   "⏳ Project timeline?",
//   "🆘 Need help?",
// ];

// const Chatbot = ({ onClose }) => {
//   const [messages, setMessages] = useState([
//     {
//       text: "Welcome! I'm here to answer questions about our services, pricing, portfolio, and more. Try a suggested question below or type your own!",
//       isUser: false,
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isBotTyping, setIsBotTyping] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const [isSpeechSupported, setIsSpeechSupported] = useState(false);
//   const messagesEndRef = useRef(null);
//   const recognitionRef = useRef(null);

//   // Scroll to the latest message
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Initialize Speech Recognition
//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       setIsSpeechSupported(true);
//       recognitionRef.current = new SpeechRecognition();
//       recognitionRef.current.continuous = false;
//       recognitionRef.current.interimResults = false;
//       recognitionRef.current.lang = "en-US";

//       recognitionRef.current.onresult = (event) => {
//         const transcript = event.results[0][0].transcript.trim();
//         if (transcript) {
//           setInput(transcript);
//           handleSend(transcript); // Auto-send transcribed text
//         }
//         setIsListening(false);
//       };

//       recognitionRef.current.onerror = (event) => {
//         console.error("Speech recognition error:", event.error);
//         setIsListening(false);
//         let errorMessage = "Sorry, I couldn't process your voice input.";
//         if (event.error === "no-speech") {
//           errorMessage = "No speech detected. Please try again.";
//         } else if (event.error === "audio-capture") {
//           errorMessage = "Microphone access denied or not available. Please check permissions.";
//         } else if (event.error === "not-allowed") {
//           errorMessage = "Microphone access was denied. Please allow microphone permissions.";
//         }
//         setMessages((prev) => [
//           ...prev,
//           { text: errorMessage, isUser: false },
//         ]);
//       };

//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//       };
//     } else {
//       setIsSpeechSupported(false);
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Speech recognition is not supported in this browser. Please type your message or use Chrome/Edge.",
//           isUser: false,
//         },
//       ]);
//     }

//     // Cleanup on unmount
//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.stop();
//       }
//     };
//   }, []);

//   const handleSend = useCallback(
//     (message = input) => {
//       if (!message.trim()) return;

//       setMessages((prev) => [...prev, { text: message, isUser: true }]);
//       setInput("");
//       setIsBotTyping(true);

//       setTimeout(() => {
//         const lower = message.toLowerCase().replace(/[^a-zA-Z ]/g, "");
//         const botResponse = Object.keys(responseMap).find((key) => lower.includes(key))
//           ? responseMap[Object.keys(responseMap).find((key) => lower.includes(key))]
//           : "Sorry, I didn't understand that. Try asking about services, pricing, or support!";

//         setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
//         setIsBotTyping(false);
//       }, 500);
//     },
//     [input]
//   );

//   const handleSuggestedQuestion = useCallback(
//     (question) => {
//       const cleanQuestion = question.replace(/[^a-zA-Z ]/g, "");
//       setInput(cleanQuestion);
//       handleSend(cleanQuestion);
//     },
//     [handleSend]
//   );

//   const clearChat = useCallback(() => {
//     setMessages([
//       {
//         text: "Welcome! I'm here to answer questions about our services, pricing, portfolio, and more. Try a suggested question below or type your own!",
//         isUser: false,
//       },
//     ]);
//   }, []);

//   const startListening = useCallback(() => {
//     if (recognitionRef.current && !isListening && isSpeechSupported) {
//       try {
//         recognitionRef.current.start();
//         setIsListening(true);
//       } catch (error) {
//         console.error("Error starting speech recognition:", error);
//         setIsListening(false);
//         setMessages((prev) => [
//           ...prev,
//           { text: "Failed to start voice input. Please try again.", isUser: false },
//         ]);
//       }
//     }
//   }, [isListening, isSpeechSupported]);

//   const memoizedSuggestedQuestions = useMemo(
//     () =>
//       suggestedQuestions.map((q, i) => (
//         <button
//           key={i}
//           onClick={() => handleSuggestedQuestion(q)}
//           className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition-colors"
//           aria-label={`Ask about ${q}`}
//         >
//           {q}
//         </button>
//       )),
//     [handleSuggestedQuestion]
//   );

//   return (
//     <div className="w-full max-w-md h-[28rem] bg-gray-800 text-white rounded-lg shadow-xl flex flex-col">
//       <div className="flex justify-between items-center p-4 bg-blue-600 rounded-t-lg">
//         <h3 className="text-lg font-bold">Quick Chat</h3>
//         <div className="flex space-x-2">
//           <button
//             onClick={clearChat}
//             className="text-sm bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
//             aria-label="Clear chat"
//           >
//             Clear
//           </button>
//           <button onClick={onClose} aria-label="Close chatbot">
//             <FaTimes size={20} />
//           </button>
//         </div>
//       </div>

//       <div className="flex-1 p-4 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div key={index} className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}>
//             <span
//               className={`inline-block p-2 rounded-lg ${msg.isUser ? "bg-blue-600" : "bg-gray-700"} max-w-[80%]`}
//             >
//               {msg.text}
//             </span>
//           </div>
//         ))}
//         {isBotTyping && (
//           <div className="text-left mb-2">
//             <span className="inline-block p-2 rounded-lg bg-gray-700">
//               <FaSpinner className="animate-spin" />
//             </span>
//           </div>
//         )}
//         <div className="flex flex-wrap gap-2 my-3">{memoizedSuggestedQuestions}</div>
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="p-4 border-t border-gray-700 flex items-center gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSend()}
//           placeholder="Type or speak a message..."
//           className="flex-1 p-2 bg-gray-900 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
//           aria-label="Chat input"
//         />
//         <button
//           onClick={startListening}
//           className={`p-2 rounded-lg ${
//             isListening
//               ? "bg-red-500 hover:bg-red-400"
//               : isSpeechSupported
//               ? "bg-blue-600 hover:bg-blue-500"
//               : "bg-gray-500 cursor-not-allowed"
//           }`}
//           aria-label={isListening ? "Stop listening" : "Start voice input"}
//           disabled={!isSpeechSupported}
//           title={
//             isSpeechSupported ? (isListening ? "Stop listening" : "Start voice input") : "Voice input not supported"
//           }
//         >
//           <FaMicrophone />
//         </button>
//         <button
//           onClick={() => handleSend()}
//           className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
//           aria-label="Send message"
//         >
//           <FaPaperPlane />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { FaTimes, FaPaperPlane, FaSpinner, FaMicrophone } from "react-icons/fa";

const responseMap = {
  hi: "Hi there! 👋 How can I help you today?",
  hello: "Hi there! 👋 How can I help you today?",
  greet: "I'm Fine 🙂",
  services:
    "We offer Web Development, UI/UX Design, E-commerce Solutions, WordPress Development, SEO Optimization, and IT Services.",
  pricing:
    "Pricing depends on the project. For a basic website, it starts from $200. Get a custom quote by sharing your needs!",
  cost: "Pricing depends on the project. Get a custom quote by sharing your needs!",
  charge: "Pricing depends on the project. Get a custom quote by sharing your needs!",
  contact: "You can contact us at zeshig01@gmail.com or via WhatsApp at +923174652685.",
  portfolio: "You can view our portfolio here: https://zeshi-the-brand.vercel.app/",
  help: "I'm here to assist you! Ask about services, prices, portfolio, or timelines.",
  support: "I'm here to assist you! Ask about services, prices, portfolio, or timelines.",
  timeline: "Most basic websites are delivered in 1–2 weeks. Complex apps may take 3–6 weeks.",
  duration: "Most basic websites are delivered in 1–2 weeks. Complex apps may take 3–6 weeks.",
};

const suggestedQuestions = [
  "💼 Services?",
  "💰 Pricing?",
  "📞 Contact info?",
  "🖼️ Portfolio?",
  "⏳ Project timeline?",
  "🆘 Need help?",
];

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      text: "👋 Welcome! I'm here to answer questions about our services, pricing, and more. Try a suggested question below or type your own!",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsSpeechSupported(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        if (transcript) {
          setInput(transcript);
          handleSend(transcript);
        }
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, []);

  const handleSend = useCallback(
    (message = input) => {
      if (!message.trim()) return;

      setMessages((prev) => [...prev, { text: message, isUser: true }]);
      setInput("");
      setIsBotTyping(true);

      setTimeout(() => {
        const lower = message.toLowerCase().replace(/[^a-zA-Z ]/g, "");
        const key = Object.keys(responseMap).find((k) => lower.includes(k));
        const fallbackResponses = [
  "😅 Haha, that went over my head! Can you rephrase that?",
  "🤔 Interesting... mind saying that in another way?",
  "☕ I might need another coffee to get that one!",
  "😎 That’s new to me! Wanna talk about websites or design?",
  "😂 You got me there! Try asking about something else?",
  "🤖 I'm still learning — can you say that differently?",
];

const greetings = ["hi", "hello", "hey", "heyy", "good morning", "good evening", "good night"];
const isGreeting = greetings.some((greet) => lower.includes(greet));

const botResponse = key
  ? responseMap[key]
  : isGreeting
  ? "Hey there! 👋 How’s your day going?"
  : fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

        setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
        setIsBotTyping(false);
      }, 600);
    },
    [input]
  );

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening && isSpeechSupported) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening, isSpeechSupported]);

  const clearChat = useCallback(() => {
    setMessages([
      {
        text: "👋 Welcome! I'm here to answer your questions. Type or click below to start!",
        isUser: false,
      },
    ]);
  }, []);

  const memoizedSuggestedQuestions = useMemo(
    () =>
      suggestedQuestions.map((q, i) => (
        <button
          key={i}
          onClick={() => handleSend(q)}
          className="text-xs bg-[#2b2b2b] hover:bg-[#3b3b3b] px-3 py-1 rounded-full text-yellow-400 border border-yellow-600/40 transition-all duration-200 hover:scale-105"
        >
          {q}
        </button>
      )),
    [handleSend]
  );

  return (
    <div className="w-full max-w-md h-[28rem] bg-[#0a0a0a] text-white rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.2)] border border-yellow-500/20 flex flex-col overflow-hidden backdrop-blur-lg">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-700 to-yellow-500 text-black font-semibold rounded-t-2xl shadow-md">
        <h3 className="text-lg">💬 Quick Chat</h3>
        <div className="flex gap-2">
          <button
            onClick={clearChat}
            className="text-xs bg-black/40 hover:bg-black/60 text-yellow-300 px-2 py-1 rounded-lg transition-all"
          >
            Clear
          </button>
          <button onClick={onClose} className="text-black hover:text-gray-800
           text-3xl cursor-pointer 
             transition-all duration-500 ease-in-out
             hover:text-yellow-400 hover:scale-110 hover:rotate-180
             animate-fadeInRotate">
            <FaTimes size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-black">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 flex ${
              msg.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                msg.isUser
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
                  : "bg-[#1c1c1c] text-gray-200 border border-yellow-500/20"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {isBotTyping && (
          <div className="text-left mb-2 animate-pulse">
            <span className="inline-block p-2 rounded-2xl bg-[#1c1c1c] text-yellow-300">
              <FaSpinner className="animate-spin" />
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-4">{memoizedSuggestedQuestions}</div>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="p-4 border-t border-yellow-600/20 flex items-center gap-2 bg-[#111]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type or speak a message..."
          className="flex-1 p-2 bg-[#1c1c1c] text-white rounded-xl outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={startListening}
          className={`p-2 rounded-xl transition-all duration-300 ${
            isListening
              ? "bg-red-600 hover:bg-red-500"
              : "bg-yellow-500 hover:bg-yellow-400"
          }`}
          title={
            isListening
              ? "Listening..."
              : isSpeechSupported
              ? "Start voice input"
              : "Voice not supported"
          }
          disabled={!isSpeechSupported}
        >
          <FaMicrophone className={isListening ? "animate-pulse" : ""} />
        </button>
        <button
          onClick={() => handleSend()}
          className="p-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl transition-all duration-300"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

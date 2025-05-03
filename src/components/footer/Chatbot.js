// import React, { useState, useRef, useEffect } from "react";
// import { FaTimes } from "react-icons/fa";

// const Chatbot = ({ onClose }) => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", isUser: false },
//   ]);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   // Scroll to the latest message
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     // Add user message
//     setMessages((prev) => [...prev, { text: input, isUser: true }]);

//     // Simulate bot response (replace with API call if needed)
//     setTimeout(() => {
//       let botResponse = "Sorry, I didn't understand that.";
//       if (input.toLowerCase().includes("help")) {
//         botResponse = "Try asking about our services, portfolio, or contact details!";
//       } else if (input.toLowerCase().includes("hi") || input.toLowerCase().includes("hello")) {
//         botResponse = "Hi there! What's on your mind?";
//       }
//       setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
//     }, 500);

//     setInput("");
//   };

//   return (
//     <div className="w-80 md:w-96 h-96 bg-[#1e1e1e] text-white rounded-lg shadow-lg flex flex-col">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 bg-designColor rounded-t-lg">
//         <h3 className="text-lg font-bold">Quick Chat</h3>
//         <button onClick={onClose}>
//           <FaTimes size={20} />
//         </button>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 p-4 overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}
//           >
//             <span
//               className={`inline-block p-2 rounded-lg ${
//                 msg.isUser ? "bg-designColor" : "bg-gray-700"
//               }`}
//             >
//               {msg.text}
//             </span>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <div className="p-4 border-t border-gray-700">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSend()}
//           placeholder="Type a message..."
//           className="w-full p-2 bg-gray-800 text-white rounded-lg outline-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userInput = input;
    setMessages((prev) => [...prev, { text: userInput, isUser: true }]);
    setInput("");

    setTimeout(() => {
      const lower = userInput.toLowerCase();
      let botResponse = "Sorry, I didn't understand that. You can ask about our services, pricing, or support.";

      if (lower.includes("hi") || lower.includes("hello")) {
        botResponse = "Hi there! 👋 How can I help you today?";
      } else if (lower.includes("services")) {
        botResponse = "We offer Web Development, UI/UX Design, E-commerce Solutions, WordPress Development, SEO Optimization, and IT Services.";
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("charge")) {
        botResponse = "Pricing depends on the project. For a basic website, it starts from $200. Get a custom quote by sharing your needs!";
      } else if (lower.includes("contact")) {
        botResponse = "You can contact us at contact@yourdomain.com or via WhatsApp at +1234567890.";
      } else if (lower.includes("portfolio")) {
        botResponse = "You can view our portfolio here: https://yourdomain.com/portfolio";
      } else if (lower.includes("help") || lower.includes("support")) {
        botResponse = "I'm here to assist you! Ask about services, prices, portfolio, or timelines.";
      } else if (lower.includes("timeline") || lower.includes("duration")) {
        botResponse = "Most basic websites are delivered in 1–2 weeks. Complex apps may take 3–6 weeks.";
      }

      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    }, 500);
  };

  return (
    <div className="w-80 md:w-96 h-96 bg-[#1e1e1e] text-white rounded-lg shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-designColor rounded-t-lg">
        <h3 className="text-lg font-bold">Quick Chat</h3>
        <button onClick={onClose}>
          <FaTimes size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block p-2 rounded-lg ${
                msg.isUser ? "bg-designColor" : "bg-gray-700"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {/* Suggested Questions */}
        <div className="flex flex-wrap gap-2 my-3">
          {[
            "What services do you offer?",
            "What is your pricing?",
            "How to contact you?",
            "Show me your portfolio",
          ].map((q, i) => (
            <button
              key={i}
              onClick={() => {
                setInput(q);
                setTimeout(handleSend, 100); // delay to let input update
              }}
              className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full"
            >
              {q}
            </button>
          ))}
        </div>

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="w-full p-2 bg-gray-800 text-white rounded-lg outline-none"
        />
      </div>
    </div>
  );
};

export default Chatbot;

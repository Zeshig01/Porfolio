// import React, { useEffect, useState } from "react";

// export default function GreetingPopup() {
//   const [visible, setVisible] = useState(true);
//   const [animationClass, setAnimationClass] = useState("fade-in");
//   const [message, setMessage] = useState("");
//   const [emoji, setEmoji] = useState("");
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     // Determine current hour and set message/emoji
//     const hour = new Date().getHours();
//     let greeting = "";
//     let emoji = "";

//     if (hour >= 5 && hour < 12) {
//       greeting = "Good Morning";
//       emoji = "☀️";
//     } else if (hour >= 12 && hour < 17) {
//       greeting = "Good Afternoon";
//       emoji = "🌤️";
//     } else if (hour >= 17 && hour < 20) {
//       greeting = "Good Evening";
//       emoji = "🌇";
//     } else if (hour >= 20 && hour < 24) {
//       greeting = "Good Night";
//       emoji = "🌙";
//     } else {
//       greeting = "Late Night Vibes";
//       emoji = "✨";
//     }

//     setMessage(greeting);
//     setEmoji(emoji);

//     // Create floating particles
//     const particlesArray = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 10 + 5,
//       position: {
//         x: Math.random() * 100,
//         y: Math.random() * 100
//       },
//       animationDelay: Math.random() * 5,
//       duration: Math.random() * 10 + 5
//     }));
//     setParticles(particlesArray);

//     // Automatically hide popup after 5 seconds with fade out
//     const timer = setTimeout(() => {
//       setAnimationClass("fade-out");
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div style={styles.overlay}>
//       {/* Floating particles background */}
//       <div style={styles.particlesContainer}>
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             style={{
//               ...styles.particle,
//               width: particle.size,
//               height: particle.size,
//               left: `${particle.position.x}%`,
//               top: `${particle.position.y}%`,
//               animationDelay: `${particle.animationDelay}s`,
//               animationDuration: `${particle.duration}s`
//             }}
//           />
//         ))}
//       </div>

//       <div
//         style={styles.popup}
//         className={animationClass}
//         onAnimationEnd={() => {
//           if (animationClass === "fade-out") {
//             setVisible(false);
//           }
//         }}
//       >
//         <div style={styles.emojiContainer}>
//           <div style={styles.emoji}>{emoji}</div>
//         </div>
//         <h2 style={styles.message}>{message}</h2>
//         <div style={styles.timeDisplay}>
//           {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         </div>
//         <div style={styles.progressBar}>
//           <div style={styles.progressFill} />
//         </div>
//       </div>

//       <style>{`
//         @keyframes popupFadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(-50px) scale(0.9);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes popupFadeOut {
//           0% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//           100% {
//             opacity: 0;
//             transform: translateY(-50px) scale(0.9);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes particleFloat {
//           0% {
//             transform: translateY(0) rotate(0deg);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100vh) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         @keyframes progress {
//           0% {
//             width: 100%;
//           }
//           100% {
//             width: 0%;
//           }
//         }

//         .fade-in {
//           animation: popupFadeIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
//         }

//         .fade-out {
//           animation: popupFadeOut 0.6s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

// const styles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 9999,
//     backdropFilter: "blur(3px)",
//   },
//   popup: {
//     backgroundColor: "rgba(30, 30, 40, 0.95)",
//     color: "#fff",
//     padding: "40px 60px",
//     borderRadius: "25px",
//     boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
//     fontSize: "2rem",
//     fontWeight: "700",
//     textAlign: "center",
//     border: "1px solid rgba(255, 255, 255, 0.1)",
//     position: "relative",
//     overflow: "hidden",
//     minWidth: "350px",
//     transform: "scale(1)",
//     zIndex: 2,
//   },
//   emojiContainer: {
//     marginBottom: "20px",
//   },
//   emoji: {
//     fontSize: "4rem",
//     animation: "float 3s ease-in-out infinite",
//     display: "inline-block",
//   },
//   message: {
//     margin: "0 0 10px 0",
//     background: "linear-gradient(45deg, #ff8a00, #e52e71)",
//     WebkitBackgroundClip: "text",
//     backgroundClip: "text",
//     color: "transparent",
//     fontSize: "2.5rem",
//   },
//   timeDisplay: {
//     fontSize: "1.2rem",
//     opacity: 0.8,
//     marginBottom: "20px",
//     fontFamily: "monospace",
//   },
//   progressBar: {
//     height: "4px",
//     width: "100%",
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     borderRadius: "2px",
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//   },
//   progressFill: {
//     height: "100%",
//     backgroundColor: "linear-gradient(90deg, #00c6ff, #0072ff)",
//     backgroundColor: "#00c6ff",
//     animation: "progress 5s linear forwards",
//   },
//   particlesContainer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: 1,
//   },
//   particle: {
//     position: "absolute",
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     borderRadius: "50%",
//     animation: "particleFloat linear infinite",
//     filter: "blur(1px)",
//   },
// };

import React, { useEffect, useState } from "react";

export default function GreetingPopup() {
  const [visible, setVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [message, setMessage] = useState("");
  const [emoji, setEmoji] = useState("");
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Determine current hour and set message/emoji
    const hour = new Date().getHours();
    let greeting = "";
    let emoji = "";

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning";
      emoji = "☀️";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good Afternoon";
      emoji = "🌤️";
    } else if (hour >= 17 && hour < 20) {
      greeting = "Good Evening";
      emoji = "🌇";
    } else if (hour >= 20 && hour < 24) {
      greeting = "Good Night";
      emoji = "🌙";
    } else {
      greeting = "Late Night Vibes";
      emoji = "✨";
    }

    setMessage(greeting);
    setEmoji(emoji);

    // Create floating particles
    const particlesArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      animationDelay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
    }));
    setParticles(particlesArray);

    // Automatically hide popup after 5 seconds with fade out
    const timer = setTimeout(() => {
      setAnimationClass("fade-out");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      {/* Floating particles background */}
      <div style={styles.particlesContainer}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              width: particle.size,
              height: particle.size,
              left: `${particle.position.x}%`,
              top: `${particle.position.y}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div
        style={styles.popup}
        className={animationClass}
        onAnimationEnd={() => {
          if (animationClass === "fade-out") {
            setVisible(false);
          }
        }}
      >
        <div style={styles.emojiContainer}>
          <div style={styles.emoji}>{emoji}</div>
        </div>
        <h2 style={styles.message}>{message}</h2>
        <div style={styles.timeDisplay}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
        {/* New greeting below time */}
        <div style={styles.helpMessage}>Hello! How can I help you today?</div>
        <div style={styles.progressBar}>
          <div style={styles.progressFill} />
        </div>
      </div>

      <style>{`
        @keyframes popupFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes popupFadeOut {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes progress {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }

        .fade-in {
          animation: popupFadeIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .fade-out {
          animation: popupFadeOut 0.6s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
        }
      `}</style>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backdropFilter: "blur(3px)",
  },
  popup: {
    backgroundColor: "rgba(30, 30, 40, 0.95)",
    color: "#fff",
    padding: "40px 60px",
    borderRadius: "25px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
    fontSize: "2rem",
    fontWeight: "700",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    position: "relative",
    overflow: "hidden",
    minWidth: "350px",
    transform: "scale(1)",
    zIndex: 2,
  },
  emojiContainer: {
    marginBottom: "20px",
  },
  emoji: {
    fontSize: "4rem",
    animation: "float 3s ease-in-out infinite",
    display: "inline-block",
  },
  message: {
    margin: "0 0 10px 0",
    background: "linear-gradient(45deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontSize: "2.5rem",
  },
  timeDisplay: {
    fontSize: "1.2rem",
    opacity: 0.8,
    marginBottom: "8px",
    fontFamily: "monospace",
  },
  helpMessage: {
    fontSize: "1.4rem",
    opacity: 0.9,
    marginBottom: "20px",
    fontWeight: "500",
    fontStyle: "italic",
  },
  progressBar: {
    height: "4px",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "2px",
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#00c6ff",
    animation: "progress 5s linear forwards",
  },
  particlesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  particle: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    animation: "particleFloat linear infinite",
    filter: "blur(1px)",
  },
};

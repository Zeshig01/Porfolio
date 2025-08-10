import React, { useEffect } from "react";

const CustomCursor = () => {
  // useEffect(() => {
  //   const cursor = document.createElement("div");
  //   cursor.classList.add("custom-cursor");
  //   document.body.appendChild(cursor);

  //   const moveCursor = (e) => {
  //     cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
  //   };

  //   document.addEventListener("mousemove", moveCursor);

  //   return () => {
  //     document.removeEventListener("mousemove", moveCursor);
  //     cursor.remove();
  //   };
  // }, []);
useEffect(() => {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  const moveCursor = (x, y) => {
    cursor.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
  };

  const mouseMoveHandler = (e) => moveCursor(e.clientX, e.clientY);
  const touchMoveHandler = (e) => {
    if (e.touches.length > 0) {
      moveCursor(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("touchmove", touchMoveHandler);

  return () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("touchmove", touchMoveHandler);
    cursor.remove();
  };
}, []);

  return null;
};

export default CustomCursor;

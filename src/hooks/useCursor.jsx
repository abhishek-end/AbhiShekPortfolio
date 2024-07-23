import React, { createContext, useState, useEffect, useContext } from "react";

const CursorContext = createContext();

const CursorFollower = ({ children }) => {
  const [position, setPosition] = useState({ x: 684, y: 510 });
  const [isTouchingLink, setIsTouchingLink] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const value = {
    position,
    isTouchingLink,
    setIsTouchingLink,
  };

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};

export default CursorFollower;

export const useCursor = () => {
  return useContext(CursorContext);
};

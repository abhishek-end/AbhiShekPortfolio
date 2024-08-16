import React, { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

const CursorContext = createContext();

const CursorFollower = ({ children }) => {
  const [position, setPosition] = useState({ x: 900, y: -500 });
  const [isTouchingLink, setIsTouchingLink] = useState(false);
  const location = useLocation();
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/home") {
      setIsTouchingLink(false);
    }
  }, [location]);

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

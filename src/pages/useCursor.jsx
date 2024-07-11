import React, { createContext, useState, useEffect, useContext } from "react";

const CursorContext = createContext();

const CursorFollower = ({ children }) => {
  const [position, setPosition] = useState({ x: -9999, y: -9999 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ position }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorFollower;

export const useCursor = () => {
  return useContext(CursorContext);
};

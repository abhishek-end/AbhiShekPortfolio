import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCursor } from "../hooks/useCursor";
const WorkButton = ({ link, text }) => {
  const { setIsTouchingLink } = useCursor();
  const handleTouch = () => setIsTouchingLink(true);
  const removeTouch = () => setIsTouchingLink(false);

  const eventHandlers = {
    onMouseMove: handleTouch,
    onMouseLeave: removeTouch,
    className: "underline-animation",
  };

  return (
    <div className='font-gugi p-2 mt-12 lg:mt-2 w-1/2 flex text-2xl capitalize font-bold gap-2 '>
      <Link to={link} {...eventHandlers}>
        {text}
      </Link>
      <FontAwesomeIcon icon={faArrowRight} size='lg' className='-rotate-45' />
    </div>
  );
};

export default WorkButton;
// Duration 1 Hour ...

import React, { useState, useRef, useEffect } from "react";
import { useCursor } from "./../hooks/useCursor";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
const MyWork = () => {
  const [isHover, setIsHover] = useState(null);
  const { position } = useCursor();
  const imgRef = useRef([]);

  const mouseEnter = (index) => {
    setIsHover(index);
  };

  const onMouseLeave = () => {
    setIsHover(null);
  };

  useEffect(() => {
    const updateImage = (index, x, y) => {
      if (imgRef.current[index]) {
        const width = 144;
        const height = 192;
        imgRef.current[index].style.left = `${x - width / 2}px`;
        imgRef.current[index].style.top = `${y / height / 2}px`;
      }
    };

    if (isHover !== null) {
      const image = imgRef.current[isHover];
      const parentRect = image.parentElement.getBoundingClientRect();
      const x = position.x - parentRect.left;
      const y = position.y - parentRect.top;
      updateImage(isHover, x, y);
    }
  }, [position, isHover]);

  const data = [
    {
      text: "Project1",
      imgSrc:
        "https://images.pexels.com/photos/18383020/pexels-photo-18383020/free-photo-of-portrait-of-woman-with-peacock-feather.jpeg",
      info: "",
      tech: "",
    },
    {
      text: "Project2",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9ritPwYXdG3QsWdtMDs3ujOR4Kwh9hLrT3aJY862AWvlenYVrIARIpoyPC_IZYZXGu8&usqp=CAU",
      info: "",
      tech: "",
    },
    {
      text: "Project3",
      imgSrc: "https://cdn.esawebb.org/archives/images/screen/weic2216b.jpg",
      info: "",
      tech: "",
    },
    {
      text: "Project4",
      imgSrc: "https://cdn.esawebb.org/archives/images/screen/weic2216b.jpg",
      info: "",
      tech: "HTML CSS JS",
    },
  ];

  return (
    <div className=' w-full  min-h-screen -mt-80 px-48  '>
      <div className='text-white text-7xl uppercase font-extrabold whitespace-wrap w-full  '>
        <h4>
          It might be simple but <br /> I put my heart into it
        </h4>
      </div>
      <div className='w-full h-full  mt-16 relative  '>
        {data.map((item, index) => (
          <div
            key={index}
            className='w-full h-[10rem] border-b  mt-2 flex flex-col justify-between  '
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={onMouseLeave}
          >
            <div className='relative r-image patanhi'>
              <h4 className='text-white text-2xl capitalize font-gugi font-semibold mt-2'>
                {item.text}
              </h4>
              <img
                src={item.imgSrc}
                alt='item.index'
                className={`w-56 h-64 rounded-lg top-0 left-40 absolute object-cover transition-opacity duration-300   ${
                  isHover === index ? "" : "opacity-0"
                }`}
                ref={(el) => {
                  imgRef.current[index] = el;
                }}
              />
            </div>
            <div className='text-white font-medium text-xl overflow-hidden flex items-center  w-2/3'>
              {item.info}
            </div>
            <div className='tech-used text-sm  text-white uppercase opacity-50'>
              {item.tech}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;

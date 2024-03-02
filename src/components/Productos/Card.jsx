import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import './card.css'
const CardProduct = ({imgUrl}) => {
  return (
    <div className="grid-container">
      <TiltCard url={imgUrl}/>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({url}) => {

const ref = useRef(null);

const [rotateX, setRotateX] = useState(0);
const [rotateY, setRotateY] = useState(0);

const handleMouseMove = (e) => {
  if (!ref.current) return;

  const rect = ref.current.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
  const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

  const rY = mouseX / width - HALF_ROTATION_RANGE;
  const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

  setRotateX(rX);
  setRotateY(rY);
};

const handleMouseLeave = () => {
  if (!ref.current) return;
  setRotateX(0);
  setRotateY(0);
};

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="tilt-card"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${url})`
        }}
        className="card-content"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="card-text"
        >
        </p>
      </div>
    </motion.div>
  );
};

export default CardProduct;

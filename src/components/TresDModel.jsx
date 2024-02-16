import React from 'react'
import '@styles/TresD.css'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
const TresDModel = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  )
}

export default TresDModel
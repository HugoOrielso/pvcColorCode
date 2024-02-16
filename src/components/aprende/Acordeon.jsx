// import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import '@styles/acordeon.css'
// import { useWindowSize } from "./UseWindows";
// const VerticalAccordion = () => {
//   const [open, setOpen] = useState(items[0].id);

//   return (
//     <section className="p-4 bg-indigo-600">
//       <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
//         {items.map((item) => {
//           return (
//             <Panel
//               key={item.id}
//               open={open}
//               setOpen={setOpen}
//               id={item.id}
//               Icon={item.Icon}
//               title={item.title}
//               imgSrc={item.imgSrc}
//               description={item.description}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
//   const { width } = useWindowSize();
//   const isOpen = open === id;

//   return (
//     <>
//       <button
//         className="btn-uno"
//         onClick={() => setOpen(id)}
//       >
//         <span
//           style={{
//             writingMode: "vertical-lr",
//           }}
//           className="span-style lg-block"
//         >
//           {title}
//         </span>
//         <span className="block lg:hidden text-xl font-light">{title}</span>
//         <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
//           <Icon />
//         </div>
//         <span className="span-dos" />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             key={`panel-${id}`}
//             variants={width && width > 1024 ? panelVariants : panelVariantsSm}
//             initial="closed"
//             animate="open"
//             exit="closed"
//             style={{
//               backgroundImage: `url(${imgSrc})`,
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//             className="panel-style"
//           >
//             <motion.div
//               variants={descriptionVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="description-style"
//             >
//               <p>{description}</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default VerticalAccordion;

// const panelVariants = {
//   open: {
//     width: "100%",
//     height: "100%",
//   },
//   closed: {
//     width: "0%",
//     height: "100%",
//   },
// };

// const panelVariantsSm = {
//   open: {
//     width: "100%",
//     height: "200px",
//   },
//   closed: {
//     width: "100%",
//     height: "0px",
//   },
// };

// const descriptionVariants = {
//   open: {
//     opacity: 1,
//     y: "0%",
//     transition: {
//       delay: 0.125,
//     },
//   },
//   closed: { opacity: 0, y: "100%" },
// };

// const items = [
//   {
//     id: 1,
//     title: "Earn more",
//     Icon: FiDollarSign,
//     imgSrc:
//       "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
//   },
//   {
//     id: 2,
//     title: "Play more",
//     Icon: FiPlay,
//     imgSrc:
//       "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
//   },
//   {
//     id: 3,
//     title: "Keep track",
//     Icon: FiBell,
//     imgSrc:
//       "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
//   },
//   {
//     id: 4,
//     title: "Grow faster",
//     Icon: FiBarChart,
//     imgSrc:
//       "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
//   },
// ];

import React from 'react'

const Acordeon = () => {
  return (
    <section>
        <details name='info'>
            <summary>Aprende uno</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde odit eligendi aut incidunt ducimus! Tenetur aliquid itaque quisquam, consectetur reiciendis non placeat doloremque mollitia culpa animi tempore corporis cupiditate.</p>
        </details>
        <details name='info'>
            <summary>Aprende uno</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde odit eligendi aut incidunt ducimus! Tenetur aliquid itaque quisquam, consectetur reiciendis non placeat doloremque mollitia culpa animi tempore corporis cupiditate.</p>
        </details>
        <details name='info'>
            <summary>Aprende uno</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde odit eligendi aut incidunt ducimus! Tenetur aliquid itaque quisquam, consectetur reiciendis non placeat doloremque mollitia culpa animi tempore corporis cupiditate.</p>
        </details>

    </section>
  )
}

export default Acordeon
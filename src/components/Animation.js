import React from "react";
import { useState } from "react";
import { color, motion } from "framer-motion";
export default function Footer() {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <>
      {/* this is used to rotate box when we click on it */}
      <motion.div
        className="bg-red-500 w-[200px] h-[200px] m-32 opacity-5"
        animate={{
          x: isAnimating ? 1000 : 0,
          opacity: 0.1,
          duration: 2,
          rotate: isAnimating ? 360 : 0,
        }}
        transition={{
          type: "tween",
          duration: 2, //this for set  time for move for tweeen type
          /*  type:'spring',
                            stiffness:1000, //this is for spring time set
                            damoing:10 */
          scale: 2, //this will increase the size of box
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </>
  );
}

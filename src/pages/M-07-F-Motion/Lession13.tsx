import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Lession13 = () => {
  const [visible, setVisible] = useState(true);

  const box = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, y: 200, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center flex-col size-[400px] border border-[#3D0066]">
        <AnimatePresence>
          <motion.button
            onClick={() => setVisible((prev) => !prev)}
            className="btn-primary"
          >
            Toggle
          </motion.button>
          {visible && (
            <motion.div
              className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
              variants={box}
              initial="hidden"
              animate="visible"
              exit="exit"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Lession13;

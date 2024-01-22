import { motion } from "framer-motion";
import { useRef } from "react";
import Container from "../../components/ui/Container";

const parent = {
  hidden: { x: 0, y: 0 },
  visible: {
    x: 300,
    y: 200,
    transition: {
      ease: "linear",
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Lession1 = () => {
  const parentRef = useRef(null);

  return (
    <Container>
      <div
        ref={parentRef}
        className="flex justify-center items-center mt-20 size-[400px] border border-[#3D0066]"
      >
        <motion.div
          variants={parent}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          // whileTap="tap"
          drag
          // dragSnapToOrigin // to re return center
          dragElastic={false}
          // dragConstraints={{ left: -200, right: 200, top: 200, bottom: -200 }}
          dragConstraints={parentRef}
          whileDrag={{ scale: 1.1, boxShadow: "0px 10px 10px #000" }}
          whileTap="tap"
          onHoverStart={() => console.log("Hovered")}
          onHoverEnd={() => console.log("Hover Ended")}
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        ></motion.div>
      </div>
    </Container>
  );
};

export default Lession1;

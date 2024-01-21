import { motion } from "framer-motion";
import Container from "../../components/ui/Container";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const child = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1 },
};

const Lession1 = () => {
  return (
    <Container>
      <div className="flex justify-center items-center mt-40">
        <motion.div
          variants={parent}
          initial="hidden"
          animate="visible"
          transition={{
            ease: "easeInOut",
            duration: 1.5,
            delayChildren: 0.5, // it works for 1st child element.
            staggerChildren: 0.5, // coming children after 1 sec then 1 sec then 1
          }}
          className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        >
          <motion.div
            className="size-20 bg-cyan-400 rounded-sm"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-cyan-400 rounded-sm"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-cyan-400 rounded-sm"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-cyan-400 rounded-sm"
            variants={child}
          ></motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Lession1;

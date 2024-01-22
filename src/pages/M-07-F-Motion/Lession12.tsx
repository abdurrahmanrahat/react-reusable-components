import { motion, useScroll } from "framer-motion";

const Lession12 = () => {
  const { scrollY, scrollYProgress } = useScroll();

  //   useMotionValueEvent(scrollY, "change", (e) => {
  //     console.log(e); // we get how much pixel scroll down
  //   });
  //   useMotionValueEvent(scrollYProgress, "change", (e) => {
  //     console.log("progress", e);
  //   });

  return (
    <motion.div
      className="h-10 w-full fixed top-0 bg-green-600"
      style={{ scaleX: scrollYProgress }}
    >
      <h2>Progress</h2>
    </motion.div>
  );
};

export default Lession12;

import { motion, useMotionValue, useTransform } from "framer-motion";

const Lession11 = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 100], [1, 0]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center  size-[400px] border border-[#3D0066]">
        <motion.div
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          style={{ x, opacity }}
          drag="x"
        ></motion.div>
      </div>
    </div>
  );
};

export default Lession11;

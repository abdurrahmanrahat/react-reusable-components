import { motion, useDragControls } from "framer-motion";

const Lession10 = () => {
  const controls = useDragControls();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center flex-col size-[400px] border border-[#3D0066]">
        <div
          onPointerDown={(e) => controls.start(e)}
          className="w-52 h-10 bg-green-600 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        ></div>

        <motion.div
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          drag="x"
          dragControls={controls}
        ></motion.div>
      </div>
    </div>
  );
};

export default Lession10;

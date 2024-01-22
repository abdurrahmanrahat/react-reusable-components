import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Lession8 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isView = useInView(ref, { once: true }); // just watching whether it comes in our viewport or not.

  console.log(isView);

  //   useEffect(() => {
  //     inView(ref.current as ElementOrSelector, (info) => {
  //       console.log("in view", info);
  //     });
  //   }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center  size-[400px] border border-[#3D0066]">
        <motion.div
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          ref={ref}
          animate={
            isView
              ? { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } }
              : { opacity: 0, x: -500 }
          }
        ></motion.div>
      </div>
    </div>
  );
};

export default Lession8;

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const Lession6 = () => {
  const controls = useAnimationControls();
  //   const [toggle, setToggle] = useState(false);

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
  }, []);
  // আমরা custom ইউজ করে value দিলে সেইটা callback এ পেয়ে যাবো, তারপর সেইটা ধরে
  // something অ্যানিমেশন করতে পারি।

  //   const handleToggle = () => {
  //     setToggle(!toggle);

  //     if (toggle) {
  //       controls.start({ x: 200 });
  //     } else {
  //       controls.start({ x: -200 });
  //     }
  //   };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        onMouseEnter={() => controls.stop()}
        className="flex flex-col justify-center items-center  size-[500px] border border-[#3D0066]"
      >
        {/* <button onClick={handleToggle} className="btn-primary">
          {toggle ? "Forward" : "Backward"}
        </button> */}

        <motion.div
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          animate={controls}
          custom={1}
        ></motion.div>

        <motion.div
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          animate={controls}
          custom={2}
        ></motion.div>

        <motion.div
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          animate={controls}
          custom={3}
        ></motion.div>
      </div>
    </div>
  );
};

export default Lession6;

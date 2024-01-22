import { motion, useCycle } from "framer-motion";

const Lession7 = () => {
  const boxAnimations = [
    { x: 0, y: 0 },
    { x: 100, y: 100 },
    { x: -100, y: -100 },
    { x: 200, y: 200 },
  ];
  const [animate, cycleFun] = useCycle(...boxAnimations);

  //   const [x, cycleFun] = useCycle(0, 100, -100);
  /* এখানে initial value 0 হিসেবে ধরবে তারপর cycleFun টা call হলে next ভ্যালু টা পাবে, তারপর আবার ক্লিক করলে নেক্সট ভ্যালু টা পাবে। এভাবে ভ্যালু শেষ হলে আবারfirstটাপাবে। */

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center  size-[400px] border border-[#3D0066]">
        <motion.div
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          animate={animate}
          onTap={() => cycleFun()}
        ></motion.div>
      </div>
    </div>
  );
};

export default Lession7;

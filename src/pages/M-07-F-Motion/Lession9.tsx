import { useAnimate } from "framer-motion";

const Lession9 = () => {
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    animate(scope.current, { rotate: 45 });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center  size-[400px] border border-[#3D0066]">
        <div
          className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          ref={scope}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  );
};

export default Lession9;

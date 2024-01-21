import { motion } from "framer-motion";
import Container from "../../components/ui/Container";

const initial = { rotate: 0 };
const animate = { rotate: 360 };

const Lession1 = () => {
  return (
    <Container>
      <div className="flex justify-center items-center mt-40">
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ type: "spring", duration: 2 }}
          className="size-64 bg-indigo-500 rounded-lg"
        ></motion.div>
      </div>
    </Container>
  );
};

export default Lession1;

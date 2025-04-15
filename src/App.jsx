import ToggleSwitch from "./components/ToggleSwitch";
import { motion } from "framer-motion";

const text = "AnimatedSubscriptionToggle";
const App = () => {
  return (
    <div className="g1">
      <div className="font-extrabold text-2xl sm:text-5xl p-4 text-center cursor-pointer text-[#915781]">
        {text.split("").map((l, i) => (
          <motion.span
            initial={{ y: 0, opacity: 1 }}
            whileHover={{ y: -24, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            {l}
            <motion.span
              className="absolute"
              initial={{ y: 24, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              $
            </motion.span>
          </motion.span>
        ))}
      </div>
      <ToggleSwitch />
    </div>
  );
};

export default App;

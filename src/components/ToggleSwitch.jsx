import { AnimatePresence, motion } from "framer-motion";
import Pricingcards from "./Pricingcards";
import { useState } from "react";

const ToggleSwitch = () => {
  const [selected, setSelected] = useState("Free");
  const [premiumOpen, setPremiumOpen] = useState(false);

  const handleToggle = (value) => {
    if (value === "Premium") {
      setPremiumOpen(true);
      setSelected("Monthly");
    } else if (value === "Free") {
      setPremiumOpen(false);
      setSelected("Free");
    } else {
      setSelected(value);
    }
  };

  return (
    <div className="flex flex-col items-center mt-16 min-h-screen px-4">
      <div className="relative flex items-center justify-between w-full max-w-md h-16 p-1 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/12 hover:ring-[#fc75b2]/5 bg-wl1 overflow-hidden">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="absolute top-1 bottom-1 bg-pink3 rounded-full z-0"
          style={{
            width: "50%",
            left: premiumOpen ? "49%" : "1%",
          }}
        />
        <div className="relative z-10 flex items-center justify-between w-full text-sm sm:text-lg font-semibold">
          <button
            onClick={() => handleToggle("Free")}
            className={`w-1/2 h-full rounded-full flex items-center justify-center transition-colors duration-300 ${
              selected === "Free" ? "text-wl1" : "text-bl1"
            }`}
          >
            Free
          </button>
          {!premiumOpen ? (
            <button
              onClick={() => handleToggle("Premium")}
              className={`w-1/2 h-full rounded-full flex flex-col items-center justify-center transition-colors duration-300 ${
                selected !== "Free" ? "text-wl1" : "text-bl1"
              }`}
            >
              <span className="text-sm sm:text-lg font-bold">Premium</span>
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <span className="text-sm">Monthly • Annual</span>
                </motion.div>
              </AnimatePresence>
            </button>
          ) : (
            <div className="relative flex items-center justify-center w-1/2 h-14 rounded-full">
              <motion.div
                layout
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className="absolute top-1 bottom-1 bg-wl1 rounded-full z-0"
                style={{
                  width: "50%",
                  left: selected === "Monthly" ? "0%" : "48%",
                }}
              />
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                onClick={() => handleToggle("Monthly")}
                className={`relative z-10 w-1/2 h-full rounded-full flex items-center justify-center transition-colors duration-300 ${
                  selected === "Monthly" ? "text-bl1" : "text-wl1"
                }`}
              >
                Monthly
              </motion.button>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                onClick={() => handleToggle("Annual")}
                className={`relative z-10 w-1/2 rounded-full h-full flex items-center justify-center transition-colors duration-300 ${
                  selected === "Annual" ? "text-bl1" : "text-wl1"
                }`}
              >
                Annual
              </motion.button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          {(selected === "Free" ||
            selected === "Monthly" ||
            selected === "Annual") && (
            <Pricingcards plan={selected} key={selected} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ToggleSwitch;

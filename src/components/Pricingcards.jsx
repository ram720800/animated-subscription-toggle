import { motion } from "framer-motion";

const Pricingcards = ({ plan }) => {
  const content = {
    Free: {
      title: "Free Plan",
      description: "Basic features to get started.",
    },
    Monthly: {
      title: "Monthly Plan",
      description: "$9.99 / month with extra perks.",
    },
    Annual: {
      title: "Annual Plan",
      description: "$99 / year with big savings.",
    },
  };
  const { title, description } = content[plan];
  return (
    <motion.div
      key={plan}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
      transition={{ duaration: 0.5 }}
      className="bg-wl1 rounded-xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 g2"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-pink3 text-start font-bold mb-2 text-2xl">{title}</h2>
        {plan === "Annual" && (
          <span className="text-sm text-green-600 bg-green-200 rounded-full py-1 px-3 font-semibold -mt-4 border border-green-400 shadow-md">Popular</span>
        )}
      </div>

          <p className="text-bl3 text-start font-semibold text-lg">{description}</p>
          <button className="mt-4 px-4 text-center font-extrabold text-lg bg-pink1 hover:bg-pink border-2 rounded-full border-pink3 py-2">Subscribe now</button>
    </motion.div>
  );
};

export default Pricingcards;

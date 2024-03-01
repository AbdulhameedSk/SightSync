import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="homepage-container flex flex-col justify-center items-center h-screen bg-gray-200">
      <p className="text-lg mb-8 text-gray-500">Connecting People across World</p>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg space-y-4 w-96"
      >
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 w-full text-lg"
        />
        <input
          type="text"
          placeholder="CODE"
          className="border border-gray-300 rounded-md p-2 w-full text-lg"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-center text-lg">
          Enter Room
        </button>
      </motion.div>
    </div>
  );
};

export default Homepage;
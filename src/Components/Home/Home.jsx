import { motion } from "framer-motion";

const Home = () => {
 return (
  <div className="h-screen bg-black text-white">
   <motion.div
    className="h-[57rem] w-[60em] m-auto relative rounded-full flex items-center justify-center border shadow-3xl shadow-white bg-dark "
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
     duration: 2,
     delay: 1,
    }}
   >
    <p className="text-xl">Hello World</p>
   </motion.div>
  </div>
 );
};

export default Home;

import { motion } from "framer-motion";

function Transition(OgComponent) {
  return function wrapper(props) { 
    return (
      <>
        <OgComponent {...props} />
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-[#292929] origin-bottom z-50 flex items-center justify-center"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
        </motion.div>
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-[#292929] origin-top z-50 flex items-center justify-center"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
        </motion.div>
      </>
    );
  };
}

export default Transition;
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";

//import styles from './Transition.module.scss'

const Transition = ({children, location}) => {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
    >
      <motion.div
        key={location}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0 },
          enter: { opacity: 1 },
          exit: { opacity: 0}
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition
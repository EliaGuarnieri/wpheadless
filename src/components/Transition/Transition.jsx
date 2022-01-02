import { motion } from "framer-motion";

//import styles from './Transition.module.scss'

const Transition = ({children, location}) => {
  return (
    <motion.div
      key={location}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Transition
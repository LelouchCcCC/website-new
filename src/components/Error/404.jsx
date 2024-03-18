import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
const Error = () => {
  return (
    <motion.div
      variants={fadeIn("down", "tween", 1.5, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`primaryText paddings innerWidth flexCenter`}
    >
      Nothing in this page
    </motion.div>
  );
};

export default Error
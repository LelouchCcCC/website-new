import React from "react";
import { motion } from "framer-motion";
import css from "./Blog.module.scss";
import { fadeIn } from "../../utils/motion";
const Blog= () => {
  return (
    <motion.div
      variants={fadeIn("down", "tween", 1.5, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`primaryText paddings innerWidth flexCenter ${css.container}`}
    >
      Coming Soon
    </motion.div>
  );
};

export default Blog;

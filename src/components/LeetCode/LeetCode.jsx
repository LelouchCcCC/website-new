import React from "react";
import { motion } from "framer-motion";
import css from "./LeetCode.module.scss";
import { fadeIn } from "../../utils/motion";
const LeetCode = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.bigContainer}`}>
        <div className={`yPaddings flexCenter ${css.leftContainer}`}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>

      </div>
    </div>
  );
};

export default LeetCode;

import React from "react";
import { motion } from "framer-motion";
import css from "./LeetCode.module.scss";
import TimeBar from "./TimeBar";
import { fadeIn } from "../../utils/motion";
import LC from "../../utils/mockLeetcode";
import { Outlet } from "react-router-dom";
const LeetCode = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.bigContainer}`}>
        <div className={`paddings flexCenter ${css.leftContainer}`}>
          {LC.map((piece, i) => {
            return <TimeBar key={piece.id} record={piece} />;
          })}
        </div>
        <div className={`${css.rightContainer}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LeetCode;

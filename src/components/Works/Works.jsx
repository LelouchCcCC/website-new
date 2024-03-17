import React from "react";
import { motion } from "framer-motion";
import css from "./Works.module.scss";
import { workExp } from "../../utils/data";
import {
  staggerChildren,
  textVariant2,
  zoomIn,
  fadeIn,
} from "../../utils/motion";
import generateLightColor from "../../utils/randomColor";
const Works = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <span className="primaryText yPaddings">My Life</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div
                variants={textVariant2}
                className={`flexCenter ${css.exp}`}
                key={i}
              >
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                {/* <motion.div
                  variants={zoomIn(1, 1)}
                  className={css.circle}
                  style={{ background: generateLightColor() }}
                ></motion.div> */}
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;

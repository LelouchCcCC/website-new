import React, { useState } from "react";
import css from "./Experties.module.scss";
import { projectExperience, skills } from "../../utils/data";
import { motion } from "framer-motion";
import generateLightColor from "../../utils/randomColor";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Experties = () => {
  const [skillsHighLighted, setSkillsHighLighted] = useState([]);
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      className={css.wrapper}
    >
      <div className={`flexCenter ${css.bigContainer}`}>
        <motion.span
          variants={fadeIn("down", "tween", 0, 1)}
          className="primaryText yPaddings"
        >
          My projects
        </motion.span>
        <div className={`paddings flexCenter innerWidth ${css.container}`}>
          <div className={css.leftSide}>
            {projectExperience.map((exp, i) => {
              return (
                <a href={exp.link}>
                  <motion.div
                    variants={fadeIn("right", "tween", (i + 1) * 0.2, 0.4)}
                    className={css.exp}
                    key={i}
                    onMouseEnter={() => {
                      setSkillsHighLighted(exp.tech);
                    }}
                    onMouseLeave={() => setSkillsHighLighted([])}
                  >
                    <div className="flexCenter" style={{ background: exp.bg }}>
                      <exp.icon size={25} color="white" />
                    </div>
                    <div>
                      <span>{exp.name.replace("_",' ')}</span>
                      <span className="secondaryText">{exp.description}</span>
                    </div>
                  </motion.div>
                </a>
              );
            })}
          </div>

          <div className={css.rightSide}>
            {skills.map((kv, i) => {
              return (
                <motion.div
                  variants={fadeIn("left", "tween", (i + 1) * 0.08, 0.5)}
                >
                  <motion.div
                    animate={
                      skillsHighLighted.includes(kv)
                        ? {
                            y: ["0%", "15%", "-5%"],
                            transition: {
                              duration: 1,
                              ease: "easeInOut",
                              repeat: Infinity,
                            },
                          }
                        : ""
                    }
                    className={css.skill}
                    key={i}
                    style={{ backgroundColor: generateLightColor() }}
                  >
                    <span
                      className={`secondaryText ${css.sizeChange}`}
                      style={{
                        color: skillsHighLighted.includes(kv)
                          ? "#b4534b"
                          : "#6950a1",
                      }}
                    >
                      {kv}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experties;

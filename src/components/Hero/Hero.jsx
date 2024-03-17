import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
const Hero = () => {
  const currentHour = new Date().getHours();
  const greetings =
    currentHour < 6
      ? "night"
      : currentHour < 12
      ? "morning"
      : currentHour < 18
      ? "afternoon"
      : "evening";
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upper}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Good {greetings}! <br /> I'm Jax
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="secondaryText"
          >
            I Define Myself <br /> Infinite Exploration
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={css.person}
        >
          <motion.img
            className={css.heroImg}
            variants={fadeIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        <a href="mailto:zhang.vi.yuhan@gmail.com" className={css.email}>
          zhang.vi.yuhan@gmail.com
        </a>

        <div className={css.lower}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">5</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Learning</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>Actively seeking</span>
            <span>full-stack intern</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

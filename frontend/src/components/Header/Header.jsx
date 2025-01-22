import React, { useState } from "react";
import css from "./Header.module.scss";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import {BiMenuAltRight} from 'react-icons/bi'
import useHeaderShadow from '../../hooks/useHeaderShadow'

const Header = () => {
  const [menuOpended, setMenuOpened] = useState(false);
const headerShadow = useHeaderShadow()
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{boxShadow: headerShadow}}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Jax Zhang</div>

        <ul className={`flexCenter ${css.menu}`} style={getMenuStyles(menuOpended)}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="blog">Daily Blog</a>
          </li>
          <li>
            <a href="leetcode">Leetcode Solution</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>(617)936-9736</p>
            <FaPhoneSquareAlt size={"40px"} />
          </li>
        </ul>

{/* for sm and md */}
        <div
          className={css.menuIcon}
          onClick={() => {setMenuOpened(prev=>!prev), console.log("click1")}}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

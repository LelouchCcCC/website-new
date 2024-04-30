import React from "react";
import css from "./TimeBar.module.scss"
import { useNavigate } from 'react-router-dom';

const TimeBar = ({record}) => {
    console.log(record);
    const navigate = useNavigate();

    const toSubLeetCode = () =>{
        navigate(`/leetcode/${record.id}`)
    }

    return (
        <div className={`${css.container}`} onClick={toSubLeetCode}>
            <div className={`${css.leftSide}  ${record.diff=='hard' ? css.hard:(record.diff=='medium'?css.medium:css.easy)} `}>{record.number}</div>
            <div className={`${css.rightSide}`}>{record.title}</div>
        </div>
    )
}

export default TimeBar
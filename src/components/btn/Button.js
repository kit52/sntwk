import React from "react";
import s from "./Button.module.css"
const Button = (props) => {
    return (
        <button className={s.btn + " " + props.class} onClick={props.func} disabled={props.disabled}>{props.text}</button>
    )
}
export default Button;
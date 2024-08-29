import React from "react";
import "./Greetings.css";

interface Props {
    name: string;
    color: string;
}
export const Greetings = (props: Props) => {
    return (
        <>
            <div className={`${props.color}-text`}>Hi {props.name}</div>
        </>
    );
};

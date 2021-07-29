import React, { useEffect, useState } from "react";
import "./style.css";

const dateFormat = (date)=>date.toLocaleTimeString(undefined, {
        month: "long",
        weekday: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    
const Clock = () => {
    const [date, setDate] = useState(new Date());
    

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <p className="clock">
            Dzisiaj jest {dateFormat(date)}
        </p>
    )
}
export default Clock;
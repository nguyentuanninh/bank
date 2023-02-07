import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
    return (
        <div
            className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}
        >
            <div
                className={`${styles.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full`}
            >
                <div className={`${styles.flexCenter} flex-row`}>
                    <p className="text-white font-poppins font-medium text-[18px] leading-[23px] mr-2">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img
                        src={arrowUp}
                        alt="arrow"
                        className="w-[32px] h-[32px]"
                    />
                </div>
                <p className="text-white font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    );
};

export default GetStarted;

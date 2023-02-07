import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
    return (
        <div
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
            sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
            <div className="flex flex-1 flex-col">
                <h2 className={styles.heading2}>Let’s try our service now!</h2>
                <p className={`${styles.paragraph} max-w-[450px]`}>
                    Everything you need to accept card payments and grow your
                    business anywhere on the planet.
                </p>
            </div>
            <div className={`${styles.flexCenter} ml-0 sm:ml-10 mt-10 sm:mt-0`}>
                <Button></Button>
            </div>
        </div>
    );
};

export default CTA;

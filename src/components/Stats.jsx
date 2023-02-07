import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
    return (
        <section
            className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
        >
            {stats.map(stats => (
                <div
                    key={stats.id}
                    className="flex flex-1 justify-start items-center flex-row mb-3"
                >
                    <h4
                        className="font-poppins font-semibold text-[30px] 
                                  sm:text-[40px] xs:leading-[53px] leading-[43px] text-white"
                    >
                        {stats.value}
                    </h4>
                    <p
                        className="font-poppins font-semibold text-[15x] 
                                  sm:text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3"
                    >
                        {stats.title}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default Stats;

import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client, index) => (
                    <div
                        className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
                        key={client.id}
                    >
                        <img
                            src={client.logo}
                            alt={client.id}
                            className={`w-[100px] sm:w-[192px] h-[60px] object-contain
                       `}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;

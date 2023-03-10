import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
    <div
        className="flex justify-between flex-col px-10 py-12 rounded-[20px]
    max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    >
        <img
            src={quotes}
            alt="quotes"
            className="w-[42px] h-[27px] object-contain"
        />
        <p className="font-poppins font-normal text-[18px] text-white leading-[32px] my-10">
            {content}
        </p>
        <div className="flex flex-row justify-start items-center">
            <img src={img} alt={name} className="w-[48px] h-[48px]" />
            <div className="flex flex-col ml-4">
                <p className="font-poppins font-normal text-[18px] text-white leading-[32px]">
                    {name}
                </p>
                <p className="text-white font-poppins font-normal text-[16px] leading-[24px]">
                    {title}
                </p>
            </div>
        </div>
    </div>
);

export default FeedbackCard;

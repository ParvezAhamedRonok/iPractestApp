"use client";
import React from 'react'
import { PiCrownSimpleThin } from "react-icons/pi";
import { useStateContext } from "@/contexts/ContextProvider";
export default function Explain_Btn() {
    const { userPaymentStatusCheck, setExplainRLQuestions } = useStateContext();

    return (
        <div className='bg-blue-600 text-white p-1 text-[10px] rounded-full cursor-pointer flex items-center gap-1 hover:bg-blue-700 transition-all'
            onClick={() => {   userPaymentStatusCheck ? setExplainRLQuestions(true) : window.location.href = "/Payment-Pages/Billing-Page"; }}
        >
            {/* Crown Icon */}
            {
                !userPaymentStatusCheck && <PiCrownSimpleThin
                    className='text-white text-xl p-1 font-extrabold rounded-full text-center 
                      bg-gradient-to-r from-yellow-300 via-yellow-400 to-red-500 shadow-md'
                />
            }

            {/* Button Text */}
            <span>
                  Explain
                </span>
        </div>
    )
}

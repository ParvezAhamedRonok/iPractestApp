"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useStateContext } from "@/contexts/ContextProvider";
import {
    TEACHER_PORTAL_GET_REQUEST_FOR_COLLECT_ALL_bATCH_DATA_FOR_SHOWING_TO_USERS,
} from "@assets/URL's/AllUrl";

export default function ExpertSpokenClass() {
    const { userPaymentStatusCheck } = useStateContext();
    const [countryName, setuserCountry] = useState("");
    const [ClassData, setClassData] = useState(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setuserCountry(localStorage.getItem("setCountry"));

        axios
            .get(TEACHER_PORTAL_GET_REQUEST_FOR_COLLECT_ALL_bATCH_DATA_FOR_SHOWING_TO_USERS)
            .then((response) => {
                const zoomLinksArray = response.data.data;
                const expertClass = zoomLinksArray.find(item => item.CourseName.includes("ExpertSpokenClass"));
                if (expertClass) setClassData(expertClass);
            })
            .catch((e) => console.error("Error fetching zoom links:", e));
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(ClassData.ZoomLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div className="flex bg-gradient-to-br to-purple-300 p-2 mb-3 md:mb-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                    }}
                    className="bg-white shadow-2xl rounded-2xl p-4 w-full overflow-hidden"
                >
                    <h1 className="text-2xl font-extrabold text-indigo-400 text-center mb-4">
                        Your Expert Spoken Class Info
                    </h1>

                    {ClassData ? (
                        <div className="text-center">
                            {ClassData.BatchName ? (
                                <>
                                    <p className="text-lg font-semibold text-gray-700">
                                        {ClassData.BatchName}
                                    </p>
                                    {ClassData.ZoomLink ? (
                                        <div className="mt-3">
                                            <div className="grid md:flex items-center justify-center gap-2 bg-gray-100 p-3 rounded-md border">
                                                <span className="text-blue-600 break-all">{ClassData.ZoomLink}</span>
                                                <button
                                                    onClick={handleCopy}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                                >
                                                    {copied ? "Copied!" : "Copy"}
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-red-500 mt-2">
                                            Zoom link will be available 1 hour / 30 minutes before the class.
                                        </p>
                                    )}
                                </>
                            ) : (
                                <p className="text-red-500">
                                    We will inform you about your live spoken class soon. Please wait for updates.
                                </p>
                            )}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center">Loading...</p>
                    )}
                </motion.div>
            </div>
        </>
    );
}

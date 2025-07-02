"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TEACHER_PORTAL_GET_A_SINGLE_USER_FULL_COURSE_PAID_DATA_FROM_USERS_TABLE_TO_SHOW_UI, TEACHER_PORTAL_GET_REQUEST_FOR_COLLECT_ALL_bATCH_DATA_FOR_SHOWING_TO_USERS } from "@assets/URL's/AllUrl";

export default function ZoomLink() {
    const [countryName, setuserCountry] = useState("");

    const [zoomLink, setZoomLink] = useState(""); // State to store the zoom link
    const [copied, setCopied] = useState(false); // State to handle copy alert
    const [openPopUp, setOpenPopup] = useState(false);
    const [sayStudent_when_they_get_link, setsayStudent_when_they_get_link] = useState("")



    useEffect(() => {
        setuserCountry(localStorage.getItem("setCountry"));
        // Fetch user data to get BatchName
        axios
            .get(
                TEACHER_PORTAL_GET_A_SINGLE_USER_FULL_COURSE_PAID_DATA_FROM_USERS_TABLE_TO_SHOW_UI +
                localStorage.getItem("userEmail"),
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("loginTOken")}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                // console.log(res.data.data)
                if (res.data.data) {
                    const main_BatchName = res.data.data.BatchName; // Extract BatchName
                    console.log(main_BatchName)
                    if (main_BatchName.includes("FreeUsers")) {
                        // Fetch zoom links
                        setOpenPopup(true)
                        axios
                            .get(
                                TEACHER_PORTAL_GET_REQUEST_FOR_COLLECT_ALL_bATCH_DATA_FOR_SHOWING_TO_USERS
                            )
                            .then((response) => {
                                const zoomLinksArray = response.data.data; // Array of zoom links
                                // console.log(zoomLinksArray);
                                // console.log(main_BatchName);
                                zoomLinksArray.map((items) => {
                                    if (main_BatchName.includes(items.CourseName)) {
                                        setZoomLink(items.ZoomLink);
                                        setsayStudent_when_they_get_link(items.BatchName)
                                    }
                                })

                            })
                            .catch((e) => console.error("Error fetching zoom links:", e));
                    } else {
                        console.error("BatchName is empty or invalid.");
                    }
                }
            })
            .catch((e) => console.error("Error fetching user data:", e));
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(zoomLink);
        setCopied(true); // Show the copied alert
        setTimeout(() => setCopied(false), 2000); // Hide alert after 2 seconds
    };

    return (
        <>
            {
                openPopUp && <div className="flex  bg-gradient-to-br to-purple-300 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            type: "spring",
                        }}
                        className="bg-white shadow-2xl rounded-2xl p-2 w-full overflow-hidden"
                    >
                        <h1 className="text-2xl font-extrabold text-indigo-400 text-center mb-6 p-1">
                            Live Class Link
                        </h1>
                        {zoomLink ? (
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-gray-100 rounded-lg w-full text-center mb-6 text-gray-800 font-medium">
                                    <a href={zoomLink} target="_blank" className="font-semibold underline text-blue-500">{zoomLink}</a>
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-all shadow-md"
                                >
                                    Copy Link
                                </button>
                                {copied && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 text-sm text-green-600 font-medium"
                                    >
                                        Link copied to clipboard!
                                    </motion.p>
                                )}
                            </div>
                        ) : (
                            <p className="text-center text-sm font-bold text-gray-500 pb-3">
                                The Live Class Link for your free class will be provided before <span className="font-bold text-purple-700 underline">{countryName != "Bangladesh" && "4 pm to 5 pm (GMT+6)"}</span> <span className="font-bold text-blue-700">({sayStudent_when_they_get_link})</span>
                            </p>
                        )}
                    </motion.div>
                </div>
            }
        </>

    )
}

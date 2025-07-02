"use client";
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Referrals() {
    const [userLoginEmail, setUserLoginEmail] = useState("");
    const [countryInfo, setCountryInfo] = useState("");
    const [referedUserList, setReferedUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch user data on mount
    useEffect(() => {
        setUserLoginEmail(localStorage.getItem('userEmail') || '');
        setCountryInfo(localStorage.getItem("setCountry") || '');
    }, []);

    // Fetch referred user data
    useEffect(() => {
        setIsLoading(true);
        Axios.get(`https://node-js-express-login-example.onrender.com/api/user/Get-Allusers-WhoAre-Refered-By-Someone/${userLoginEmail}`)
            .then((res) => {
                const storeUsers = res.data.data.map((user) => {
                    let amount = 0;
                    let Package = "X";

                    if (Object.values(user).includes('Starter')) {
                        amount = countryInfo === "Bangladesh" ? 10 : 0.1;
                        Package = "Starter";
                    } else if (Object.values(user).includes('Expert')) {
                        amount = countryInfo === "Bangladesh" ? 20 : 0.2;
                        Package = "Expert";
                    } else if (Object.values(user).includes('RegularCourse')) {
                        amount = countryInfo === "Bangladesh" ? 300 : 3;
                        Package = "Regular Course";
                    } else if (Object.values(user).includes('CrashCourse')) {
                        amount = countryInfo === "Bangladesh" ? 500 : 5;
                        Package = "Crash Course";
                    } else if (Object.values(user).includes('FoundationCourse')) {
                        amount = countryInfo === "Bangladesh" ? 800 : 8;
                        Package = "Foundation Course";
                    }

                    return {
                        userName: user.userName || 'N/A',
                        userEmail: user.userEmail || 'N/A',
                        userAmount: amount,
                        userPackage: Package
                    };
                });
                setReferedUserList(storeUsers);
            })
            .catch((err) => console.error('Error:', err))
            .finally(() => setIsLoading(false));
    }, [userLoginEmail]);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(`https://ipractest.com/?ID=${userLoginEmail}`);
        alert('Referral link copied to clipboard!');
    };

    return (
        <div className='w-full p-4 bg-transparent mt-4 h-[93vh] overflow-auto'>
            {/* Referral Link */}
            <h3 className='text-center mb-4 font-bold text-lg'>Your Referral Link</h3>
            <div className='flex justify-center mb-2'>
                <div className='flex justify-center w-full sm:w-[500px] overflow-auto p-2 bg-green-400 rounded font-bold text-center'>
                    <p className='text-white'>{`https://ipractest.com/?ID=${userLoginEmail}`}</p>
                    <button
                        className='rounded p-1 h-[33px] bg-white border border-gray-400 shadow-md ml-2'
                        onClick={copyToClipboard}
                    >
                        <FaCopy className='font-bold text-xl text-black' />
                    </button>
                </div>
            </div>

            {/* Popup Table (Below Referral Link) */}
            <div className="flex justify-center mb-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-2 rounded-md shadow-lg w-full sm:w-[500px] text-center"
                >
                    <h5 className="font-bold mb-2">
                        If any of your <span className='text-blue-700 text-base'>referred friends</span> buy a package, you will earn
                        <span className='text-green-600 text-base'> referral money</span>.
                    </h5>

                    <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-1 text-[13px]">Package</th>
                                <th className="border p-1 text-[13px]">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 1, name: "Starter", amount: 10 },
                                { id: 2, name: "Expert", amount: 20 },
                                { id: 3, name: "Regular Course", amount: 300 },
                                { id: 4, name: "Crash Course", amount: 500 },
                                { id: 5, name: "Foundation Course", amount: 800 }
                            ].map((pkg) => (
                                <tr key={pkg.id} className=''>
                                    <td className="border p-1 text-[12px]">{pkg.name}</td>
                                    <td className="border p-1 text-[12px] flex gap-1 justify-center">
                                        {countryInfo === "Bangladesh" ? pkg.amount : pkg.amount / 100}
                                        {countryInfo === "Bangladesh" ? "৳" : "$"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>

            {/* Loader */}
            {isLoading ? (
                <div className='text-center my-4'>
                    <p className='text-blue-500 font-bold'>Loading...</p>
                </div>
            ) : (
                <>
                    {referedUserList.length === 0 ? (
                        <div className='text-center my-4'>
                            <p className='text-red-500 font-bold'>No User available</p>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='overflow-x-auto'
                        >
                            <table id="userReferralTable" className='w-full border-collapse border border-gray-300 text-xs'>
                                <thead>
                                    <tr className='bg-gray-200 text-center'>
                                        <th className="border p-1">#</th>
                                        <th className='border p-1 text-[14px]'>Name</th>
                                        <th className='border p-1 text-[14px]'>Email</th>
                                        <th className='border p-1 text-[14px]'>Package</th>
                                        <th className='border p-1 text-[14px]'>
                                            Amount <span className='text-blue-600'>({countryInfo === "Bangladesh" ? "৳" : "$"})</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referedUserList.map((user, index) => (
                                        <tr key={index} className='text-center hover:bg-gray-100'>
                                            <td className="border p-1">{index + 1}</td>
                                            <td className='border p-1 text-[14px]'>{user.userName}</td>
                                            <td className='border p-1 text-[14px]'>{user.userEmail}</td>
                                            <td className='border p-1 text-[14px]'>{user.userPackage}</td>
                                            <td className='border p-1 text-[14px]'>{user.userAmount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </motion.div>
                    )}
                </>
            )}
        </div>
    );
}

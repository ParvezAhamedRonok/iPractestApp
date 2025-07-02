import React from 'react';
import CEO_Sir from '@assets/images/Mans/ceo.jpg';
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image';
import { SiWhatsapp } from "react-icons/si";

function PersonalMentor({ setOpenMentorPopUp }) {

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-transparent z-[1000000]'>
            {/* Backdrop with fade-in animation */}
            <div className="min-h-screen py-3 sm:px-6 lg:px-8 px-6 bg-black opacity-50 fixed top-0 left-0 right-0 bottom-0 z-10 transition-opacity duration-300"></div>


            {/* Pop-up container */}
            <div className="sm:mx-auto sm:w-full sm:max-w-md pt-[40px] z-20 relative">

                <div className="mt-[40px] bg-white py-10 px-4 shadow-lg sm:rounded-lg sm:px-10 relative transform transition-all duration-500 ease-in-out scale-90 hover:scale-100">
                    {/* Title */}
                    <div className='text-[16px] mt-3 text-purple-500 translate-y-[-20px] font-bold mb-4 text-start'>
                        Your Personal Mentor
                    </div>
                    {/* Close Button */}
                    <div className="absolute top-4 text-center font-bold right-6 w-[35px] h-[36px] rounded-[50%] pt-2 flex justify-center items-center shadow-lg cursor-pointer hover:border-1 hover:border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => { setOpenMentorPopUp(false) }}
                    >
                        <span className="text-lg text-black font-semibold">X</span>
                    </div>



                    {/* Mentor Details Section */}
                    <div className='m-auto grid gap-4 text-center'>
                        {/* Mentor Image */}
                        <div className="relative mx-auto">
                            <Image
                                src={CEO_Sir}
                                alt="CEO Picture"
                                className="m-auto w-[150px] h-[150px] rounded-full border-4 border-purple-500 shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
                            />
                        </div>

                        {/* Social Links */}
                        <div className='mt-6 grid gap-4 justify-center items-center'>
                            {/* Facebook Link */}
                            <div className='flex justify-center items-center gap-2'>
                                <FaFacebook className='p-2 bg-purple-600 text-white text-3xl rounded-full shadow-md transform hover:scale-110 transition-all duration-300' />
                                <a
                                    href="https://www.facebook.com/saud.arian"
                                    className='text-lg text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300'>
                                    Alam Al Saud
                                </a>
                            </div>

                            {/* WhatsApp Link */}
                            <div className='flex justify-center items-center gap-2'>
                                <SiWhatsapp className='p-2 bg-purple-600 text-white text-3xl rounded-full shadow-md transform hover:scale-110 transition-all duration-300' />
                                <span className='text-lg text-gray-700 font-semibold'>+49 162 3951485</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalMentor;

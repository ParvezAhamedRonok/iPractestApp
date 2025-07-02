"use client";
import React, { useState } from "react";
import logo from "@assets/images/Practestlogo.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../TestAllStyles/Header.css";
// Icons
import { 
  BsArrowUp, BsArrowDown, BsChevronUp, BsFillExclamationTriangleFill, 
  BsCalendar3, BsFillCheckSquareFill, BsFillCloudHaze2Fill, BsShare 
} from "react-icons/bs";
import { AiOutlineDown, AiOutlineEye } from "react-icons/ai";
import { FaTextWidth, FaDownload, FaQuestionCircle } from "react-icons/fa";
import { MdSettingsVoice } from "react-icons/md";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";

function Header({ handleIncressFontSize, handleDecressFontSize }) {
    const history = useRouter();
    const [toggleTestInfo, setToggleTestInfo] = useState(false);

    const backtoHomePage = () => {
        history.push("/");
    };

    return (
        <section className='HeaderSection'>
            <div className="second_row">
                <div className="icons-manu">
                    <ul className='icons'>
                        <li className='icon'><BsShare /></li>
                        <li className='icon'><BsFillExclamationTriangleFill /></li>
                        <li className='icon flex'>
                            <BsArrowUp onClick={handleIncressFontSize} />
                            <FaTextWidth />
                            <BsArrowDown onClick={handleDecressFontSize} />
                        </li>
                        <li className='icon'><FaDownload /></li>
                        <li className='icon'><FaQuestionCircle /></li>
                        <li className='icon'><BsFillCloudHaze2Fill /></li>
                        <li className='icon'><TbArrowBigLeftLinesFilled /></li>
                    </ul>
                </div>

                <div onClick={backtoHomePage} className="w-[90px] h-[45px] cursor-pointer">
                    <Image className="w-[90px] mt-1 h-[40px] sm:h-[45px]" src={logo} alt="back to home page" />
                </div>
            </div>

            <div className="showIcons">
                <ul className='icons'>
                    <Image className="w-[60px] " src={logo} alt="back to home page" />
                    <li className='icon'><BsFillExclamationTriangleFill /></li>
                    <li className='flex'>
                        <BsArrowUp onClick={handleIncressFontSize} />
                        <FaTextWidth />
                        <BsArrowDown onClick={handleDecressFontSize} />
                    </li>
                    <li className='icon'><FaDownload /></li>
                    <li className='icon'><FaQuestionCircle /></li>
                    <li className='icon'><BsFillCloudHaze2Fill /></li>
                    <li className='icon'><TbArrowBigLeftLinesFilled /></li>
                </ul>
            </div>
        </section>
    );
};

export default Header;

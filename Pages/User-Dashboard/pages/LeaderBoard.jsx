"use client"
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { IoMdBook } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import "../Styles/Leader-board.css";
import {
  WRITING_GET__ALL_USER__DATA_FORM_DATABASE,
  READING_GET__ALL_USER__DATA_FORM_DATABASE,
  LISTENING_GET__ALL_USER__DATA_FORM_DATABASE
} from "@assets/URL's/AllUrl";

function LeaderBoard() {
  const [userName, setUserName] = useState("");
  const [AllReadingScores, setAllReadingScores] = useState([]);
  const [AllWritingScores, setAllWritingScores] = useState([]);
  const [AllListeningScores, setAllListeningScores] = useState([]);
  const [showModuleScores, setShowModuleScores] = useState("Reading");

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);

  useEffect(() => {
    const fetchData = (url, setScores) => {
      Axios({
        method: "get",
        url: url + localStorage.getItem('userEmail'),
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          const mainData = res.data.data;
          filterScores(mainData, setScores);
        })
        .catch((e) => console.log(e));
    };

    fetchData(READING_GET__ALL_USER__DATA_FORM_DATABASE, setAllReadingScores);
    fetchData(WRITING_GET__ALL_USER__DATA_FORM_DATABASE, setAllWritingScores);
    fetchData(LISTENING_GET__ALL_USER__DATA_FORM_DATABASE, setAllListeningScores);
  }, []);

  const filterScores = (mainData, setScores) => {
    let userDataEmail = [...mainData.reduce((map, obj) => map.set(obj.userEmail, obj), new Map()).values()];
    let userScores = userDataEmail.map((user) =>
      mainData.filter((item) => item.userEmail === user.userEmail)
    );

    let formattedScores = userScores.map((userArray) => {
      return userArray.reduce((acc, current) => {
        return {
          username: acc.username,
          userEmail: acc.userEmail,
          ieltsRate: Math.round(parseFloat(acc.ieltsRate || 0) + parseFloat(current.ieltsRate || 0))
        };
      });
    });

    let sortedScores = formattedScores
      .filter((item) => item.ieltsRate >= 1)
      .sort((a, b) => b.ieltsRate - a.ieltsRate);

    setScores(sortedScores);
  };

  return (
    <div className='w-full p-2 bg-transparent mt-[28px] sm:mt-[0px]'>
      <div className='w-full sm:w-[400px] ml-1 sm:ml-4 bg-white rounded-[10px] flex justify-center '>
        <div className='w-auto flex flex-wrap gap-3'>
          {["Reading", "Writing", "Listening"].map((module) => (
            <div
              key={module}
              className={`p-2 h-[54px] w-[80px] rounded-[10px] grid justify-center align-middle cursor-pointer ${showModuleScores === module ? "bg-sky-200" : "bg-white"}`}
              onClick={() => setShowModuleScores(module)}
            >
              <div>
                <div className='text-xl w-full text-center font-bold mb-1'>
                  {module === "Reading" ? <IoMdBook className='text-xl w-full text-center font-bold' /> : module === "Writing" ? <TfiWrite className='text-xl w-full text-center font-bold'   /> : <FaAssistiveListeningSystems className='text-xl w-full text-center font-bold'  />}
                </div>
                <div className='w-full text-center text-[12px] font-bold'>{module}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full p-2 min-h-[420px] flex gap-2 max-h-auto bg-white border-2 border-gray-300 shadow-2xl rounded'>
        {
          ["Reading", "Writing", "Listening"].map((module) => (
            showModuleScores === module &&
            <div key={module} className='flex w-full justify-start align-middle p-3'>
              <div id='theElementId' className='w-full h-[100vh] sm:h-[420px] overflow-auto rounded'>
                {!{ Reading: AllReadingScores, Writing: AllWritingScores, Listening: AllListeningScores }[`${module}`][0] && (
                  <div className='w-full h-[430px] flex justify-center align-middle'>
                    <div className="m-auto inline-block h-[100px] w-[100px] animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_2.5s_linear_infinite]" role="status">
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                  </div>
                )}
                { { Reading: AllReadingScores, Writing: AllWritingScores, Listening: AllListeningScores }[`${module}`].map((item, index) => (
                  <div className={`w-full mb-2 p-2 rounded-[15px] flex gap-4 ${item.username === userName ? "bg-blue-300" : "bg-gray-100"}`} key={index}>
                    <div className='mt-3 w-[30px] ml-2 sm:w-[35px] h-[30px] sm:h-[35px] flex justify-center align-middle text-xl font-bold'>{index + 1}</div>
                    <div className='w-[50px] h-[50px] p-2 bg-green-300 rounded-[50%] flex justify-center align-middle text-2xl mt-2'>
                      {item.username.charAt(0)}
                    </div>
                    <div className='font-bold ml-[-5px] overflow-auto mt-[1px] sm:mt-[7px] sm:ml-1 translate-y-[30px] sm:translate-y-3 text-[11px] sm:text-[18px]'>{item.username}</div>
                    <div className='ml-auto translate-y-3 mr-[1px] sm:mr-[20px] text-center'>
                      <p className='text-2xl font-bold'>{Number(item.ieltsRate).toFixed(0)}</p>
                      <p className='text-[13px] rounded translate-y-[-8px] text-green-600'>Points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default LeaderBoard;

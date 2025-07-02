"use client";
import React, { useState } from 'react';
import { useStateContext } from '@/contexts/ContextProvider';
import "../Styles/Style-DateFill.css";
import { FaFire } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { subDays } from "date-fns";
import { LuChevronsLeft, LuChevronsRight } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker CSS

const DateFillCom = ({ forLogOut }) => {
  const { currentColor, array, setArray } = useStateContext();
  const [startDate, setStartDate] = useState(new Date());
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

  return (
    <>
      <div className=' h-auto rounded-[19px] mt-[2px] sm:mt-[-20px]'>
        <div className='w-full h-full'>
          {/* Practice Time Info Box */}
          <div className='fireBackgroundImage bg-gradient-to-r from-red-300 to-red-600 h-auto rounded-[19px] sm:rounded-[23px] shadow-lg p-4 flex items-center justify-between transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl'>
            <div className='text-left'>
              <p className='text-lg sm:text-xl font-extrabold text-white tracking-wider'>30 Days Practice</p>
              <p className='mt-1 text-[12px] sm:text-sm text-blue-200 flex items-center'>
                <span className='text-[19px] sm:text-3xl font-bold mr-1'>2</span> Hours in a Day
              </p>
            </div>
            <div className='relative ml-[40px]'>
              <FaFire className='text-[65px] sm:text-[75px] text-red-500 ' />
              {/* <div className='absolute inset-0 bg-red-300 rounded-full opacity-70 animate-ping'></div> */}
            </div>
          </div>

          {/* Date Picker with Custom Header */}
          <div id="mainDivForCalender" className="p-4 bg-gray-100 rounded-[19px] sm:rounded-[23px] shadow-lg">
            <DatePicker
              locale="id"
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled
              }) => (
                <div className="flex items-center justify-center mb-3 space-x-2">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    className="transition transform hover:scale-110 focus:outline-none p-2 rounded-md bg-blue-200 hover:bg-blue-300 hover:shadow-xl"
                  >
                    <LuChevronsLeft className='text-2xl text-gray-700' />
                  </button>
                  <select
                    value={months[date.getMonth()]}
                    onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                    className="p-1 rounded-md text-[12px] sm:text-sm bg-blue-100 border border-gray-300 focus:outline-none transition duration-200 hover:bg-blue-200"
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <select
                    value={date.getFullYear()}
                    onChange={({ target: { value } }) => changeYear(value)}
                    className="p-1 rounded-md text-[12px] sm:text-sm bg-blue-100 border border-gray-300 focus:outline-none transition duration-200 hover:bg-blue-200"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    className="transition transform hover:scale-110 focus:outline-none p-2 rounded-md bg-blue-200 hover:bg-blue-300 hover:shadow-xl"
                  >
                    <LuChevronsRight className='text-2xl text-gray-700' />
                  </button>
                </div>
              )}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
              highlightDates={array.map((item) => subDays(new Date(item.date), 0))}
              inline
              className="date-picker-custom transform transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateFillCom;

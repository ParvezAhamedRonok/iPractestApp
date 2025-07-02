

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import {
  DateFillCom,
  WeekListeningChart,
  WeekReadingChart,
  WeekSpeakingChart,
  WeekWritingChart,
} from '../DComponents';
import { useStateContext } from "@/contexts/ContextProvider";
import LineCharts from '../DComponents/Charts/LineChart';
import DateGetAPI from "../data/All-Modules-Data-Get";
import "../Styles/Style-Dashboard.css";
const ProgressBar = dynamic(() => import('../DComponents/ProgressBar'), { ssr: false });

//end of importting..............



function Dashboard() {
  const { userPaymentStatusCheck } = useStateContext();
  const [countryName, setuserCountry] = useState("");


  useEffect(() => {
    setuserCountry(localStorage.getItem("setCountry"));
  }, [])



  return (
    <>

      <div className='DashMainHeader'>
        <div className='pt-[20px]'>
          <ProgressBar />
        </div>
        <DateFillCom />
      </div >
      <div className="">
        <div className='text-center text-xl sm:text-2xl p-2 font-bold'>
          Your daily performance for the last 7 days.
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-5 md:grid-cols-4 rounded p-3 mb-4'>
          <WeekSpeakingChart />
          <WeekWritingChart />
          <WeekReadingChart />
          <WeekListeningChart />
        </div>
        <LineCharts />
      </div>
      <div className='invisible'>
        <DateGetAPI />
      </div>
    </>


  )
}

export default Dashboard

"use client";
import React, { useEffect } from 'react';
import axios from "axios";
import moment from "moment";
import {
    SPEAKING_GET_FOR_COLLECT_USER_DATA,
    READING_GET_FOR_COLLECT_USER_DATA,
    LISTENING_GET_FOR_COLLECT_USER_DATA,
    WRITING_GET_FOR_COLLECT_USER_DATA
} from "@assets/URL's/AllUrl";

// Date variables
const d = new Date();
const year = d.getFullYear();
const month = (d.getMonth() + 1).toString().padStart(2, "0");
const previousMonth = d.getMonth() === 0 ? 12 : d.getMonth();
const previousYear = d.getMonth() === 0 ? year - 1 : year;

// Exported data arrays
export let SpeakingArray = [];
export let ReadingArray = [];
export let WritingArray = [];
export let ListeningArray = [];
export let DashboardCurrentmonthData = [];
export let DashboardLastmonthData = [];

export default function LineChartData() {
    useEffect(() => {
        const fetchData = async (url, targetArray) => {
            try {
                const { data } = await axios.get(url + localStorage.getItem('userEmail'), {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
                        'Content-Type': 'application/json'
                    }
                });
                const processedData = data.data.map(item => ({
                    x: moment.utc(item.createdAt).format('YYYY/MM/DD'),
                    y: item.ieltsScore || item.ieltsRate
                }));
                calculateMonthlyData(processedData, targetArray, year, month); // Current month
                calculateMonthlyData(processedData, targetArray, previousYear, previousMonth.toString().padStart(2, "0")); // Last month
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        // Fetch data for each skill
        fetchData(SPEAKING_GET_FOR_COLLECT_USER_DATA, SpeakingArray);
        fetchData(READING_GET_FOR_COLLECT_USER_DATA, ReadingArray);
        fetchData(WRITING_GET_FOR_COLLECT_USER_DATA, WritingArray);
        fetchData(LISTENING_GET_FOR_COLLECT_USER_DATA, ListeningArray);

        // Timeout to populate dashboard data after fetching completes
        setTimeout(populateDashboardData, 2000);
    }, []);

    const calculateMonthlyData = (dataX, targetArray, year, month) => {
        const datePrefix = `${year}/${month}/`;
        const dataForMonth = dataX.map(e => ({ x: e.x, y: e.y }));

        for (let day = 1; day <= 31; day++) {
            const formattedDate = `${datePrefix}${day.toString().padStart(2, '0')}`;
            const dailyData = dataForMonth.filter(e => e.x === formattedDate);
            const avgValue = dailyData.length
                ? (dailyData.reduce((sum, item) => sum + Number(item.y), 0) / dailyData.length).toFixed(1)
                : null;
            if (avgValue > 0) targetArray.push({ x: formattedDate, y: avgValue });
        }
    };

    const populateDashboardData = () => {
        const uniqueData = (arr) => arr.filter((obj, index, self) =>
            index === self.findIndex((o) => JSON.stringify(o) === JSON.stringify(obj))
        );

        const processMonthData = (monthOffset, targetArray) => {
            const month = (d.getMonth() + monthOffset).toString().padStart(2, "0");
            const year = d.getFullYear();
            const datePrefix = `${year}/${month}/`;

            Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0')).forEach((day) => {
                const dateStr = `${datePrefix}${day}`;
                const mainObj = {
                    value1: getUniqueValue(SpeakingArray, dateStr),
                    value2: getUniqueValue(WritingArray, dateStr),
                    value3: getUniqueValue(ReadingArray, dateStr),
                    value4: getUniqueValue(ListeningArray, dateStr)
                };
                targetArray.push(mainObj);
            });
        };

        const getUniqueValue = (arr, dateStr) => {
            const result = uniqueData(arr).find(dayMatch => dayMatch.x === dateStr);
            return result ? Number(result.y) : null;
        };

        processMonthData(1, DashboardCurrentmonthData);
        processMonthData(0, DashboardLastmonthData);
    };
}

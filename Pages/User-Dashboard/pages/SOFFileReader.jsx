"use client";
import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import axios from "axios";
import { FaBookReader } from "react-icons/fa";
import PdfImage from "@assets/SOP-Files/Imgs/pdf.jpeg";
import { SOP_GET_SPECIFIC_USER_DATA } from "@assets/URL's/AllUrl";
import { useRouter } from "next/navigation";
import { CiSaveDown1 } from "react-icons/ci";
import Image from "next/image";
import "../Styles/Sop-style.css";

const SOFFileReader = () => {
  const history = useRouter();
  const [storeALLSOP, setStoreAllSOP] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    const userLoginToken = localStorage.getItem("loginTOken");

    axios.get(SOP_GET_SPECIFIC_USER_DATA + userEmail, {
      headers: {
        "Authorization": `Bearer ${userLoginToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => setStoreAllSOP(res.data.data))
      .catch((e) => console.error(e));
  }, []);

  const printDocument = (content) => {
    const doc = new jsPDF();
    const textLines = doc.setFont("helvetica").setFontSize(10).splitTextToSize(content, 180);
    doc.text(textLines, 10, 10);
    doc.save("download.pdf");
  };

  return (
    <div className="w-full h-auto p-5 bg-gray-50 mt-[12px] sm:mt-[0px]">
      <button className="bookmarkBtn" onClick={() => { history.push("/SOP-Module/SOP-Maker-Page") }}>
        <span className="IconContainer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="1.5em" className="icon">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill="blue"></path>
          </svg>
        </span>
        <p className="text"> Make SOP</p>
      </button> <br />

      {storeALLSOP.length ? (
        storeALLSOP.map((item, index) => (
          <div key={index} className="w-full flex flex-col items-center mb-6 animate-fadeIn">
            <div className="card-container relative w-full sm:w-2/3 p-6 h-[400px] md:h-auto overflow-auto bg-gradient-to-r from-blue-100 to-purple-100 border border-gray-300 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <div className="flex justify-between items-center p-3 rounded-t relative">
                <FaBookReader className="text-4xl text-purple-500 opacity-60" />
                <p className="text-blue-700 text-lg font-semibold absolute right-4 top-3">iPractest</p>
              </div>
              <p
                className="text-justify p-4 text-sm leading-relaxed text-gray-700 font-light"
                dangerouslySetInnerHTML={{ __html: item.SOPData.replace(/\n/g, '<br />') }}
              />
            </div>
            <div className="flex justify-end items-center w-full sm:w-2/3 p-4 gap-2">
              <Image src={PdfImage} alt="PDF Icon" className="w-8 h-8" />
              <button
                className="bookmarkBtn flex items-center gap-2"
                onClick={() => printDocument(item.SOPData)}
              >
                <span className="IconContainer">
                  <CiSaveDown1 className="text-xl" />
                </span>
                <p className="text">Download</p>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-80 text-xl animate-fadeIn">
          <p>You haven't created any <span className="text-red-500">SOP</span> yet.</p>
          <button
            className="text-green-400 underline hover:text-blue-400 mt-2"
            onClick={() => history.push("/SOP-Module/SOP-Maker-Page")}
          >
            Make SOP
          </button>
        </div>
      )}
    </div>
  );
};

export default SOFFileReader;

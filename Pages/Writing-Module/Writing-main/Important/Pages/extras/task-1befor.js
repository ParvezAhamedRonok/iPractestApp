
import dynamic from "next/dynamic";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { BsBalloonHeartFill } from "react-icons/bs"
import UploadImg1 from "@assets/images/Writing-Images/uploadImg1.png"
import { BsSearchHeart } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
import { IoImages } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { useStateContext } from "@/contexts/ContextProvider";
import { CheckPaymentStatus } from "@/components/Payments/CkeckPayment/CheckPayments.js";
import ResultPopUp from "./ResultPopup";

import { WRITING_POST_CHECK_ANSWER, WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE, WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION } from "@assets/URL's/AllUrl.js"
import { Post_to_save_data_in_databse } from "../AllFunctions/Post-To-Save-data-in-Database";
import { Needto_login_button_cond_Then_give_access } from "../AllFunctions/Needto_login_button_cond_Then_give_access";
import { Check_cond_after_login_for_Give_access_in_all_evaluation } from "../AllFunctions/Check_cond_after_login_for_Give_access_in_all_evaluation";
const LoginPageForFeedback = dynamic(() => import("@/components/LoginPage/Same-Page-Login-Popup/LoginPage"), { ssr: false });
const QuestionUpload = dynamic(() => import("./QuestionUpload.js"), { ssr: false });

let ImageArray = [];
//storing user answer text for passign to into lexical * suggestion function API..
let userTextToPassResultEvaluation;
function WritingTextArea(task) {
  const history = useRouter();
  const { userPaymentStatusCheck, setOpen_MarketingOffer } = useStateContext();
  //all localstorage data saver states...
  const [userLoginName, setUserLoginName] = useState("");
  const [userLoginToken, setUserloginToken] = useState("");
  const [useremail, setUserEmail] = useState("")
  const [itemsSet, setitemsSet] = useState("");
  const [getUserWritinNo, setGetUserGritingNo] = useState("");
  const [googleLoginToken, setGoogleLoginToken] = useState("");
  const [useSignUpinfo, setUserSignupInfo] = useState("");

  const [isloadingForFeedback, setisloadingForFeedback] = useState(false);

  const [openLogInForFeedBack, setOpenLogInForFeedBack] = useState(false);
  const [MainTaskComplessionResult, setMainTaskComplessionResult] = useState("");
  const [imageUploadMsg, setImageUploadMsg] = useState('')
  const [writingData, setWritingData] = useState({ writinTextArea: "" });
  const [postIeltsRate, setpostIeltsRate] = useState("");
  const [LexicalResourceScore, setLexicalResourceScore] = useState("");
  const [storeCoherenceScore, setCoherenceScore] = useState("");
  const [GrammarScore, setGeammarScore] = useState("");
  const [correctData, setCorrectData] = useState("");
  const [isloading, setisloading] = useState(false);

  const [imageFile, setFile] = useState();
  const [imagePreview, setPreview] = useState([]);
  const inputEl = useRef(null);
  const [changeImageUI, setChangeImageUI] = useState(false)
  const [imageText, setIgameText] = useState('');
  const [storeQuestionText, setStoreQuestionText] = useState("")
  //it will work for when user want to login by this page or by condition after they use 1/2 time evaluation
  //& also when click on the result page login in first..
  const [change_login_Status, setchange_login_Status] = useState(true);
  //making toefl scores states ....
  const [TOELF_Score, setTOELF_Score] = useState("")
  //for result popup---
  const [changeTap, setChangeTap] = useState("Correction")

  //summary data storing-----------
  const [SpeakingSummary, setSpeakingSummary] = useState([]);
  const [SpeakingImprovement, setSpeakingImprovement] = useState([])

  //lexicalResourse && Grammer Socres storing----for result page---
  const [lexicalResWords, setlexicalResWords] = useState([]);
  const [grammerMistakes, setgrammerMistakes] = useState([]);
  //for store tap content to make conditions with payment's
  const [storeTapContentForChangeUI, setstoreTapContentForChangeUI] = useState("")
  // check paymentStaus user have payemnt already or No
  CheckPaymentStatus()


  //useEffect uses...
  useEffect(() => {
    // storing all localstorage data to states..
    setUserLoginName(localStorage.getItem("userName"));
    setUserEmail(localStorage.getItem('userEmail'));
    setGetUserGritingNo(localStorage.getItem("WritingNo"));
    setGoogleLoginToken(localStorage.getItem("GoogleFacebookToken"));
    setUserSignupInfo(localStorage.getItem("userSignupInfo"));
    setUserloginToken(localStorage.getItem("loginTOken"))
  }, []);

  //reload page function when user want to log in by this page without 
  const Reload_Page_func = () => {
    window.location.reload(); // Reload the current page
  }

  //upload image function & make them into a blob URL 
  //& then store into a array..
  const getImage = (event) => {
    setFile(event.target.files[0]);

    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    // console.log(selectedFilesArray);
    const imagesArray = selectedFilesArray.map((file) => {
      let imageSelected = file;
      // console.log(file);
      let urlOfimage = URL.createObjectURL(file);
      // console.log(urlOfimage);
      imageSelected['url'] = urlOfimage;  //8-18-23
      ImageArray.push(imageSelected);  //for crop--
      console.log(imageSelected);
      console.log(urlOfimage)
      return urlOfimage;
    });

    // setSelectImageForCrop(imagesArray);//for crop--
    setPreview((previousImages) => previousImages.concat(imagesArray)); //for crop--
    // FOR BUG IN CHROME
    event.target.value = "";

  }

  //delete selected image also from blob url arrya..
  function deleteHandler(image) {
    setPreview(imagePreview.filter((e) => e !== image));
    URL.revokeObjectURL(image);
    var filteredImage = ImageArray.filter(function (imageofArray) { return imageofArray.url != image; });    //8-18-23
    ImageArray = filteredImage;
  }




  //function Steps for uploading image transformation------> 
  function checkWritingAnswer(text) {
    //store this text into a state for pass to the resultEvaluation component for getting the evaluations
    userTextToPassResultEvaluation = text
    setImageUploadMsg("Checking..");
    let taskComplessionSTr = "";

    var sentData = {
      inputs: text,
    };

    if (storeQuestionText != "") {
      axios.post(WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION, {
        questions: storeQuestionText,
        answers: text
      })
        .then((res) => {
          console.log(res.data.message);

          const numbers = Array.from(res.data.message.matchAll(/(\d+)(?:-(\d+))?/g), ([, beginStr, endStr]) => {
            const [begin, end] = [beginStr, endStr].map(Number);
            return endStr ? Array.from({ length: end - begin + 1 }, (_, i) => begin + i) : [begin];
          }).flat();

          console.log(numbers);

          const mainTaskScore = numbers[0] ?
            (numbers[0] < 4 ? 5 : numbers[0] <= 6 ? numbers[0] + 1 : numbers[0]) : "0";

          setMainTaskComplessionResult(mainTaskScore);
          taskComplessionSTr = mainTaskScore;
        })
        .catch(console.log);


    } else {
      setMainTaskComplessionResult("error")
    }


    setTimeout(() => {
      axios
        .post(WRITING_POST_CHECK_ANSWER, sentData)
        .then((res) => {
          console.log(res.data);

          getUserWritinNo ? localStorage.setItem("WritingNo", getUserWritinNo + 1) : localStorage.setItem("WritingNo", 1)

          //get the user corrected data by the help of below API request code--
          var mainSentData = {
            "textData": sentData.inputs
          }
          axios.post("https://ipractest-406204.uc.r.appspot.com/writingCorrection/", mainSentData)
            .then((mainData) => {
              //stop loading....
              setisloading(false);

              //check conditions when user logged-In / have paid to give them access in all evaluations
              Check_cond_after_login_for_Give_access_in_all_evaluation(
                changeTap, userPaymentStatusCheck, setstoreTapContentForChangeUI,
                userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary,
                setlexicalResWords, setgrammerMistakes
              )

              let corretDta = mainData.data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ').split("**").join()
              // console.log(corretDta);
              setCorrectData(corretDta);
            })
            .catch((err) => { console.log(err) });

          //making total IELTS scores depends on every scores....
          let totalscore;
          if (taskComplessionSTr != "" || taskComplessionSTr != 0) {
            totalscore = (Number(res.data.GrammaticalScore) + Number(res.data.LexicalResourceScore) + Number(res.data.CoherenceScore) + Number(taskComplessionSTr)) / 4
          } else {
            totalscore = (Number(res.data.GrammaticalScore) + Number(res.data.LexicalResourceScore) + Number(res.data.CoherenceScore)) / 3
          }
          totalscore = totalscore.toFixed(1)

          totalscore = Math.round(totalscore * 2) / 2;

          //store those scores into state for showing to the user-----
          setpostIeltsRate(totalscore);
          setLexicalResourceScore(res.data.LexicalResourceScore);
          setGeammarScore(res.data.GrammaticalScore);
          setCoherenceScore(res.data.CoherenceScore)
          Making_TOEFL_Scroes(totalscore)

          //store data into database ....

          Post_to_save_data_in_databse(res.data, totalscore, userLoginToken, userLoginName, useremail, MainTaskComplessionResult)
        })
        .catch((err) => {
          setisloading(false);
          alert("Server Error please try again letter")
          console.log(err);
        });
    }, 2500);
    setisloading(true);
  }


  const uploadImageGCP = async (e) => {
    let scrollPage = document.getElementById("scrollPage" + task.task);
    let pagePosition = scrollPage.offsetTop;

    if (ImageArray[0]) {
      setisloading(true);
      setImageUploadMsg("Uploading..");
      //set items 1 for showing images text comparison ..
      setitemsSet("uploaded-text")

      var imagetext = "";
      for (let imageFile1 of ImageArray) {

        const formData = new FormData();
        formData.append("file", imageFile1);
        if (imageFile1) {
          await axios({
            method: "post",
            // url: "https://ipractest-406204.uc.r.appspot.com/GCPimageToText",
            url: WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE,
            data: formData,
          }).then(async (response) => {
            const { data } = response;

            let imageTextParts = '' + data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ');
            imagetext = imagetext + imageTextParts;
            // items = items + 1
          })
            .catch((err) => {
              setChangeImageUI(false);
              alert("Network error please try again")
              console.log(err);
              setisloading(false);
            });

        } else {
          const selectAlart = document.getElementById("SelectImage");
          selectAlart.innerText = "Please Upload an image";
          selectAlart.style.color = "red"
        }

      }

      setIgameText((imagetext));
      setTimeout(() => {
        setChangeImageUI(true);
        //for take the user to the top
        window.scrollTo({ top: pagePosition - 690, behavior: 'smooth' });
      }, 1000);
      setTimeout(() => {
        setisloading(false)
      }, 2000);
    } else {
      console.log("imageNotSelected")
    }

  }
  const afterConvertedImageIntoText = () => {
    checkWritingAnswer(imageText);
  }




  // function for the textarea value after submit----
  const handleWritingSubmit = (x) => {
    let wordEl = document.getElementById(task.task);
    // console.log(wordEl.innerText);
    let wordCountIn = parseInt(wordEl.innerText);
    if (wordCountIn > 149) {
      checkWritingAnswer(writingData.writinTextArea);
    } else {
      let wordCountAlert = document.getElementById(
        task.task + "wordCountAlert"
      );
      wordCountAlert.innerText = "You have to write at least 150 words.";
      wordCountAlert.style.color = "red";
    }

    //set items writing-text for showing user main writing comparision in result....
    setitemsSet("writing-text")
  };



  // count the words of user answer writings... when they write in the textBox..
  const handleinputTextArea = (input) => {
    // Assuming 'task' is defined somewhere accessible in your code
    const word = document.getElementById(task.task);

    // Count words efficiently
    const userText = input.target.value.trim();
    const wordCount = userText.split(/\s+/).filter(Boolean).length;
    word.innerHTML = wordCount;

    // Update state using functional update for 'writingData'
    setWritingData((prevData) => ({
      ...prevData,
      [input.target.name]: input.target.value,
    }));
  };


  const handleLogInPageForWrite = (x) => {
    if (useremail) {
      localStorage.removeItem("WritingNo");
      handleWritingSubmit();
    } else {
      //login page...
      openLogInPageForIpractestFeedback()
    }
  }

  const handleLogInPageForUpload = (x) => {
    // console.log("Hello i am Upload User");
    if (useremail) {
      localStorage.removeItem("WritingNo");
      // uploadImage();
      uploadImageGCP()
    } else {
      //login page...
      openLogInPageForIpractestFeedback()
    }
  }





  //Function for open login & SignUp pages Base on state........
  const openLogInPageForIpractestFeedback = () => {
    setOpenLogInForFeedBack(!openLogInForFeedBack)
  }




  const userLoginFunction = (x) => {
    // x.preventDefault();
    localStorage.setItem("productID", "WrittingPage");
    // console.log("checkLogIn..")
    setisloadingForFeedback(true);
    if (!userLoginToken && !googleLoginToken && !useSignUpinfo) {
      setisloadingForFeedback(false);
      //open login popUp...
      openLogInPageForIpractestFeedback();
    } else {
      setisloadingForFeedback(false)
      functionForCheckConditions();
    }
  }


  // function for senddaing to the login & signUp pages 
  // & make conditions for need-to-login-button..
  const functionForCheckConditions = () => {
    //call this function below from another file & pass those things which i need to pass here..
    Needto_login_button_cond_Then_give_access(
      userPaymentStatusCheck, history,
      changeTap, userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary,
      setlexicalResWords, setgrammerMistakes, setisloadingForFeedback, setstoreTapContentForChangeUI,
    )

  }



  //function for upload Question after showing Result ..........
  const clickForUploadQuestion = () => {
    setCorrectData("");
    setTimeout(() => {
      let item = document.getElementById("uploadQuestionSection");
      let pagePosition = item.offsetTop
      item.classList.add("zoom-in-out-box");
      window.scrollTo({ top: pagePosition - 350, behavior: 'smooth' });
    }, 1000);
  }


  //making  TOEFL Scores------------------
  const Making_TOEFL_Scroes = (Writing_IELTS_SCores) => {
    // alert(Writing_IELTS_SCores);

    const getToeflScoreFromIelts = (ieltsScore) => {
      // Map IELTS score ranges to TOEFL score ranges
      if (ieltsScore === 9) return 30;
      if (ieltsScore === 8.5) return 30;
      if (ieltsScore === 8) return 30;
      if (ieltsScore === 7.5) return 29;
      if (ieltsScore >= 7 && ieltsScore < 8) return 27; // Ranges from 7 to 7.9 => TOEFL 27
      if (ieltsScore >= 6.5 && ieltsScore < 7) return 25; // Ranges from 6.5 to 6.9 => TOEFL 25
      if (ieltsScore >= 6 && ieltsScore < 6.5) return 22; // Ranges from 6 to 6.4 => TOEFL 22
      if (ieltsScore >= 5.5 && ieltsScore < 6) return 19; // Ranges from 5.5 to 5.9 => TOEFL 19
      if (ieltsScore >= 5 && ieltsScore < 5.5) return 16; // Ranges from 5 to 5.4 => TOEFL 16
      if (ieltsScore >= 4.5 && ieltsScore < 5) return 13; // Ranges from 4.5 to 4.9 => TOEFL 13
      if (ieltsScore >= 0 && ieltsScore < 4.5) return 5;  // Ranges from 0 to 4.4 => TOEFL 5

      return null; // If no match is found
    };

    // Check if Writing_IELTS_SCores is valid
    if (Writing_IELTS_SCores) {
      //  alert("Inside=" + Writing_IELTS_SCores);
      console.log("Writing_IELTS_SCores:", Writing_IELTS_SCores); // Debugging to confirm the value of Writing_IELTS_SCores
      // Get the TOEFL score based on IELTS score
      const toeflScore = getToeflScoreFromIelts(Writing_IELTS_SCores);

      if (toeflScore !== null) {
        setTOELF_Score(toeflScore);  // Update the TOEFL score state
        //  alert(`TOEFL: ${toeflScore}, IELTS: ${Writing_IELTS_SCores}`);
      } else {
        console.log("No valid TOEFL score for the provided IELTS score.");
      }
    } else {
      console.log("IELTS score is zero or undefined."); // Additional check
    }
  };




  return (
    <>

      <div className=" bg-pink-50 mt-[80px] w-[95vw] sm:w-[75vw] rounded-[15px]">
        <div className="w-full h-full translate-y-[-90px] sm:translate-y-[-130px] jgrid justify-center align-middle">
          {
            changeImageUI ? (
              <>
                <div className="  w-full  pb-3 pt-3 grid justify-center align-middle">
                  <div className=" pb-2 ">
                    <div className="w-full p-1 flex justify-between">
                      <p className="text-[10px] sm:text-[12px] font-bold text-black translate-y-1">
                        You can modify your text.</p>
                      <p className="text-[13px] sm:text-[15px]"><span className={`text-[16px] sm:text-[18px] mr-1 font-bold text-purple-600 ${imageText.split(' ').length < 150 ? "text-red-500" : "text-gray-900"}`}>{imageText.split(' ').length}</span>words</p>

                    </div>
                    <textarea
                      name="writinTextAreaImage"
                      id="textbox"
                      className={` rounded-[15px]  shadow-lg bg-white w-[75vw] sm:w-[50vw] p-[15px] sm:p-[30px] h-[150px] sm:h-[220px]`}
                      value={imageText}
                      placeholder="Write here..."
                      onChange={(e) => { setIgameText(e.target.value) }}
                    ></textarea> <br />
                    <div className="w-[75vw] sm:w-[50vw] text-center sm:p-[3px]">
                      <p className="text-[7px] md:text-[9px] font-bold text-red-600 leading-[11px] break-words">
                        Please carefully review the converted text, as text conversion may not be 100% accurate, which could potentially lower your score.
                      </p>
                    </div>

                    <div className="w-full flex justify-center m-1">
                      <button onClick={() => { afterConvertedImageIntoText(); }}
                        className={` flex gap-1 text-center rounded-[20px] justify-center align-middle bg-black p-2 text-white  text-[7px] sm:text-[13px] `}  >
                        Writing Evaluation <BsSearchHeart className="text-[10px] sm:text-[17px] sm:translate-y-[2px] text-white" />
                      </button>
                    </div>

                  </div>
                </div>

              </>
            ) : (
              <>
                <div className={` w-full  pb-3 pt-3 grid justify-center align-middle`} >
                  <h3 className=" text-[11px] text-black mb-1 sm:text-[17px] flex gap-2 translate-x-2">
                    <FaPenToSquare className="text-sm sm:text-xl bg-pink-50 text-red-500 translate-y-[-2px]" />Evaluation From Text</h3>
                  <div className=" rounded-[20px] pb-2 mt-2">
                    <textarea
                      name="writinTextArea"
                      id="textbox"
                      className={` rounded-[15px]  shadow-lg bg-white w-[75vw] sm:w-[50vw] p-[15px] sm:p-[30px] h-[150px] sm:h-[220px]`}
                      placeholder="Write here..."
                      onChange={handleinputTextArea}
                    ></textarea>

                    <div className="w-full flex justify-between p-1 sm:mt-1" >
                      <span id={task.task + "wordCountAlert"} className="text-[7px] sm:text-[11px]"></span>
                      <p className="translate-y-[-9px] text-[13px] sm:text-[15px] ">
                        <span id={task.task}
                          className="text-[16px] sm:text-[18px] mr-1 font-bold text-purple-600">0</span>Words
                      </p>
                    </div>

                    <div className="w-full flex justify-center translate-y-[-10px]">
                      <button onClick={getUserWritinNo == "11" || getUserWritinNo == "111" ? handleLogInPageForWrite : handleWritingSubmit}
                        className={` flex gap-1 text-center rounded-[20px] justify-center align-middle bg-black p-2 text-white  text-[7px] sm:text-[13px] `}  >
                        Writing Evaluation <BsSearchHeart className="text-[10px] sm:text-[17px] sm:translate-y-[2px] text-white" />
                      </button>
                    </div>

                  </div>
                </div>
              </>

            )
          }

          {/* for upload images------ */}
          <div className="w-full pb-3 grid justify-center align-middle translate-y-[-30px]"
          >
            <QuestionUpload setStoreQuestionText={setStoreQuestionText} />
            <br />
            <div className="grid justify-center">
              <hr className="bg-purple-600 grid justify-center h-[1px] w-[75vw] sm:w-[50vw] " />
            </div><br />

            <h3 className=" text-[11px] text-black mb-1 sm:text-[17px] flex gap-2 translate-y-[-18px] pt-3">
              <IoImages className="text-sm sm:text-xl bg-pink-50 text-red-500 " />Evaluation From Image</h3>

            <div className={`border-dotted border-2 border-black rounded-[15px] shadow-lg bg-white grid justify-center translate-y-[-14px] pl-[10px] sm:pl-[50px] `}
            >
              <div className="grid grid-cols-1 w-full gap-5 box-border pt-2 pb-3">
                <div className="imageBo flex flex-wrap h-auto gap-2">
                </div>
                <div className="flex">
                  <div className={`${imagePreview[0] ? "flex" : "grid"} m-auto gap-4`}>
                    <div className="flex flex-wrap gap-2 justify-start mr-3 translate-x-[-10px] sm:translate-x-[-20px] ">
                      {imagePreview &&
                        imagePreview.map((image, index) => {
                          return (
                            <div key={image} className="image relative">
                              <Image src={image} className=" rounded-[15px]" alt="upload"
                                width={75}
                                height={72}
                              />
                              <button
                                className="bg-red-400 p-auto w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] font-bold rounded-[50%] text-center text-[10px] sm:text-[12px] absolute top-[-5px] right-[-4px] text-white"
                                onClick={() => deleteHandler(image)}>
                                X
                              </button>
                              {/* <p>{index + 1}</p> */}
                            </div>
                          );
                        })}
                    </div>
                    <div className="m-auto" id={"scrollPage" + task.task}>
                      <input type="file"
                        // multiple
                        accept="image/png , image/jpeg, image/webp"
                        onChange={getImage}
                        style={{ display: "none" }} //hiding input
                        ref={inputEl} //set inputEl to referring this element   
                      ></input>
                      <>
                        <button
                          className={` rounded-[6%] flex justify-center  ${imagePreview[0] ? "w-auto h-auto p-2 translate-y-[5px] bg-blue-200" : "w-[120px] translate-y-[-15px]"}  align-middle  border-[2px] border-dotted translate-x-[-10px] sm:translate-x-[-22px] m-auto mt-2 `}
                          onClick={() => inputEl.current.click()}>
                          {
                            imagePreview[0] ? <FaPlus className="text-[35px] hover:rotate-180 hover:transition-[4s]" /> :

                              <Image src={UploadImg1} alt="for Upload Image" className="w-[80px] sm:w-full rounded-[15px] translate-x-1 cursor-pointer" />
                          }
                        </button>
                        {
                          imagePreview[0] ? (
                            <>
                              <h4 className={`text-center translate-x-[-10px] sm:translate-x-[-22px] text-[10px] sm:text-[13px] mt-3`}>Upload Image</h4>

                            </>
                          ) : (
                            <>
                              <h4 className={`text-center translate-x-[-10px] sm:translate-x-[-22px] text-[15px] sm:text-[17px]`}>Upload Image Here, or browse</h4>
                              <p className="text-center text-[13px] opacity-65 translate-x-[-8px]">Supports: PNG, JPG, JPEG</p>
                            </>
                          )
                        }
                      </>
                    </div>
                  </ div>
                </div>

                {
                  imagePreview[0] && (
                    <div className="flex justify-start align-middle gap-[30px] m-auto">
                      <button type="submit"
                        onClick={
                          getUserWritinNo == "11" || getUserWritinNo == "111" ?
                            handleLogInPageForUpload :
                            // uploadImage
                            uploadImageGCP
                        }
                        className={` w-auto flex gap-1 text-center rounded-[20px] justify-center align-middle bg-blue-500 hover:bg-purple-500 p-2 text-white translate-x-[-10px] sm:translate-x-[-19px] text-[14px]`}
                      >  <BsBalloonHeartFill className="text-xl translate-y-[1px]" />
                        Convert image into Text </button>
                    </div>
                  )
                }
              </div>
            </div>

          </div>
        </div>
      </div >

      {/* for openLogIn & openSignUpPage connect with their states for ipractest Feedback */}
      {
        openLogInForFeedBack && (
          <div className="Result-PopUp  fixed top-0 left-1 mr-1 w-[90%] sm:w-[100%] z-[1472384632746700000]">
            <div className="grid w-[100vw] h-[100%] justify-center align-middle">
              <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[100vw] p-4 h-[96vh]  bg-transparent '>
                <div style={{ transition: openLogInForFeedBack && "3s ease-in-out " }}>
                  <LoginPageForFeedback
                    openLogInPage={openLogInPageForIpractestFeedback}
                    openSignUpPage={openSignUpPageForIpractestFeedback}
                    finalFuncAfterLogInorSignUp={change_login_Status ? Reload_Page_func : functionForCheckConditions}
                  />
                </div>
              </section>
            </div>
          </div>
        )
      }


      {/* for showing the result Into A Pop-Up */}
      <ResultPopUp
        correctData={correctData}
        setCorrectData={setCorrectData}
        setOpen_MarketingOffer={setOpen_MarketingOffer}
        postIeltsRate={postIeltsRate}
        TOELF_Score={TOELF_Score}
        LexicalResourceScore={LexicalResourceScore}
        GrammarScore={GrammarScore}
        storeCoherenceScore={storeCoherenceScore}
        MainTaskComplessionResult={MainTaskComplessionResult}
        clickForUploadQuestion={clickForUploadQuestion}
        changeTap={changeTap}
        setChangeTap={setChangeTap}
        storeTapContentForChangeUI={storeTapContentForChangeUI}
        userLoginFunction={userLoginFunction}
        setchange_login_Status={setchange_login_Status}
        itemsSet={itemsSet}
        imageText={imageText}
        writingData={writingData}
        userTextToPassResultEvaluation={userTextToPassResultEvaluation}
        lexicalResWords={lexicalResWords}
        grammerMistakes={grammerMistakes}
        isloading={isloading}
        imageUploadMsg={imageUploadMsg}
        isloadingForFeedback={isloadingForFeedback}
        SpeakingSummary={SpeakingSummary}
        SpeakingImprovement={SpeakingImprovement}
      />
    </>
  );
}

export default WritingTextArea;

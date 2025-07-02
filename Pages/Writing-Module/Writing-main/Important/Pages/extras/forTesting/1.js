

import React, { useRef, useState, useEffect } from "react";
import { BsBalloonHeartFill } from "react-icons/bs"
import UploadImg1 from "@assets/images/Writing-Images/uploadImg1.png"

import { IoImages } from "react-icons/io5";

import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE } from "../../../../../../assets/URL's/AllUrl";


let ImageArray = [];
export default function Task_1_Component() {

  const [getUserWritinNo, setGetUserGritingNo] = useState("");

  const [imageFile, setFile] = useState();
  const [imagePreview, setPreview] = useState([]);
  const inputEl = useRef(null);

  const [itemsSet, setitemsSet] = useState("");
  const [changeImageUI, setChangeImageUI] = useState(false);
  const [imageText, setIgameText] = useState('');


  useEffect(() => {
    // storing all localstorage data to states..
    setUserLoginName(localStorage.getItem("userName"));
    setUserEmail(localStorage.getItem('userEmail'));
    setGetUserGritingNo(localStorage.getItem("WritingNo"));
    setGoogleLoginToken(localStorage.getItem("GoogleFacebookToken"));
    setUserSignupInfo(localStorage.getItem("userSignupInfo"));
    setUserloginToken(localStorage.getItem("loginTOken"))
  }, []);

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
        // formData.append("rendomNumber", items);


        if (imageFile1) {
          await axios({
            method: "post",
            // url: "https://ipractest-406204.uc.r.appspot.com/GCPimageToText",
            url: WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE,
            data: formData,
          }).then(async (response) => {
            const { data } = response;

            let imageTextParts = '' + data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ');

            //  let removeNewLine = imageTextParts.replace(/(?:\r\n|\r|\n)/g, '');;


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
      seterrorIfUserDontSelectImage("imageNotSelected")
    }

  }


  return (
    <div>
      <div className="w-full pb-3 grid justify-center align-middle translate-y-[-30px]"
      >
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
  )
}

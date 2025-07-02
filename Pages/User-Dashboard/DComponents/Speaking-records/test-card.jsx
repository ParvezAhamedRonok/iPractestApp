import React from 'react';
import { CiPlay1 } from "react-icons/ci";

export default function Test_card({ testName, secVar1, secVar2, secVar3, SpeechSTR_withSec1, SpeechSTR_withSec2, SpeechSTR_withSec3, updateAudioForPlaySpeech, setAudioNo, functionForShowingUserData }) {
    console.log(testName, secVar1, secVar2, secVar3, SpeechSTR_withSec1, SpeechSTR_withSec2, SpeechSTR_withSec3)
    return (
        <div>
            <div className='bg-sky-100 p-4 h-auto rounded m-auto flex justify-center align-middle'>
                <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-2 m-auto">
                    <h4 className='mb-3 m-auto text-2xl'>Test: {testName}</h4>
                    {
                        secVar1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                            <div className='flex justify-center gap-2 cursor-pointer'
                                onClick={() => {
                                    updateAudioForPlaySpeech(secVar1[0].userSpeech)
                                    setAudioNo("Test-1:(Section-1)");
                                    functionForShowingUserData(SpeechSTR_withSec1[0].data);
                                }}
                            >
                                <p className='mt-1'>Section-1</p>
                                <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                    <CiPlay1 className=' text-xl pt-2 text-black' />
                                </i>
                            </div>
                        </button>)
                    }
                    {
                        secVar2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                            <div className='flex justify-center gap-2 cursor-pointer'
                                onClick={() => {
                                    updateAudioForPlaySpeech(secVar2[0].userSpeech);
                                    setAudioNo("Test-1:(Section-2)");
                                    functionForShowingUserData(SpeechSTR_withSec2[0].data);
                                }}
                            >
                                <p className='mt-1'>Section-2</p>
                                <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                    <CiPlay1 className=' text-xl pt-2 text-black' />
                                </i>
                            </div>

                        </button>)
                    }
                    {
                        secVar3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                            <div className='flex justify-center gap-2 cursor-pointer'
                                onClick={() => {
                                    updateAudioForPlaySpeech(secVar3[0].userSpeech)
                                    setAudioNo("Test-1:(Section-3)")
                                    functionForShowingUserData(SpeechSTR_withSec3[0].data);
                                }}
                            >
                                <p className='mt-1'>Section-3</p>
                                <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                    <CiPlay1 className=' text-xl pt-2 text-black' />
                                </i>
                            </div>

                        </button>)
                    }
                </div>
            </div>
        </div>
    )
}

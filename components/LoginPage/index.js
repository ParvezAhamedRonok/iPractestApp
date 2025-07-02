import React from 'react'
import LoginPage from './LoginPage';
import SignUppage from "./SignUpPage"
import { useStateContext } from "@/contexts/ContextProvider";

export default function index() {
    const { OpenClose_LogSign_Popup, setOpenClose_LogSign_Popup } = useStateContext();

    return (
        <>
            {
                OpenClose_LogSign_Popup.includes("Login") && <LoginPage />
            }
            {
                OpenClose_LogSign_Popup.includes("Signup") && <SignUppage />
            }
        </>
    )
}

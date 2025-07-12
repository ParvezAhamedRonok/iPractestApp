
import React, { useEffect } from 'react';
import AllWritingTestServices from "./Test-Cards";
import FullNavigationBar from "../../../components/NavigationFull"
import { CheckPaymentStatus } from "../../../Pages/Payments/CkeckPayment/CheckPayments"
import { useStateContext } from '../../../contexts/ContextProvider';

function WritingAllTest() {
  const { userPaymentStatusCheck, setUserPaymentStatusCheck } = useStateContext();
  CheckPaymentStatus();
  // alert("Payment_Status = = =" + userPaymentStatusCheck)

  return (
    <>
      <FullNavigationBar />
      <AllWritingTestServices />
    </>
  );
}

export default WritingAllTest;




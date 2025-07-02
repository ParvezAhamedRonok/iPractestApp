
//Actual-witing-test1------------
import WrittingTest1 from "../All-Tests/Actual-All-Tests/Test1/WrittingPage";
import WrittingTest2 from "../All-Tests/Actual-All-Tests/Test2/WrittingPage";
import WrittingTest3 from "../All-Tests/Actual-All-Tests/Test3/WrittingPage";
import WrittingTest4 from "../All-Tests/Actual-All-Tests/Test4/WrittingPage";
import WrittingTest5 from "../All-Tests/Actual-All-Tests/Test5/WrittingPage";
import WrittingTest6 from "../All-Tests/Actual-All-Tests/Test6/WrittingPage";
import WrittingTest7 from "../All-Tests/Actual-All-Tests/Test7/WrittingPage";
import WrittingTest8 from "../All-Tests/Actual-All-Tests/Test8/WrittingPage";
import WrittingTest9 from "../All-Tests/Actual-All-Tests/Test9/WrittingPage";
import WrittingTest10 from "../All-Tests/Actual-All-Tests/Test10/WrittingPage";
import WrittingTest11 from "../All-Tests/Actual-All-Tests/Test11/WrittingPage";
import WrittingTest12 from "../All-Tests/Actual-All-Tests/Test12/WrittingPage";
import WrittingTest13 from "../All-Tests/Actual-All-Tests/Test11/WrittingPage";
import WrittingTest14 from "../All-Tests/Actual-All-Tests/Test12/WrittingPage";


function Main({ testID }) {



  //main rendering---              
  return (
    <div className="Main-Container bg-[#eef1f6]">
      <div className="w-full sm:w-2/3 p-5 " >
        {testID === "Actual-test-1" && (<WrittingTest1 />)}
        {testID === "Actual-test-2" && (<WrittingTest2 />)}
        {testID === "Actual-test-3" && (<WrittingTest3 />)}
        {testID === "Actual-test-4" && (<WrittingTest4 />)}
        {testID === "Actual-test-5" && (<WrittingTest5 />)}
        {testID === "Actual-test-6" && (<WrittingTest6 />)}
        {testID === "Actual-test-7" && (<WrittingTest7 />)}
        {testID === "Actual-test-8" && (<WrittingTest8 />)}
        {testID === "Actual-test-9" && (<WrittingTest9 />)}
        {testID === "Actual-test-10" && (<WrittingTest10 />)}
        {testID === "Actual-test-11" && (<WrittingTest11 />)}
        {testID === "Actual-test-12" && (<WrittingTest12 />)}
        {testID === "Actual-test-13" && (<WrittingTest13 />)}
        {testID === "Actual-test-14" && (<WrittingTest14 />)}
        {/* //All Writing Cambridge Tests ... */}
        {testID === "Cambridge-test-1" && (<WrittingTest1 />)}
        {testID === "Cambridge-test-2" && (<WrittingTest2 />)}
        {testID === "Cambridge-test-3" && (<WrittingTest3 />)}
        {testID === "Cambridge-test-4" && (<WrittingTest4 />)}
        {testID === "Cambridge-test-5" && (<WrittingTest5 />)}
        {testID === "Cambridge-test-6" && (<WrittingTest6 />)}
        {testID === "Cambridge-test-7" && (<WrittingTest7 />)}
        {testID === "Cambridge-test-8" && (<WrittingTest8 />)}
        {testID === "Cambridge-test-9" && (<WrittingTest9 />)}
        {testID === "Cambridge-test-10" && (<WrittingTest10 />)}
        {testID === "Cambridge-test-11" && (<WrittingTest11 />)}
        {testID === "Cambridge-test-12" && (<WrittingTest12 />)}
        {testID === "Cambridge-test-13" && (<WrittingTest13 />)}
        {testID === "Cambridge-test-14" && (<WrittingTest14 />)}
      </div>


    </div>
  )
}

export default Main;














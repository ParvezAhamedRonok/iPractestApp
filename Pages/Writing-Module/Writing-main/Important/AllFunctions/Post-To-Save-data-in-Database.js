// SaveDataToDatabase.js

import { WRITING_POST_FOR_SET_SCORES } from "../../../../../assets/URL's/AllUrl";



/**
 * Extract test name from route pathname
 */
const extractTestName = (pathname) => {
  const parts = pathname.split("/");
  const lastItem = parts[parts.length - 1];
  return pathname.includes("Actual") ? lastItem : "";
};

export async function postToSaveDataInDatabase(
  res_data,
  totalscore,
  userLoginToken,
  userLoginName,
  useremail,
  MainTaskComplessionResult,
  pathname // pass pathname from usePathname()
) {
  try {
    const TestsName = extractTestName(pathname);

    const response = await fetch(WRITING_POST_FOR_SET_SCORES, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${userLoginToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userLoginName,
        userEmail: useremail,
        LexicalResourceScore: res_data.LexicalResourceScore || "",
        GrammarScore: res_data.GrammaticalScore || "",
        ieltsRate: totalscore || "",
        coherence: res_data.CoherenceScore || "",
        taskCompletion:
          MainTaskComplessionResult !== "" ? MainTaskComplessionResult : "0",
        TestsName,
      }),
    });

    const data = await response.json();
    console.log("Post response__when save to database:", data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

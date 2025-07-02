// Sugession_API_Calling.js

export async function Sugession_API_Calling(suggesData, setSpeakingImprovement, setSpeakingSummary) {
  console.log("Suggestion input:", suggesData);

  const sentData = {
    textData: suggesData
  };

  try {
    // First API: writingImprovement
    const response = await fetch("https://ipractest-406204.uc.r.appspot.com/writingImprovement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sentData)
    });

    const json = await response.json();
    console.log("Improvement response:", json);

    // Extract and clean speaking improvement suggestions
    const improvementLines = json.message.split("\n");
    const cleanedImprovements = improvementLines
      .filter(item => item.trim() !== "")
      .map(item => {
        return item
          .replace(/['"]+/g, "")
          .replace(/\\n/g, " ")
          .replace(/[##]/g, " ")
          .replace(/[**]/g, " ")
          .trim();
      });

    console.log("Cleaned improvements:", cleanedImprovements);
    setSpeakingImprovement(cleanedImprovements);

    // Create data for summary request
    const intermediate = json.message
      .replace(/['"]+/g, "")
      .replace(/\\n/g, " ")
      .split("*")
      .join()
      .replace(/\n/g, " ")
      .replace(",,", "")
      .split(",,")
      .join()
      .replace(/,/g, "")
      .replace(/[##]/g, " ");

    const summaryData = {
      textData: intermediate
    };

    // Second API: improvementSummary
    const summaryResponse = await fetch("https://ipractest-406204.uc.r.appspot.com/improvementSummary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(summaryData)
    });

    const summaryJson = await summaryResponse.json();
    console.log("Summary response:", summaryJson);

    const summaryLines = summaryJson.message.trim().split(".");
    const cleanedSummary = summaryLines
      .filter(item => item.trim() !== "")
      .map(item => {
        return (
          item
            .replace(/['"]+/g, "")
            .replace(/\n/g, " ")
            .replace(/\*/g, "")
            .replace(/-/g, "")
            .replace(/,/g, "")
            .trim() + "."
        );
      });

    console.log("Cleaned summary:", cleanedSummary);

    // Add slight delay for effect
    setTimeout(() => {
      setSpeakingSummary(cleanedSummary);
    }, 500);
  } catch (error) {
    console.error("Error in suggestion or summary API:", error);
  }
}

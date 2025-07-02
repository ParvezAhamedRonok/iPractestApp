// Lexical_Grammer_Sug_API_Calling_func.js

export async function Lexical_Grammer_Sug_API_Calling_func(lexicalData, setlexicalResWords, setgrammerMistakes) {
  const sentData = {
    textData: lexicalData
  };

  console.log("Sending data:", sentData);

  try {
    // Fetch Lexical Resource
    const lexicalResponse = await fetch("https://ipractest-406204.uc.r.appspot.com/lexandTens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sentData)
    });

    const lexicalJson = await lexicalResponse.json();
    console.log("Lexical Response:", lexicalJson);

    const lexicalRawArray = lexicalJson.message
      .replace(/['"]+/g, "")
      .replace(/\\n/g, " ")
      .split("**");

    const cleanedLexical = lexicalRawArray
      .filter(item => item.trim() !== "*" && item.trim() !== "")
      .map(item => item.replace(/['"*\\n]+/g, "").trim());

    console.log("Cleaned Lexical:", cleanedLexical);
    setlexicalResWords(cleanedLexical);

  } catch (error) {
    console.error("Error fetching lexical data:", error);
  }

  try {
    // Fetch Grammar Mistakes
    const grammarResponse = await fetch("https://ipractest-406204.uc.r.appspot.com/grammarmistakes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sentData)
    });

    const grammarJson = await grammarResponse.json();
    console.log("Grammar Response:", grammarJson);

    const grammarRawArray = grammarJson.message
      .replace(/['"]+/g, "")
      .replace(/\\n/g, " ")
      .split("*");

    const cleanedGrammar = grammarRawArray
      .filter(item => item.trim() !== "")
      .map(item => item.replace(/\\/g, "").trim());

    console.log("Cleaned Grammar:", cleanedGrammar);
    setgrammerMistakes(cleanedGrammar);

  } catch (error) {
    console.error("Error fetching grammar mistakes:", error);
  }
}

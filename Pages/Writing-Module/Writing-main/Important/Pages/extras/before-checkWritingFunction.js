 const checkWritingAnswer = async (text) => {
     alert('Starting...')
    userTextToPassResultEvaluation = text;
    setGlobal_Msz_showing('Checking...');
    let taskScore = '';
    if (storeQuestionText) {
      try {
        const r = await fetch(WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ questions: storeQuestionText, answers: text }),
        });
        const data = await r.json();
        alert('completed.')
        const first = Number(RegExp.$1 = data.message.match(/(\d+)/)?.[1] ?? 0);
        taskScore = first < 4 ? 5 : first <= 6 ? first + 1 : first;
        setMainTaskComplessionResult(taskScore);
      } catch {
           alert('error occured.....')
        setMainTaskComplessionResult('error');
      }
    }

    setLoadingGlobally(true);
    setTimeout(async () => {
      try {
        const r = await fetch(WRITING_POST_CHECK_ANSWER, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inputs: text }),
        });
        const data = await r.json();
        if (getUserWritinNo) {
          await AsyncStorage.setItem('WritingNo', String(getUserWritinNo + 1));
        } else {
          await AsyncStorage.setItem('WritingNo', '1');
        }
        setRepeatedWords(repeatedWordScore(text));
        setSubOrdinateWord(Check_duplicate_words(text));
        const r2 = await fetch('https://ipractest-406204.uc.r.appspot.com/writingCorrection/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ textData: text }),
        });
        const d2 = await r2.json();
        setLoadingGlobally(false);
        Check_cond_after_login_for_Give_access_in_all_evaluation(
          changeTap,
          userPaymentStatusCheck,
          setstoreTapContentForChangeUI,
          userTextToPassResultEvaluation,
          setSpeakingImprovement,
          setSpeakingSummary,
          setlexicalResWords,
          setgrammerMistakes,
        );
        setCorrectData(d2.message.replace(/['"]+/g, '').replace(/\\n/g, ' '));
        const totalRaw = (
          Number(data.GrammaticalScore) +
          Number(data.LexicalResourceScore) +
          Number(data.CoherenceScore) +
          (taskScore ? Number(taskScore) : 0)
        ) / (taskScore ? 4 : 3);
        const rounded = Math.round(Number(totalRaw.toFixed(1)) * 2) / 2;
        setpostIeltsRate(rounded);
        setLexicalResourceScore(data.LexicalResourceScore);
        setGeammarScore(data.GrammaticalScore);
        setCoherenceScore(data.CoherenceScore);
        Making_TOEFL_Scroes(rounded);
        Post_to_save_data_in_databse(
          data,
          rounded,
          userLoginToken,
          userLoginName,
          useremail,
          MainTaskComplessionResult,
          GetFullPathName
        );
      } catch {
        setLoadingGlobally(false);
        Alert.alert('Server Error, please try again later.');
      }
    }, 2500);
  };
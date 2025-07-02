
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-C2R7GXEJ9S');

//get full url & stop the audio 



// On document load resolve the Speech SDK dependency
async function Initialize(onComplete) {
    if (!!window.SpeechSDK) {
        await onComplete(window.SpeechSDK);
        console.log("Speaking-loader-complete")
    } else {
        console.log("Speaking-loader-not-complete");
    }
}

// status fields and start button in UI
var resultsDiv,
    eventsDiv,
    talkingHeadDiv,
    highlightDiv;
var startSynthesisAsyncButton, pauseButton, resumeButton, downloadButton;
var updateVoiceListButton;

// subscription key and region for speech services.
var subscriptionKey, regionOptions;
var authorizationToken;
var voiceOptions, isSsml;
var SpeechSDK;
var synthesisText;
var synthesizer;
var player;
var wordBoundaryList = [];


function getAudioConfig() {
    // If an audio file was specified, use it. Otherwise, use the microphone.
    // Depending on browser security settings, the user may be prompted to allow microphone use. Using
    // continuous recognition allows multiple phrases to be recognized from a single use authorization.
    if (audioFile) {
        return SpeechSDK.AudioConfig.fromWavFileInput(audioFile);
    } else if (inputSourceFileRadio.checked) {
        alert('Please choose a file when selecting file input as your audio source.');
        return;
    } else if (microphoneSources.value) {
        return SpeechSDK.AudioConfig.fromMicrophoneInput(microphoneSources.value);
    } else {
        return SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    }
}

function getPronunciationAssessmentConfigFromJson() {
    var pronunciationAssessmentConfig = new SpeechSDK.PronunciationAssessmentConfig.fromJSON(
        "{\"GradingSystem\": \"HundredMark\", \
          \"Granularity\": \"Phoneme\", \
          \"EnableMiscue\": \"True\", \
          \"EnableProsodyAssessment\": \"True\", \
          \"ScenarioId\": \"[scenario ID will be assigned by product team]\"}"
    );
    pronunciationAssessmentConfig.referenceText = referenceText.value;
    return pronunciationAssessmentConfig;
}

window.pronunciationAssessmentConfiguredWithJson = function () {


    var audioConfig = getAudioConfig();
    var speechConfig = SpeechSDK.SpeechConfig.fromSubscription('pBxZuy4QqzuNGb8T6rdUnijEF005LXnuBDFO1hZZ8nqsm5kQcmegJQQJ99AKACYeBjFXJ3w3AAAYACOG5kkm', 'eastus');
    var pronunciationAssessmentConfig = getPronunciationAssessmentConfigFromJson();
    if (!audioConfig || !speechConfig || !pronunciationAssessmentConfig) return;

    // Create the SpeechRecognizer and set up common event handlers and PhraseList data
    reco = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
    applyCommonConfigurationTo(reco);

    // Apply pronunciation assessment config to recognizer.
    pronunciationAssessmentConfig.applyTo(reco);

    // Note: in this scenario sample, the 'recognized' event is not being set to instead demonstrate
    // continuation on the 'recognizeOnceAsync' call. 'recognized' can be set in much the same way as
    // 'recognizing' if an event-driven approach is preferable.
    reco.recognized = undefined;

    // Note: this scenario sample demonstrates result handling via continuation on the recognizeOnceAsync call.
    // The 'recognized' event handler can be used in a similar fashion.
    reco.recognizeOnceAsync(
        function (successfulResult) {
            onRecognizedResult(successfulResult);
        },
        function (err) {
            window.console.log(err);
            phraseDiv.innerHTML += "ERROR: " + err;
        }
    );
}
startSynthesisAsyncButton = document.getElementById("startSynthesisAsyncButton");




window.starSynthesis = function (text) {
    synthesisText = document.getElementById("synthesisText");

    // if we got an authorization token, use the token. Otherwise use the provided subscription key
    var speechConfig;

    speechConfig = SpeechSDK.SpeechConfig.fromSubscription('pBxZuy4QqzuNGb8T6rdUnijEF005LXnuBDFO1hZZ8nqsm5kQcmegJQQJ99AKACYeBjFXJ3w3AAAYACOG5kkm', 'eastus');
    speechConfig.speechSynthesisVoiceName = 'en-US-JennyNeural';
    speechConfig.speechSynthesisOutputFormat = SpeechSDK.SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3;

    player = new SpeechSDK.SpeakerAudioDestination();

    player.onAudioStart = function (_) {
        document.getElementById("transcriptText").style.display = "none";
        document.getElementById("SpeakingState").innerHTML = "Examiner is speaking...";
        console.log("playback started");
        window.speechFinished = false;
        window.onAudionStartGlobal();
        setTimeout(function () { $("svg path :first-child").each(function (i) { this.beginElement(); }); }, 0.5);
    }

    player.onAudioEnd = function (_) {
        document.getElementById("SpeakingState").innerHTML = "Waiting for your Speech...";
        console.log("playback finished");
        window.speechFinished = true;
        window.resetTranscriptG();
        window.onAudionEndGlobal();
        document.getElementById("transcriptText").style.display = "block";
    };

    var audioConfig = SpeechSDK.AudioConfig.fromSpeakerOutput(player);

    synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);

    // Real-time emotion detection function
    function detectEmotion(text) {
        text = text.toLowerCase();

        if (text.includes("happy") || text.includes("great") || text.includes("awesome") || text.includes("joyful") || text.includes("delighted") ||
            text.includes("cheerful") || text.includes("content") || text.includes("pleased") || text.includes("smiling") || text.includes("glad") ||
            text.includes("satisfied") || text.includes("radiant") || text.includes("blissful"))
            return "cheerful";

        if (text.includes("sad") || text.includes("cry") || text.includes("unhappy") || text.includes("depressed") || text.includes("miserable") ||
            text.includes("heartbroken") || text.includes("sorrowful") || text.includes("tearful") || text.includes("gloomy") || text.includes("downcast") ||
            text.includes("melancholy") || text.includes("grief") || text.includes("mournful") || text.includes("distressed"))
            return "sad";

        if (text.includes("angry") || text.includes("mad") || text.includes("furious") || text.includes("annoyed") || text.includes("outraged") ||
            text.includes("resentful") || text.includes("irritated") || text.includes("infuriated") || text.includes("livid") || text.includes("hostile") ||
            text.includes("fuming") || text.includes("frustrated") || text.includes("wrathful"))
            return "angry";

        if (text.includes("excited") || text.includes("thrilled") || text.includes("amazing") || text.includes("ecstatic") || text.includes("elated") ||
            text.includes("overjoyed") || text.includes("exhilarated") || text.includes("enthusiastic") || text.includes("jubilant") || text.includes("delighted") ||
            text.includes("energetic") || text.includes("pumped"))
            return "excited";

        if (text.includes("whisper") || text.includes("quiet") || text.includes("soft") || text.includes("hushed") || text.includes("gentle") ||
            text.includes("muted") || text.includes("subdued") || text.includes("low voice") || text.includes("murmur"))
            return "whispering";

        if (text.includes("shout") || text.includes("yell") || text.includes("loud") || text.includes("scream") || text.includes("roar") ||
            text.includes("bellow") || text.includes("shriek") || text.includes("howl") || text.includes("thunderous") || text.includes("deafening"))
            return "shouting";

        if (text.includes("hopeful") || text.includes("inspire") || text.includes("optimistic") || text.includes("uplifting") || text.includes("motivated") ||
            text.includes("encouraging") || text.includes("positive") || text.includes("confident") || text.includes("aspiring"))
            return "hopeful";

        if (text.includes("terrified") || text.includes("scared") || text.includes("afraid") || text.includes("fearful") || text.includes("panicked") ||
            text.includes("alarmed") || text.includes("petrified") || text.includes("shaken") || text.includes("horrified") || text.includes("nervous") ||
            text.includes("startled") || text.includes("apprehensive") || text.includes("timid"))
            return "terrified";

        if (text.includes("confident") || text.includes("assured") || text.includes("bold") || text.includes("fearless") || text.includes("determined") ||
            text.includes("self-reliant") || text.includes("strong-willed") || text.includes("secure") || text.includes("assertive"))
            return "confident";

        if (text.includes("nervous") || text.includes("anxious") || text.includes("worried") || text.includes("uneasy") || text.includes("jittery") ||
            text.includes("stressed") || text.includes("fidgety") || text.includes("agitated") || text.includes("apprehensive"))
            return "nervous";

        if (text.includes("loving") || text.includes("affectionate") || text.includes("caring") || text.includes("passionate") || text.includes("tender") ||
            text.includes("adoring") || text.includes("fond") || text.includes("warm-hearted") || text.includes("compassionate") || text.includes("devoted"))
            return "loving";

        if (text.includes("bored") || text.includes("uninterested") || text.includes("dull") || text.includes("tedious") || text.includes("monotonous") ||
            text.includes("weary") || text.includes("indifferent") || text.includes("lifeless") || text.includes("listless") || text.includes("apathetic"))
            return "bored";

        if (text.includes("curious") || text.includes("interested") || text.includes("inquisitive") || text.includes("questioning") || text.includes("intrigued") ||
            text.includes("eager") || text.includes("inquiring") || text.includes("explorative") || text.includes("fascinated"))
            return "curious";

        if (text.includes("grateful") || text.includes("thankful") || text.includes("appreciative") || text.includes("blessed") || text.includes("humbled") ||
            text.includes("obliged") || text.includes("relieved") || text.includes("contented") || text.includes("overcome with gratitude"))
            return "grateful";

        return "default"; // Neutral
    }


    // Adjust the speech synthesis style based on emotion
    function applyEmotionToSpeech(emotion, text) {
        var ssml = `
            <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
                <voice name="en-US-JennyNeural">
                    <mstts:express-as style="${emotion}">
                        ${text}
                    </mstts:express-as>
                </voice>
            </speak>
        `;
        return ssml;
    }

    // The event synthesizing signals that a synthesized audio chunk is received.
    synthesizer.synthesizing = function (s, e) {
        // Get the real-time text being synthesized (e.result.text)
        var emotion = detectEmotion(e.result.text); // Detect emotion in real time
        var ssml = applyEmotionToSpeech(emotion, e.result.text); // Apply emotion to SSML

        synthesizer.speakSsmlAsync(ssml, function (result) {
            if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
                console.log("Synthesis completed");
            }
        }, function (err) {
            console.log("Error during synthesis: ", err);
        });
    };

    // Event handlers for synthesis
    synthesizer.synthesisStarted = function (s, e) {
        console.log("Synthesis started");
    };

    synthesizer.synthesisCompleted = function (s, e) {
        console.log("Synthesis completed");
    };

    // Error handling
    synthesizer.SynthesisCanceled = function (s, e) {
        console.log("Synthesis canceled: ", e.errorDetails);
    };

    // Callback after synthesis
    const complete_cb = function (result) {
        if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
            console.log("Synthesis finished successfully");
        } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
            console.log("Synthesis failed: " + result.errorDetails);
        }
        synthesizer.close();
        synthesizer = undefined;
    };

    const err_cb = function (err) {
        console.log(err);
        synthesizer.close();
        synthesizer = undefined;
    };

    // Start synthesis
    window.playerG = player;
    synthesizer.speakTextAsync(text, complete_cb, err_cb);
};




setTimeout(() => {
    Initialize(function (speechSdk) {
        SpeechSDK = speechSdk;

    });
}, 2000);


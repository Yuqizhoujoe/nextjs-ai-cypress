import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";
import { analytics } from "../firebase/firebase";

interface Options {
  handleResult: any;
}

let synthesizer: sdk.SpeechSynthesizer | null = null;
export const startSpeechSynthesis = (text: string, options: Options) => {
  try {
    // speech config
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      process.env.MICROSOFT_SPEECH_KEY,
      process.env.MICROSOFT_SPEECH_REGION
    );
    // The language of the voice that speaks.
    // speechConfig.speechSynthesisVoiceName = "zh-CN-XiaoxiaoNeural";
    // speechConfig.speechSynthesisVoiceName = "wuu-CN-XiaotongNeural";
    // speechConfig.speechSynthesisVoiceName = "zh-CN-sichuan-YunxiNeural";
    // speechConfig.speechSynthesisVoiceName = "zh-CN-liaoning-XiaobeiNeural";
    // speechConfig.speechSynthesisVoiceName = "zh-HK-HiuGaaiNeural";
    speechConfig.speechSynthesisVoiceName = "zh-CN-shaanxi-XiaoniNeural";
    // speechConfig.speechSynthesisVoiceName = "zh-CN-XiaoyanNeural";
    // audio config
    const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

    synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    console.log(text);
    console.log(speechConfig);
    console.log(audioConfig);
    console.log(synthesizer);

    synthesizer.speakTextAsync(text, (result) => {
      switch (result.reason) {
        case ResultReason.SynthesizingAudioCompleted:
          console.log("synthesis finished");
          console.log(result);
          console.log(result.audioData);
          options.handleResult(result.audioData);
          break;
        default:
          console.error(`Speech synthesis cancelled, ${result.errorDetails}`);
      }

      synthesizer.close();
      synthesizer = null;
    });
  } catch (e) {
    console.error(e);
  }
};

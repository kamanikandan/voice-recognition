const btn = document.querySelector(".talk");
const contentInput = document.querySelector(".content-input");
const contentOutput = document.querySelector(".content-output");
const greetings = [
    "I'm good, How is it going?",
    "I am not happy! It's all because of you!!",
    "Excellent! Crazy!! How about YOU?"
];

//Get SpeakRecognition Object
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

//Get Value from Speak Recognition String
recognition.onresult = (event) => {
    const transcript = event.results[0].item(0).transcript;
    contentInput.textContent = `${transcript}?`;
    talkBack(transcript);
}
//Bing Click Event and Start Speech
btn.addEventListener("click", () => {
    recognition.start();
});

//TalkBack function onResult
function talkBack(message) {
    const speak = new SpeechSynthesisUtterance();
    speak.volume = 1;
    speak.pitch = 1;
    speak.text = "I can't understand what you are saying!";
    if(message.includes("how are")) {
        speak.text = greetings[Math.floor(Math.random() * greetings.length)]; 
    }
    contentOutput.textContent = speak.text;
    window.speechSynthesis.speak(speak);
}
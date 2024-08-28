function change() {
    var cb=document.getElementById("private").value
    console.log(cb)

}

function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds();
    var time=hours+":"+minutes+":"+seconds
    return time
  }


  //teksti puheeksi
function speak(text) {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[1]; // Choose a specific voice
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }

  function playMessageSound() {
    var audio = new Audio('file://chatter/public/css/sounds/msgSound.mp3')
    audio.play()
   
  }
  
const msg = new SpeechSynthesisUtterance();
let voices = [];
const dropdown = document.querySelector('[name="voice"]');
const selectOptions = document.querySelectorAll('[type="range"], [name="text"]');
const speak = document.querySelector('#speak');
const stopB = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices();
    dropdown.innerHTML = voices 
    .map(voice => `<option value ="${voice.name}">${voice.name}(${voice.lang})</option>`)
    .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(restart = true) {
    speechSynthesis.cancel();
    if (restart) {
        speechSynthesis.speak(msg);
    }
    
    
}
function setOption(){
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
dropdown.addEventListener('change', setVoice);
selectOptions.forEach(option => option.addEventListener('change', setOption));
speak.addEventListener('click', toggle);
stopB.addEventListener('click', toggle.bind(null, false));
// test external link
console.log("hello world!");

// Variables for slider value
const BPMSlider = document.getElementById("BPMSlider");
let BPM = document.getElementById("BPM");
BPM.textContent = BPMSlider.value;

// Variables for manual BPM input
const manualBPMInput = document.getElementById("manualBPMInput");
const manualBPMSet = document.getElementById("manualBPMSet");

// Update BPM when set manually, ensure values are valid
manualBPMSet.onclick = function () {
    const newBPM = parseInt(manualBPMInput.value);

    if (isNaN(newBPM) || newBPM < 40 || newBPM > 300) {
        alert("Please input a valid BPM between 40-300 bpm");
        return;
    }

    BPMSlider.value = newBPM;
    BPM.textContent = newBPM;
    let animationTime = 60 / newBPM;
    document.getElementById("animation-container").style.animationDuration = `${animationTime}s`;
}

// Update the output when the slider is moved, update the animation
BPMSlider.oninput = function() {
    BPM.textContent = this.value;
    let animationTime = 60 / parseFloat(this.value); 
    const animation = document.getElementById("animation-container")
    animation.style.animationDuration = `${animationTime}s`
};


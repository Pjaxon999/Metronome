// test external link
console.log("hello world!");

// Variables for slider value
const BPMSlider = document.getElementById("BPMSlider");
let BPM = document.getElementById("BPM");
BPM.textContent = BPMSlider.value;

// Update the output when the slider is moved
BPMSlider.oninput = function() {
    BPM.textContent = this.value;
};
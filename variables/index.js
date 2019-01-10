const inputs = document.querySelectorAll('input');
const rangeImage = document.querySelector("#rangeImage");

function inputRange() {
    const inputName = this.name;
    var stuff = ""
    if (["spacing", "blur"].includes(inputName)) {
        stuff = "px"
    }
    console.log(this.value)
    rangeImage.style.setProperty(`--${this.name}`, this.value + stuff);
    // rangeImage.style = (`--${this.name}`, this.value + stuff)
}
inputs.forEach(input => input.addEventListener('change', inputRange));
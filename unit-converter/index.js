/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertButtonElement = document.getElementById("convert-button");
const inputEl = document.getElementById("input-el");
const bottomContainerElement = document.getElementById("bottom-container");

inputEl.addEventListener("keyup", function() {
    console.log(inputEl.value === "");
    if (inputEl.value === "") {
         bottomContainerElement.setAttribute("style", "display: none");
    }
        
})

convertButtonElement.addEventListener("click", function() {
    const inputValue = inputEl.value;
    if (inputValue !== "") {
        bottomContainerElement.setAttribute("style", "display: flex");
        const lengthConversionTextElement =
            document.getElementById("length-conversion-text");
        let textOfLengthConversionTextElement = "";
        const convertedToFeet = Number(inputValue) * 3.281;
        const convertedToMeters = Number(inputValue) / 3.281;
        console.log(convertedToFeet);
        textOfLengthConversionTextElement +=
            `${inputValue} meters = ${convertedToFeet.toFixed(3)} feet | ${inputValue} feet = ${convertedToMeters.toFixed(3)} meters`;
        lengthConversionTextElement.textContent = textOfLengthConversionTextElement;
        
        const volumeConversionTextElement =
            document.getElementById("volume-conversion-text");
        let textOfVolumeConversionTextElement = "";
        const convertedToGallons = Number(inputValue) * 0.264;
        const convertedToLiters = Number(inputValue) / 0.264;
        textOfVolumeConversionTextElement +=
            `${inputValue} liters = ${convertedToGallons.toFixed(3)} gallons | ${inputValue} gallons = ${convertedToLiters.toFixed(3)} liters`;
        volumeConversionTextElement.textContent = textOfVolumeConversionTextElement;
        
        const massConversionTextElement =
            document.getElementById("mass-conversion-text");
        let textOfMassConversionTextElement = "";
        const convertedToPounds = Number(inputValue) * 2.204;
        const convertedToKilos = Number(inputValue) / 2.204;
        textOfMassConversionTextElement +=
            `${inputValue} kilos = ${convertedToPounds.toFixed(3)} pounds | ${inputValue} pounds = ${convertedToKilos.toFixed(3)} kilos`;
        massConversionTextElement.textContent = textOfMassConversionTextElement;
    }
})

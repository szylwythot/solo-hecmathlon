import Hecmathlon from "./main.js"

function init() {

    const maxValueBtn = document.querySelector(".maxValue__btn");
    const greaterThanBtn = document.querySelector(".greaterThan__btn");
    const fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

    const maxValueInput = document.querySelector(".maxValue__input");
    const greaterThanInput = document.querySelector(".greaterThan__input");
    const fizzBuzzInput = document.querySelector(".fizzBuzz__input");

    const maxValueRoot = document.querySelector(".maxValue__container");
    const greaterThanRoot = document.querySelector(".greaterThan__container");
    const fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

    maxValueBtn.addEventListener('click', () => {
        const hecmathlon = new Hecmathlon(maxValueInput.value, Hecmathlon.getMaxValue);
        let result = hecmathlon.result();
        const maxValue = getOutput(result);
        logResult(maxValueRoot, maxValue);
    });
    greaterThanBtn.addEventListener('click', () => {
        const hecmathlon = new Hecmathlon(greaterThanInput.value, Hecmathlon.getGreaterThan);
        const greaterValues = getOutput(hecmathlon.result());
        logResult(greaterThanRoot, greaterValues);
    });
    fizzBuzzBtn.addEventListener('click', () => {
        const hecmathlon = new Hecmathlon(fizzBuzzInput.value, Hecmathlon.fizzBuzz);
        const result = getOutput(hecmathlon.result());
        logResult(fizzBuzzRoot, result);
    });
}

function getOutput(output) {
    return ["The function starts", ...output, "The function ends"];
}

function logResult(place, values){
    place.innerHTML = values.map(resultItem => "<div>" + resultItem + "</div>").join("");
}

init();

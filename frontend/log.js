import hECMAthlon from "./main.js"

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
        const hecmathlon = new Hecmathlon(maxValueInput.value, getMaxValue)
        const maxValue = getOutput(hecmathlon.result());
        logResult(maxValueRoot, maxValue);
    });
    greaterThanBtn.addEventListener('click', () => {
        const hecmathlon = new Hecmathlon(greaterThanInput.value, getGreaterThan);
        const greaterValues = getOutput(hecmathlon.result());
        logResult(greaterThanRoot, greaterValues);
    });
    fizzBuzzBtn.addEventListener('click', () => {
        const hecmathlon = new Hecmathlon(fizzBuzzInput.value, fizzBuzz);
        const result = getOutput(hecmathlon.result());
        logResult(fizzBuzzRoot, result);
    });
}

function getOutput(output) {
    return ["The function starts", ...output, "The function ends"];
}

function logResult(place, values){
    while(place.firstChild) {
        place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
        place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
}

init();

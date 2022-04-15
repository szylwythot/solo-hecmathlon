// import hECMAthlon from "./main.js"

class Hecmathlon{
    constructor(input, callFunction){
        this.result = () => callFunction(input);
    };

    static getMaxValue = function (input) {
        return input.split(",").reduce((previous,current) => (previous < current) ? current : previous);
    };
    
    static getGreaterThan = function (input) {
        return Array.from(Array(10).keys(), (value, index) => index + 1).filter((number) => number > input);
    };
    
    static fizzBuzz = function (input) {
        return [...Array(parseInt(input)).keys()].map((value, i) => {
            let index = i + 1;
            let result;
            if(index % 5 === 0 && index % 3 === 0) result = "FizzBuzz";
            else if(index % 3 === 0) result = "Fizz";
            else if(index % 5 === 0) result = "Buzz";
            else result = index;
            return result;
        });
    };
}

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
    if(!Array.isArray(output)){
        output = [output];
    }
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

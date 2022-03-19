function Hecmathlon(input, callFunction){
    this.result = () => callFunction(input);
}

let getMaxValue = function (input) {
    return input.split(",").reduce((previous,current) => (previous < current) ? current : previous);
};

let getGreaterThan = function (input) {
    return Array.from(Array(10).keys(), (value, index) => index + 1).filter((number) => number > input);
};

let fizzBuzz = function (input) {
    return [...Array(parseInt(input)).keys()].map((value, i) => {
        index = i + 1;
        let result;
        if(index % 5 === 0 && index % 3 === 0) result = "FizzBuzz";
        else if(index % 3 === 0) result = "Fizz";
        else if(index % 5 === 0) result = "Buzz";
        else result = index;
        return result;
    });
};

// export default hECMAthlon;
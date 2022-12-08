function feetToMeter(foot) {
    let meter = 0.305 * foot;
        return meter;
}

function meterToFeet(meter) {
    let foot = 3.279 * meter;
    return foot;
}
function calculate() {
    let input =document.getElementById("input").value;
    let result =feetToMeter(input);
    document.getElementById("result").innerHTML= result;
}
function calculate1() {
    let input1 =document.getElementById("input1").value;
    let result1=meterToFeet(input1);
    document.getElementById("result1").innerHTML= result1;
}
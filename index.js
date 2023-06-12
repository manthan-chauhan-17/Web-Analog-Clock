let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();

    // Getting hours , minutes , seconds from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm/2;     // Rotation of Hour hand
    let mRotation = 6*mm;               // Rotation of Minute Hand
    let sRotation = 6*ss;               // Rotation of Second Hand

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime , 1000);
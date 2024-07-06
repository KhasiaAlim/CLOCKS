// ----- //

let countdown1 = new Date("1 Aug, 2024 00:00:00");
let countdown2 = countdown1.getTime();
const interval = 1000;

let time = setInterval(function()  {
    
    let now = new Date().getTime();
    let time2 = countdown1 - now;
    const days = Math.floor(time2 / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time2 % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time2 % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

}, interval);

// ----- //
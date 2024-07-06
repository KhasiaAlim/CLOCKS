// ----- //

setInterval(() => {
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrrotation = 30 * hrr + min / 2;
    minrotation = 6 * min;
    secrotation = 6 * sec;

    hour.style.transform = `rotate(${hrrotation}deg)`
    minute.style.transform = `rotate(${minrotation}deg)`
    second.style.transform = `rotate(${secrotation}deg)`

}, 1000);

// ----- //
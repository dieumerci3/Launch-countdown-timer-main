const days = document.querySelector(".days1");
const hours = document.querySelector(".hours1");
const minutes = document.querySelector(".minutes1");
const seconds = document.querySelector(".seconds1");
const seconds2 = document.querySelector(".seconds2");

setInterval(() => {
    const d = new Date();
    days.innerHTML = d.getDay();
    hours.innerHTML = d.getHours();
    minutes.innerHTML = d.getMinutes();
    seconds.innerHTML = d.getSeconds();
    seconds2.innerHTML = d.getMilliseconds(); 
}, 10);

//changing the h1 into the uppercase
const weAre = document.querySelector(".launching");
text1 = "We're launching soon";
weAre.innerHTML = text1.toUpperCase();
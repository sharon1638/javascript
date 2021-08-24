const timeContainer=document.querySelector(".time"),
    nowAmpm=timeContainer.querySelector("#period");

function getTime(){
    const now=new Date();
    const minutes=now.getMinutes();
    let hours=now.getHours();
    const seconds=now.getSeconds();

    if(hours >=12) {
        nowAmpm.innerText="PM";
    }
    if(hours==0) {
        hours = 12;
    }
    if(hours>12) {
        hours=hours-12;
    }

    let ids = ["hour", "minutes", "seconds"];
    let values = [hours < 10 ? `0${hours}` : hours, minutes < 10 ? `0${minutes}` : minutes, seconds < 10 ? `0${seconds}` : seconds]
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function getCalendar(){
    const now= new Date();
    const day=now.getDay();//요일
    const month=now.getMonth();
    let date = now.getDate();
    const year=now.getFullYear();

let week=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let months= [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
];

    let ids=["dayname","months","daynum","year"];
    let values = [week[day], months[month], date < 10 ? `0${date}` : date, year];
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}
function init() {
    getTime();
    setInterval(getTime,1000);
    getCalendar();
}
init();
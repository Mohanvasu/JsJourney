const setDateTime = function(){
    let time = document.querySelector(".time");
    let date = document.querySelector(".date");
    const currDateTime = new Date();
    let hours = currDateTime.getHours();
    const mins = currDateTime.getMinutes()<10 ? `0${currDateTime.getMinutes()}` : `${currDateTime.getMinutes()}`;
    const sec = currDateTime.getSeconds()<10 ? `0${currDateTime.getSeconds()}` : `${currDateTime.getSeconds()}`;
    let status ="";
    hours = hours%12 || hours;
    status = currDateTime.getHours()>=12 ? "PM" : "AM";
    const currentTime = `${hours<10 ? `0${hours}`:`{hours}`}:${mins}:${sec} ${status}`;
    time.textContent=currentTime;


    const currDate = currDateTime.getDate() < 10 ? `0${currDateTime.getDate()}` : `${currDateTime.getDate()}`;
    const currMonth = currDateTime.getMonth() < 10 ? `0${currDateTime.getMonth()}` : `${currDateTime.getMonth()}`;
    const currYear = currDateTime.getFullYear();
    const currentDate = `${currDate}-${currMonth}-${currYear}`;

    date.textContent=currentDate;
}

setInterval(setDateTime,1000);

setDateTime()
const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const emptyd = document.querySelector('.emptyd');
const inputd = document.querySelector('#day');
const labeld = document.querySelector('.dd');
const validd = document.querySelector('.validd');
const emptym = document.querySelector('.emptym');
const inputm = document.querySelector('#month');
const labelm = document.querySelector('.mm');
const validm = document.querySelector('.validm');
const emptyy = document.querySelector('.emptyy');
const inputy = document.querySelector('#year');
const labely = document.querySelector('.yy');
const validy = document.querySelector('.validy');
const spand = document.querySelector('.spand')
const spanm = document.querySelector('.spanm')
const spany = document.querySelector('.spany')

let day;
let month;
let year;
let date = new Date();
let currMonth = date.getMonth() + 1;
let currYear = date.getFullYear();
let currDay = date.getDate();

btn.addEventListener('click', (e) => {
    e.preventDefault();
    day = document.querySelector('#day').value;
    month = document.querySelector('#month').value;
    year = document.querySelector('#year').value;
    let dob = `${day}-${month}-${year}`;
    dayCorrect();
    monthCorrect();
    yearCorrect();
    if(dayCorrect() && monthCorrect() && yearCorrect()){
        calcAge();
        emptyd.style.display = "none";
        inputd.style.border = "1px solid hsl(0, 1%, 44%)";
        labeld.style.color = "hsl(0, 1%, 44%)";

        validd.style.display = "none";
        inputd.style.border = "1px solid hsl(0, 1%, 44%)";
        labeld.style.color = "hsl(0, 1%, 44%)";

        emptym.style.display = "none";
        inputm.style.border = "1px solid hsl(0, 1%, 44%)";
        labelm.style.color = "hsl(0, 1%, 44%)";

        validm.style.display = "none";
        inputm.style.border = "1px solid hsl(0, 1%, 44%)";
        labelm.style.color = "hsl(0, 1%, 44%)";

        emptyy.style.display = "none";
        inputy.style.border = "1px solid hsl(0, 1%, 44%)";
        labely.style.color = "hsl(0, 1%, 44%)";

        validy.style.display = "none";
        inputy.style.border = "1px solid hsl(0, 1%, 44%)";
        labely.style.color = "hsl(0, 1%, 44%)";
    }
});

const dayCorrect = () => {
    if(day === ''){
        emptyd.style.display = "block";
        inputd.style.border = "1px solid hsl(0, 100%, 67%)";
        labeld.style.color = "hsl(0, 100%, 67%)";
        btn.style.top = '6.5rem';
        return false;
    }
    else if(day <= 0 || day > 31){
        validd.style.display = "block";
        inputd.style.border = "1px solid hsl(0, 100%, 67%)";
        labeld.style.color = "hsl(0, 100%, 67%)";
        btn.style.top = '6.5rem';
        return false;
    }
    else{
        return true;
    }
}

const monthCorrect = () => {
    if(month == ''){
        emptym.style.display = "block";
        inputm.style.border = "1px solid hsl(0, 100%, 67%)";
        labelm.style.color = "hsl(0, 100%, 67%)";
        btn.style.top = '6.5rem';
        return false;
    }
    else if(month > 12){
        validm.style.display = "block";
        inputm.style.border = "1px solid hsl(0, 100%, 67%)";
        labelm.style.color = "hsl(0, 100%, 67%)";
        btn.style.top = '6.5rem';
        return false;
    }
    else{
        return true;
    }
}

const yearCorrect = () => {
    if(year == ''){
        emptyy.style.display = "block";
        inputy.style.border = "1px solid hsl(0, 100%, 67%)";
        labely.style.color = "hsl(0, 100%, 67%)";
        btn.style.top = '6.5rem';
        return false;
    }
    else if(year > currYear){
        validy.style.display = "block";
        inputy.style.border = "1px solid hsl(0, 100%, 67%)";
        labely.style.color = "hsl(0, 100%, 67%)";
        btn.style.top = '6.5rem';
        return false;
    }
    else{
        return true;
    }
}

const calcAge = () => {
    let newYear = Math.abs(currYear - year);

    let newMonth = 0;
    if(currMonth >= month){
        newMonth = currMonth - month;
    } else{
        newYear--;
        newMonth = 12 + currMonth - month;
    }

    let newDay = 0;
    if(currDay >= day){
        newDay = currDay - day;
    }else{
       if(newMonth < 0){
        newMonth = 11;
        newYear--;
       }

       if(newMonth < currMonth){
        newDay++;
       }
    }

    spany.innerText = newYear;
    spand.innerText = newDay;
    spanm.innerText = newMonth;
}


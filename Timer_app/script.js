const semicircles= document.querySelectorAll('.semicircle');
const timer = document.querySelector('.timer');



const min=1;
const sec=1;

const minutes=min*60000;
const seconds=sec*1000;



const setTime=minutes+seconds;
const startTime=Date.now();
const futureTime= startTime+setTime;

const timerLoop = setInterval(countDownTimer);
countDownTimer();





function countDownTimer(){
    const currentTime = Date.now();
    const remainingTime = futureTime-currentTime;
    const angle = (remainingTime/setTime)*360;

    if(angle>180){
        semicircles[2].style.display='none';
        semicircles[0].style.transform='rotate(180deg)';
        semicircles[1].style.transform=`rotate(${angle}deg)`;
    }
    else{
        semicircles[2].style.display='block';
        semicircles[0].style.transform=`rotate(${angle}deg)`;
        semicircles[1].style.transform=`rotate(${angle}deg)`;
        
    }

    // timer 

    const mins = Math.floor((remainingTime/(1000*60))%60);
    const secs = Math.floor((remainingTime/1000)%60);
    
    timer.innerHTML=`
    <div>${mins}</div> 
    <div class="colon">:</div>
    <div>${secs}</div> `;






// end 
if(remainingTime<0){
    clearInterval(timerLoop);
    semicircles[0].style.display='none';
    semicircles[1].style.display='none';
    semicircles[2].style.display='none';
    
    timer.innerHTML=`
    <div>00</div> 
    <div class="colon">:</div>
    <div>00</div> `;

    timer.style.color = "lightgray"


}
   


}

// 10 sec ------>
function add10Sec(){
    document.querySelector('secs').Math.floor(remainingTime+10000);
}

// let workTittle = document.getElementsById('work');
// let breakTittle = document.getElementsById('break');


// let workTime=30;
// let breakTime=10;
// let seconds="00"

// //display
// window.onload = () =>{
//     document.getElementsById("minutes").innerHTML=workTime;
//     document.getElementsById("seconds").innerHTML=seconds;

//     workTittle.classList.add('active');
// }

// function start(){
//     seconds=59;
//     let workMinutes=workTime-1;
//     let breakMinutes=breakTime-1;

//     breakCount =0;

    
// }
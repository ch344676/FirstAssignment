var hour = 0,min = 0,sec = 0,t;

function increment(){

    sec++;
    if(sec>=60){
    sec=0;
    min++;
    if(min>=60){
         min=0;
         hour++;
      }
  }

document.getElementById("hr").innerHTML = hour > 9 ? hour : "0" + hour;
document.getElementById('min').innerHTML =  min > 9 ? min : "0" + min;
document.getElementById('sec').innerHTML =  sec > 9 ? sec : "0" + sec;
timer();
}
function timer(){
 t=setTimeout(increment,1000);
}


timer();


function calculateCountdown() {
    arrCalcReady=[];
    let dateCurrent = new Date();
    let dateTarget = new Date(window.targetY+"-"+window.targetM+"-"+window.targetD);
    currentY = parseInt(dateCurrent.getFullYear());
    currentM = parseInt((dateCurrent.getMonth()+1));
    currentD = parseInt(dateCurrent.getDate());
    dateCurrent = new Date(currentY+"-"+currentM+"-"+currentD);
    window.countY = 0;
    window.countM = 0;
    window.countD = 0;

    diffDays = dateTarget.getTime() - dateCurrent.getTime();
    diffDays = (diffDays / 1000 / 60 / 60 / 24);
    if (diffDays < 0) {expiredEvent ();};
    calcDaysPerMonth();
     
    // calculate single days
    if (currentM == window.targetM) {
     if (currentD == window.targetD) {
      window.countD = 0;
     }
     if (currentD > window.targetD) {
      window.countD = window.daysPerMonthCurrent - currentD + window.targetD;
     }
     if (currentD < window.targetD) {
      window.countD = window.targetD - currentD
     }
    };
    if (currentM != window.targetM) {
     if (currentD <= window.targetD) {
      window.countD = window.targetD - currentD;
     }
     else{
      window.countD = window.daysPerMonthCurrent - currentD + window.targetD;
     }
    };

diffDays = diffDays - window.countD;
window.countM = Math.round(diffDays/(365.25/12));
window.countY = (window.countM/12);
window.countM = (window.countM%12);
window.countY = Math.floor(window.countY);

arrCalcReady.push(window.countY,window.countM,window.countD);
};

// calculate leap year
function calcDaysPerMonth() {
	 const arrMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    window.daysPerMonthCurrent = arrMonth[parseInt(currentM)-1];
    window.daysPerMonthTarget = arrMonth[parseInt(window.targetM)-1];
    if (window.daysPerMonthCurrent == 28) {
     if (window.targetY % 4 == 0) {
      window.daysPerMonthCurrent = 29;
     }
    };
    if (window.daysPerMonthTarget == 28) {
     if (window.targetY % 4 == 0) {
      window.daysPerMonthTarget = 29;
     }
    }
};

function expiredEvent () {
    //TODO calculate expired time
};
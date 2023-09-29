function sendInfoMsg(clicked_id) {
 arrBtnPushed.push(parseInt(clicked_id.substr(7 ,1)));
 targetDate = arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)+1];
 const arrTarget = targetDate.split("-");
 window.targetY = parseInt(arrTarget[0]);
 window.targetM = parseInt(arrTarget[1]);
 window.targetD = parseInt(arrTarget[2]);
 calculateCountdown();
 if (window.countY>0) {
 info = window.webxdc.selfName + " would like to remind you of the event " + '\"' + arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)] + '\"' +" in " + window.countY + " year(s), " +  window.countM + " month(s) and " + window.countD + " day(s).";
 }
 else if (window.countM>0) {
   info = window.webxdc.selfName + " would like to remind you of the event " + '\"' + arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)] + '\"' +" in " +  window.countM + " month(s) and " + window.countD + " day(s).";
  }
  else if (window.countD>0) {
  info = window.webxdc.selfName + " would like to remind you of the event " + '\"' + arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)] + '\"' +" in " + window.countD + " day(s).";
  
  if (window.countD == 1) {
   info = window.webxdc.selfName + " would like to remind you of the event " + '\"' + arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)] + '\"' +" tomorrow.";      
  }
  
  }
  else {
   info = window.webxdc.selfName + " would like to remind you of the event " + '\"' + arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)] + '\"' + " today.";
  }
  
  if (window.expired == true) {
     info = window.webxdc.selfName + " would like to remind you that the event " + '\"' + arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)] + '\"' +" is already over.";
    };
 sendUpdate();
};

function sendInfoMsg(clicked_id) {
 localStorage.setItem("clicked_id", clicked_id);
 arrBtnPushed.push(parseInt(clicked_id.substr(7 ,1)));
 targetDate = arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)+1];
 const arrTarget = targetDate.split("-");
 window.targetY = parseInt(arrTarget[0]);
 window.targetM = parseInt(arrTarget[1]);
 window.targetD = parseInt(arrTarget[2]);
 calculateCountdown();
 tmpEvent = arrHistory[((parseInt(clicked_id.substr(7 ,1)))*2)];
 senderName = window.webxdc.selfName;
 
 //set string and language for infomessage
 window.fallback = true; 
 changeLanguage();
 if (window.expired == true) {
  info = strInfoMsgO.replace('%N', senderName).replace ('%E', tmpEvent);
  if (window.fallback == false) {
   changeLanguage();
   infoEn = strInfoMsgO.replace('%N', senderName).replace ('%E', tmpEvent);
   addEnglish();
  }
 }
 else if (window.countY>0) {
  info = strInfoMsgY.replace('%N', senderName).replace ('%E', tmpEvent).replace('%Y',window.countY).replace('%M',window.countM).replace('%D',window.countD);
  if (window.fallback == false) {
   changeLanguage();
   infoEn = strInfoMsgY.replace('%N', senderName).replace ('%E', tmpEvent).replace('%Y',window.countY).replace('%M',window.countM).replace('%D',window.countD);
   addEnglish();
  }
 }
 else if (window.countM>0) {
  info = strInfoMsgM.replace('%N', senderName).replace ('%E', tmpEvent).replace('%M',window.countM).replace('%D',window.countD);
  if (window.fallback == false) {
   changeLanguage();
   infoEn = strInfoMsgM.replace('%N', senderName).replace ('%E', tmpEvent).replace('%M',window.countM).replace('%D',window.countD);
   addEnglish();
  }
 }
 else if (window.countD>1) {
  info = strInfoMsgD.replace('%N', senderName).replace ('%E', tmpEvent).replace('%D',window.countD);
  if (window.fallback == false) {
   changeLanguage();
   infoEn = strInfoMsgD.replace('%N', senderName).replace ('%E', tmpEvent).replace('%D',window.countD);
   addEnglish();
  }
 }
 else if (window.countD == 1) {
  info = strInfoMsgTM.replace('%N', senderName).replace ('%E', tmpEvent);
  if (window.fallback == false) {
   changeLanguage();
   infoEn = strInfoMsgTM.replace('%N', senderName).replace ('%E', tmpEvent);
   addEnglish();
  }
 }
 else {
  info = strInfoMsgTD.replace('%N', senderName).replace ('%E', tmpEvent).replace('%D',window.countD);
  if (window.fallback == false) {
   changeLanguage();
   infoEn = strInfoMsgTD.replace('%N', senderName).replace ('%E', tmpEvent).replace('%D',window.countD);
   addEnglish();
  }
 }
 localStorage.setItem("info", info);
 location.assign("./chatmsg.html"); 
};

function addEnglish() {
 info = info + "\n" + "\n" + "<-- english below -->" + "\n" + "\n" + infoEn;
 window.fallback = true;
};

function sendSilentMsg() {
 info = localStorage.getItem("info");
 localStorage.setItem("silentMsgSent", "true");
 location.assign('./index.html');
}

function cancelSendMsg() {
 localStorage.setItem("info", "");
 location.assign("./index.html");
}

function sendChatMsg() {
 info = localStorage.getItem("info");
 localStorage.setItem("info", "");
 window.webxdc.sendToChat({
    text: info
});
location.assign('./index.html');
};
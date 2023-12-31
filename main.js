function hideTable() {
 for (let i=window.hideFrom;i<window.maxTable;i++) {
  document.getElementById(tableID+i.toString()).style.display = 'none';
  document.getElementById(btnID+i.toString()).disabled = true;
 };
  document.getElementById('btnPush0').disabled = true;
};

function hideInput() {
 for (let i = 0;i<5;i++) {
  document.getElementById(arrInputTable[i]).style.display = 'none';
 };
};

function showInput(clicked_id) {
 window.fallback = true; 
 changeLanguage();
 clickedID = parseInt(clicked_id.substr(10 ,1));
 clickedID = clickedID * 2;
 for (let i = 0;i<5;i++) { document.getElementById(arrInputTable[i]).style.display = '';
  if (clickedID < arrHistory.length) {
   document.getElementById("inputEvent").value = arrHistory[clickedID];
   document.getElementById("datepicker").value = arrHistory[clickedID+1];
   document.getElementById("btnDelete").disabled = false;
  };
  window.hideFrom = 0;
  hideTable();
 };
};

function clearStorage() {
 window.storedEvent = "";
 window.storedDate = "";
};

function fillTables() {
 eventLabelID = ("addEventLabel");
 for (i1=0;i1<6;i1++) {
  document.getElementById(eventLabelID+i1.toString()).innerHTML =  strAddEvent;
  document.getElementById(labelDatelD+i1.toString()).innerHTML = "";
  document.getElementById(tableID+i1.toString()).className = "table";
   for (a1=0;a1<3;a1++) {
    for (b=0;b<3;b++) {
     calcID = arrCalc[b];
     document.getElementById(calcID+a1.toString()).innerHTML = "---";
    }
   }
 };
 hideTable();
 let a=0;
  for (let i=0;i<arrHistory.length;i=i+2) {
   targetDate = arrHistory[i+1];
   const arrTarget = targetDate.split("-");
   window.targetY = parseInt(arrTarget[0]);
   window.targetM = parseInt(arrTarget[1]);
   window.targetD = parseInt(arrTarget[2]);
   document.getElementById(labelDatelD+a.toString()).innerHTML=arrHistory[i+1];
   calculateCountdown();
   for (let c=0;c<arrCalc.length;c++) {
    calcID = arrCalc[c];  document.getElementById(calcID+a.toString()).innerHTML = arrCalcReady[c];
    if (window.countY != 0) {
     document.getElementById(calcID+a.toString()).className = "tileLight";
    }
   };
   if (window.countY == 0 && window.countM != 0) {
    document.getElementById("calcM"+a.toString()).className = "tileLight";
    document.getElementById("calcD"+a.toString()).className = "tileLight";
   };
   if (window.countY == 0 && window.countM == 0 && window.countD != 0) {
    document.getElementById("calcD"+a.toString()).className = "tileLight";
   };      
    if (a<window.maxTable) {
     document.getElementById(tableID+a.toString()).className = "tableActiv";
     if (window.countY == 0 && window.countM == 0 && window.countD == 0) {
      document.getElementById(tableID+a.toString()).className = "tableNow";
     };
    if (window.countY == 0 && window.countM == 0 && window.countD > 0 && window.countD < 8) {
     document.getElementById(tableID+a.toString()).className = "table7Days";
    };
     if (window.expired == true) {
     	document.getElementById(tableID+a.toString()).className = "tableExpired";
     };
     document.getElementById(eventLabelID+a.toString()).innerHTML =  arrHistory[i];
     document.getElementById(window.btnID+a.toString()).disabled = false;     
    };
    if (a<window.maxTable-1) {
     document.getElementById(window.tableID+(a+1).toString()).style.display = '';
     a=a+1;
    };
  };
};

/* related to addevent */
function activateBtn() {
 if (tmpEvent!=document.getElementById('inputEvent').value || tmpDate!=document.getElementById('datepicker').value) {
  document.getElementById('btnSave').disabled = false;
  if (document.getElementById('datepicker').value=="" || document.getElementById('inputEvent').value=="") {
   document.getElementById('btnSave').disabled = true;
  }
 }
 else {
  document.getElementById('btnSave').disabled = true;
 }
};

function save() {
 window.fallback = true; 
 changeLanguage();
 senderName = window.webxdc.selfName;
 window.storedEvent = document.getElementById('inputEvent').value;
 window.storedDate = document.getElementById('datepicker').value;
 if (clickedID < arrHistory.length) {
  arrHistory[clickedID] = window.storedEvent;
  arrHistory[clickedID+1] = window.storedDate;
  info = strChangeEvent.replace('%N', senderName).replace ('%E', window.storedEvent);
  if (window.fallback == false) {
   changeLanguage();
   infoEn = strChangeEvent.replace('%N', senderName).replace ('%E', window.storedEvent);
   addEnglish();
  }
 }
 else {
  arrHistory.push(window.storedEvent,window.storedDate);
  info = strNewEvent.replace('%N', senderName).replace ('%E', window.storedEvent);
  if (window.fallback == false) {
   changeLanguage();
   infoEn = strNewEvent.replace('%N', senderName).replace ('%E', window.storedEvent);
   addEnglish();
  }
 };
 if (arrHistory.length >2) {sortEntries()};
 sendUpdate();
 clearStorage();
 hideInput();
 cancel();
};

function deleteEntry() {
 senderName = window.webxdc.selfName;
 info = strDeleteEvent.replace('%N', senderName).replace ('%E', arrHistory[clickedID]);
 if (window.fallback == false) {
  changeLanguage();
  infoEn = strDeleteEvent.replace('%N', senderName).replace ('%E', arrHistory[clickedID]);
  addEnglish();
  window.fallback = true;
 }
 arrHistory.splice(clickedID,2);
 sendUpdate();
 cancel();
};

function cancel() {
 clearStorage();
 location.assign('./index.html');
};

function SilentMsg() {
 arrHistory = JSON.parse(localStorage.getItem("arrHistory"));
 silentMsgSent = localStorage.getItem("silentMsgSent");
 info = localStorage.getItem("info");
 if (info != null && info != "" && silentMsgSent == "true") {
//hide Button if silent infomessage was sent
 clicked_id = localStorage.getItem("clicked_id");
 document.getElementById(clicked_id).style.display = 'none';
 localStorage.setItem("silentMsgSent", "false");
 sendUpdate();
 localStorage.setItem("info", "");
 }
}

function sortEntries() {
sorted = false;
 while (sorted == false) {
  sorted = true;
  for (i=0;i<arrHistory.length;i=i+2) {
   if (arrHistory[i+1]>arrHistory[i+3]) {
    sorted = false;
    tempEvent=arrHistory[i];
    tempDate=arrHistory[i+1];
    arrHistory[i+1]=arrHistory[i+3];
    arrHistory[i]=arrHistory[i+2];
    arrHistory[i+2]=tempEvent;
    arrHistory[i+3]=tempDate;
   };
  };
 };
};

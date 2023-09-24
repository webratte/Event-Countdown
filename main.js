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

function update() {
 let promise = window.webxdc.setUpdateListener((update) => {
 arrHistory = update.payload.arrHistory;
 serial= update.serial;
 max_serial = update.max_serial;
 if (max_serial == serial) {
  fillTables();
 };
 }, );
};

function clearStorage() {
 window.storedEvent = "";
 window.storedDate = "";
};

function fillTables() {
 eventLabelID = ("addEventLabel");
 let a=0;
  for (let i=0;i<arrHistory.length;i=i+2) {
   targetDate = arrHistory[i+1];
   const arrTarget = targetDate.split("-");
   window.targetY = parseInt(arrTarget[0]);
   window.targetM = parseInt(arrTarget[1]);
   window.targetD = parseInt(arrTarget[2]);
   document.getElementById(labelDatelD+a.toString()).innerHTML=arrHistory[i+1];
   calculateCountdown();
   for (let c=0;c<arrCalc.length;c++){
    calcID = arrCalc[c];  document.getElementById(calcID+a.toString()).innerHTML = arrCalcReady[c];
    

//TODO Remove this loop if calculation of expired events is implemented
    if (diffDays < 0) {
     document.getElementById(calcID+a.toString()).innerHTML = "-0-";
    };
   };
    if (a<window.maxTable) {
     document.getElementById(tableID+a.toString()).className = "tableActiv";
     if (window.countY == 0 && window.countM == 0 && window.countD == 0) {
      document.getElementById(tableID+a.toString()).className = "tableNow";
     };
if (window.countY == 0 && window.countM == 0 && window.countD > 0 && window.countD < 8) { document.getElementById(tableID+a.toString()).className = "table7Days";
};
     if (diffDays < 0) { document.getElementById(tableID+a.toString()).className = "tableExpired";
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

function sendInfoMsg(clicked_id) {
 alert ("This feature is not yet implemented");
};

/* related to addevent */
function activateBtn() {
 if (tmpEvent!=document.getElementById('inputEvent').value || tmpDate!=document.getElementById('datepicker').value) {
  document.getElementById('btnSave').disabled = false;
  if (document.getElementById('datepicker').value=="" || document.getElementById('inputEvent').value=="") {
   document.getElementById('btnSave').disabled = true;
  };
 }
 else {
  document.getElementById('btnSave').disabled = true;
 }
};

function save() {
// send new updates
 window.storedEvent = document.getElementById('inputEvent').value;
 window.storedDate = document.getElementById('datepicker').value;
 info = window.webxdc.selfName+ " added an countdown for " + '\'' + window.storedEvent + '\'' +" this message will refined later. Also for changed Events";
 if (clickedID < arrHistory.length) {
  arrHistory[clickedID] = window.storedEvent;
  arrHistory[clickedID+1] = window.storedDate;
 }
 else {
  arrHistory.push(window.storedEvent,window.storedDate);
 };
 sendUpdate();
 clearStorage();
 hideInput();
 cancel();
};

function sendUpdate() {
 window.webxdc.sendUpdate({
   payload: {
   arrHistory,
   },
   info,
  }, info);
};

function deleteEntry() {
 info = window.webxdc.selfName+ " deleted an event. This message will be refined later";
 arrHistory.splice(clickedID,2);
 sendUpdate();
 cancel();
};

function cancel() {
 clearStorage();
 location.assign('./index.html');
};

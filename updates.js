function update() {
    let promise = window.webxdc.setUpdateListener((update) => {
// begin handling "read only newest update"
      readUnixtime();
      if (window.storedSentTime === null) {
        window.storedSentTime = 0;
      };

      window.CurrentTime = update.payload.CurrentTime;
      if (window.CurrentTime === undefined) {
        window.CurrentTime = 1;
      };

      if (window.CurrentTime >= window.storedSentTime) {
        storeIncomingTime();
// end handling "read only newest update"
        arrHistory = update.payload.arrHistory;
        serial= update.serial;
        max_serial = update.max_serial;
        if (max_serial == serial) {
          if (arrHistory == null) {arrHistory = ""}
            localStorage.setItem("arrHistory", JSON.stringify(arrHistory));
              SilentMsg();
          fillTables();
        };
      }
    }, );
};

   function sendUpdate() {
// begin handling "read only newest update"
    storeSentTime();
// end handling "read only newest update"
    window.webxdc.sendUpdate({
      payload: {
      arrHistory, CurrentTime,
      },
      info,
     }, info);
   };

// store time if send-button is pressed
function storeSentTime() {
  window.CurrentTime = Date.now();
  localStorage.setItem('sentUnixTime', window.CurrentTime);
};

// store time of incoming update
function storeIncomingTime() {
  localStorage.setItem('sentUnixTime', window.CurrentTime);	
};

// read time of already exist update
function readUnixtime() {
  window.storedSentTime = localStorage.getItem('sentUnixTime');
};

function update() {
    let promise = window.webxdc.setUpdateListener((update) => {
        arrHistory = update.payload.arrHistory;
        serial= update.serial;
        max_serial = update.max_serial;
        if (max_serial == serial) {
          if (arrHistory == null) {arrHistory = ""}
            localStorage.setItem("arrHistory", JSON.stringify(arrHistory));
              SilentMsg();
          fillTables();
        };
    }, );
};

   function sendUpdate() {
    window.webxdc.sendUpdate({
      payload: {
      arrHistory,
      },
      info,
     }, info);
   };

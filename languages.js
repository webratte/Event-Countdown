function changeLanguage() {
     browserLang = window.navigator.language;
     browserLang = browserLang.slice(0, 2).toLowerCase();
     if (window.fallback == false) {browserLang = ""};
          if (browserLang == "de") {
               //german
               window.fallback = false;
               strBtnPush = "Sende\nErinnerung";
               strYear = "Jahre";
               strMonth = "Monate";
               strDay = "Tage";
               strAddEvent = "Ereignis hinzufügen";
               strChangeEventTitle = "Ereignis aktualisieren";
               strBtnCancel = "Abbrechen";
               strBtnSend = "Speichern & senden";
               strBtnDelete = "Eintrag löschen";
               strIptLabelE = "Ereignis";
               strIptDate = "Zieldatum";
               strWindowMsg = "Wollen Sie eine stille Nachricht in den aktuellen Chat senden? \n \n Oder wollen Sie eine normale Chatnachricht senden um eine Benachrichtigung auszulösen?";
               strChatMsg = "Chat-Nachricht";
               strSilentMsg = "Stille Nachricht";
               strInfoMsgY = "%N möchte dich an das Ereignis \"%E\" in %Y Jahren, %M Monaten und %D Tagen erinnern.";
               strInfoMsgM = "%N möchte dich an das Ereignis \"%E\" in %M Monaten und %D Tagen erinnern.";
               strInfoMsgD = "%N möchte dich an das Ereignis \"%E\" in %D Tagen erinnern.";
               strInfoMsgTM = "%N möchte dich an das Ereignis \"%E\" morgen erinnern.";
               strInfoMsgTD = "%N möchte dich an das Ereignis \"%E\" heute erinnern.";
               strInfoMsgO = "%N hat gerade festgestellt, dass das Ereignis \"%E\" bereits vorüber ist.";
               strNewEvent = "%N hat einen neuen Countdown für das Event \"%E\" hinzugefügt.";
               strChangeEvent = "%N hat gerade das Event \"%E\" geändert.";
               strDeleteEvent = "Der Countdown für das Event \"%E\" wurde gerade durch %N entfernt.";
              }
          else if (browserLang == "fr") {
               //french
               window.fallback = false;
               strBtnPush = "Envoyer\nun rappel";
               strYear = "Années";
               strMonth = "Mois";
               strDay = "Jours";
               strAddEvent = "Ajouter un évènement";
               strChangeEventTitle = "Événement de mise à jour";
               strBtnCancel = "Annuler";
               strBtnSend = "Enregistrer & envoyer";
               strBtnDelete = "Supprimer l'entrée";
               strIptLabelE = "Evènement";
               strIptDate = "Date cible";
               strWindowMsg = "Voulez-vous envoyer un message silencieux dans le chat en cours?\n\nOu souhaitez-vous envoyer un message de chat normal pour déclencher une notification?";
               strChatMsg = "Message de discussion";
               strSilentMsg = "Message silencieux";
               strInfoMsgY = "%N veut vous rappeler l'événement \"%E\" dans %Y années, %M mois et %D jours";
               strInfoMsgM = "%N veut vous rappeler l'événement \"%E\" dans %M mois et %D jours.";
               strInfoMsgD = "%N veut vous rappeler l'événement \"%E\" dans %D jours.";
               strInfoMsgTM = "%N aimerait vous rappeler l'événement \"%E\" de demain.";
               strInfoMsgTD = "%N aimerait vous rappeler l'événement \"%E\" d'aujourd'hui.";
               strInfoMsgO = "%N vient de découvrir que l'événement \"%E\" est déjà passé.";
               strNewEvent = "%N a ajouté un nouveau compte à rebours pour l'événement \"%E\".";
               strChangeEvent = "%N vient de modifier l'événement \"%E\".";
               strDeleteEvent = "Le compte à rebours de l'événement \"%E\" vient d'être supprimé par %N.";
               }
          else {
               //fallback
               strBtnPush = "Send\nReminder";
               strYear = "Years";
               strMonth = "Months";
               strDay = "Days";
               strAddEvent = "Add an Event";
               strChangeEventTitle = "Update event";
               strBtnCancel = "Cancel";
               strBtnSend = "Save & send";
               strBtnDelete = "Delete Entry";
               strIptLabelE = "Event";
               strIptDate = "Target date";
               strWindowMsg = "Do you want to send a silent message in the current chat?\nOr do you want to send a normal chat message to trigger a notification?";
               strChatMsg = "Chat message";
               strSilentMsg = "Silent message";
               strInfoMsgY = "%N wants to remind you of the event \"%E\" in %Y years, %M months and %D days.";
               strInfoMsgM = "%N wants to remind you of the event \"%E\" in %M months and %D days.";
               strInfoMsgD = "%N wants to remind you of the event \"%E\" in %D days.";
               strInfoMsgTM = "%N would like to remind you of the event \"%E\" tomorrow.";
               strInfoMsgTD = "%N would like to remind you of the event \"%E\" today.";
               strInfoMsgO = "%N has just discovered that event \"%E\" has already passed.";
               strNewEvent = "%N added a new countdown for the event \"%E\".";
               strChangeEvent = "%N just modified event \"%E\".";
               strDeleteEvent = "The countdown for event \"%E\" has just been removed by %N.";
          }
if (infoSite == false) {
 document.getElementById("inputlabel").innerHTML=strIptLabelE;
 document.getElementById("datepickerlabel").innerHTML=strIptDate;
 if (window.page=="index") {
  const arrLang=[strYear, strMonth, strDay];
  const arrLabel=["labelY", "labelM", "labelD"];
  for (let i=0;i<arrLang.length;i++) {
   string = arrLang[i];
   labelID = arrLabel[i];
   calcID = arrCalc[i];
   for (let a=0;a<window.maxTable;a++) {
    document.getElementById(labelID+a.toString()).innerHTML = string;
    document.getElementById(calcID+a.toString()).innerHTML = "---";
    document.getElementById(btnID+a.toString()).value=strBtnPush;
    document.getElementById(eventLabelID+a.toString()).innerHTML =  strAddEvent;
    document.getElementById(labelDatelD+a.toString()).innerHTML="";
   }
  }
 }
 else {
  document.getElementById('newEventTitle').innerHTML =  strAddEvent;
  document.getElementById('btnSave').value = strBtnSend;
  document.getElementById('btnCancel').value = strBtnCancel;
  document.getElementById('btnDelete').value = strBtnDelete;
 }
}
else {
 //translations for "chatmsg.html"
 document.getElementById('infoTxt').innerHTML = strWindowMsg;
 document.getElementById('btnChatMsg').value = strChatMsg;
 document.getElementById('btnSilentMsg').value = strSilentMsg;
 document.getElementById('cancel').value = strBtnCancel;
}
};

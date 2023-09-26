function changeLanguage() {
     browserLang = window.navigator.language;
     browserLang = browserLang.slice(0, 2).toLowerCase();
          if (browserLang == "de") {
               //german
               strBtnPush = "Sende\nInfonachricht";
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
              }
          else if (browserLang == "fr") {
               //french
               strBtnPush = "Envoyer un\nmessage\nd'information"
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
          }               
          else {
               //fallback
               strBtnPush = "Send\nInfomessage";
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
          }
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
};
var isNavOpen = false;

function changeNav() {
    if(isNavOpen) {
     document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("main").style.marginLeft = "0px";
      document.body.style.backgroundColor = "white";
      speak("You have closed the menu");
      isNavOpen = false;     
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      speak("You have opened the menu," + helpText);
      isNavOpen = true;
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {

}

var lessonFocus = 0;
var sectionFocus = 0;
var inLesson = true;
var helpText = "Use alt and the arrow keys to scroll through and select an option, to start coding."

function incrementHelpFocus(){
  if(inLesson){
    lessonFocus++;
    if(lessonFocus > maxLessons.length)
      lessonFocus = 0;
  }
  else{
    sectionFocus++;
    if(sectionFocus > maxLessons[lessonFocus-1]-1)
      sectionFocus = 0;
  }
}

function decrementHelpFocus(){
  if(inLesson){
    lessonFocus--;
    if(lessonFocus < 0)
      lessonFocus = maxLessons.length;
  }
  else{
    sectionFocus--;
    if(sectionFocus < 0)
      sectionFocus = maxLessons[lessonFocus-1]-1;
  }
}

function doc_keyUp(e) {
    e.preventDefault();
    // this would test for whichever key is 40 and the ctrl key at the same time
    if (e.altKey) {
      if (e.keyCode == 72) { // Alt+H
        if (isNavOpen)
          changeNav();
        else{
          lessonFocus = 0;
          sectionFocus = 0;
          inLesson = true;
          changeNav();
        }
      }
      else if (isNavOpen){
        if (e.keyCode == 38) {//alt+down
          decrementHelpFocus();
        }
        else if(e.keyCode == 40){//alt+up
          incrementHelpFocus(); 
        }
        else if(e.keyCode == 39){//alt+right
          if(inLesson && lessonFocus == 0)
            speak(helpText);
          else if(inLesson && lessonFocus != 0){
            inLesson = false;
            speak("Lesson " + lessonFocus + " point " + sectionFocus)
          }
          else if(!inLesson){
            window.location.href = '/classroom?lesson='+lessonFocus+'&section='+sectionFocus;
            inLesson = true;
            sectionFocus = 0;
            lessonFocus = 0;
          }
        }
        else if(e.keyCode == 37){//alt_left
          if(!inLesson){
            inLesson = true;
            sectionFocus = 0;
          }
        }
        if(inLesson && lessonFocus == 0 && e.keyCode != 39)
          speak("Help");
        else if(inLesson && lessonFocus != 0)
          speak("Lesson " + lessonFocus);
        else if(e.keyCode != 39)
          speak("Lesson " + lessonFocus + " point " + sectionFocus);
      }
    }
    
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);

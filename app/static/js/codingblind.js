var isNavOpen = false;
var msg = new SpeechSynthesisUtterance();

function speak(text) {
  speechSynthesis.pause();
  speechSynthesis.cancel();
  msg = new SpeechSynthesisUtterance();
  msg.text = text;
  speechSynthesis.speak(msg);
  speechSynthesis.resume();
}

function runCode() {
  console.log('fixme');
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    speak("You have opened the help menu! " + helpText);
    isNavOpen = true;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    speak("You have closed the help menu!");
    isNavOpen = false;
}

var lessonFocus = 0;
var sectionFocus = 1;
var inLesson = true;
var helpText = "To navigate press alt with the up or down arrow key to scroll between options. Press alt and the right arrow key to select that option. Press alt with the left arrow key to move back to the previous options. You can also press alt and h to exit the help menu."

function incrementHelpFocus(){
  if(inLesson){
    lessonFocus++;
    if(lessonFocus > maxLessons.length)
      lessonFocus = 0;
  }
  else{
    sectionFocus++;
    if(sectionFocus > maxLessons[lessonFocus-1])
      sectionFocus = 1;
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
    if(sectionFocus < 1)
      sectionFocus = maxLessons[lessonFocus-1];
  }
}

function doc_keyUp(e) {
    e.preventDefault();
    // this would test for whichever key is 40 and the ctrl key at the same time
    if (e.altKey) {
      if (e.keyCode == 72) { // Alt+H
        if (isNavOpen)
          closeNav();
        else{
          lessonFocus = 0;
          sectionFocus = 1;
          inLesson = true;
          openNav();
        }
      }
      else if (e.keyCode == 49) // Alt+1
        window.location.href = '/turtle';
      else if (e.keyCode == 82) // Alt+R
        runCode();
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
            speak("Lesson " + lessonFocus + " section " + sectionFocus)
          }
          else if(!inLesson){
            window.location.href = '/turtle?lesson='+lessonFocus+'&section='+sectionFocus;
            inLesson = true;
            sectionFocus = 1;
            lessonFocus = 0;
          }
        }
        else if(e.keyCode == 37){//alt_left
          if(!inLesson){
            inLesson = true;
            sectionFocus = 1;
          }
        }
        if(inLesson && lessonFocus == 0 && e.keyCode != 39)
          speak("Help");
        else if(inLesson && lessonFocus != 0)
          speak("Lesson " + lessonFocus);
        else if(e.keyCode != 39)
          speak("Lesson " + lessonFocus + " section " + sectionFocus);
      }
    }
    
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);

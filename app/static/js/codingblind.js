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
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    speak("You have opened the help menu!");
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

function doc_keyUp(e) {
    e.preventDefault();
    // this would test for whichever key is 40 and the ctrl key at the same time
    if (e.altKey) {
      if (e.keyCode == 72) { // Alt+H
        if (isNavOpen)
          closeNav();
        else 
          openNav();
      }
      else if (e.keyCode == 49) // Alt+1
        window.location.href = '/turtle';
      else if (e.keyCode == 82) // Alt+R
        runCode();
    }
    
}
// register the handler 
document.addEventListener('keyup', doc_keyUp, false);

var isNavOpen = false;
var msg = new SpeechSynthesisUtterance();


var punctuation = {
  '\t':'tab',
  ':':'colon',
  '\'':'quote',
  '\"':'double quote',
  '=':'equal',
  '+':'plus',
  '-':'minus',
  '<':'less than',
  '>':'greater than',
  '!':'exclamation mark',
  '(':'open parantheses',
  ')':'close parantheses',
  '{':'open curly brace',
  '}':'close curly brace',
  '[':'open square bracket',
  ']':'close square bracket',
  ',':'comma',
  '.':'dot',
  '\n':'newline'
}

function substitutePunctuation(text){
  for (var i = 0; i < text.length; i++) {
    if(text[i] in punctuation){
      text = text.replace(text[i],' ' + punctuation[text[i]] +' ');
    }
  }  
  return text;
}

function setupSpeech(text) {
  msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = .8; // 0.1 to 10
  msg.pitch = 1.1; //0 to 2
  msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'english'; })[0];
  return msg;
}

function speak_punc(text) {
  text = substitutePunctuation(text);

  speechSynthesis.pause();
  speechSynthesis.cancel();

  msg = setupSpeech(text);

  speechSynthesis.speak(msg);
  speechSynthesis.resume();

//   speechSynthesis.getVoices().forEach(function(voice) {
//   console.log(voice.name, voice.default ? '(default)' :'');
// });
}

function speak(text) {
  speechSynthesis.pause();
  speechSynthesis.cancel();

  msg = setupSpeech(text);

  speechSynthesis.speak(msg);
  speechSynthesis.resume();

//   speechSynthesis.getVoices().forEach(function(voice) {
//   console.log(voice.name, voice.default ? '(default)' :'');
// });
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
var helpText = "Press alt with different arrow keys to access all content. Use up and down to scroll through options and right to select an option. To start coding, press alt and the spacebar."

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

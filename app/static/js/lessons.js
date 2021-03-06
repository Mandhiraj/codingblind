var PAGECONTENT = {
  HEADING: {value: 1, name: "Heading", htmlId: "Heading"},
  CONTENT: {value: 2, name: "Content", htmlId: "Content"},
  CHALLENGE: {value: 3, name: "Challenge", htmlId: "Challenge"},
  EXAMPLE: {value: 4, name: "Example", htmlId: "Example"},
  HINTS: {value: 5, name: "Hint", htmlId: "Hints"},
  RUNCODE: {value: 6, name: "Run Code", htmlId: "RunCode"},
  NEXTLESSON: {value: 7, name: "Next Lesson", htmlId: "NextLesson"}
}

function read_heading() {
  console.log('hello ready state change')
  var lessonNumber = document.getElementById("LessonNumber").textContent;
  var sectionNumber = document.getElementById("SectionNumber").textContent;
  var heading = $("#subheading").text();
  var message = "Lesson " + lessonNumber + " Section " + sectionNumber + heading; 
  speak(message);
}

var navFocus = PAGECONTENT.HEADING;
var helpFocus = 0;

function incrementNavFocus(navFocus) {
  switch (navFocus.value) {
    case 1: return PAGECONTENT.CONTENT;
    case 2: return PAGECONTENT.CHALLENGE;
    case 3: return PAGECONTENT.EXAMPLE;
    case 4: return PAGECONTENT.HINTS;
    case 5: return PAGECONTENT.RUNCODE;
    case 6: return PAGECONTENT.NEXTLESSON;
    case 7: return PAGECONTENT.HEADING;
  }
}

function decrementNavFocus(navFocus) {
  switch (navFocus.value) {
    case 1: return PAGECONTENT.NEXTLESSON;
    case 2: return PAGECONTENT.HEADING;
    case 3: return PAGECONTENT.CONTENT;
    case 4: return PAGECONTENT.CHALLENGE;
    case 5: return PAGECONTENT.EXAMPLE;
    case 6: return PAGECONTENT.HINTS;
    case 7: return PAGECONTENT.RUNCODE;
  }
}

function doc_keyUp(e) {
  e.preventDefault();
  if (e.altKey) {
    if(!isNavOpen){
      if (e.keyCode == 38 && document.getElementById("sectionNum").innerText == 0) {
        if(navFocus === PAGECONTENT.HEADING){
            navFocus = PAGECONTENT.NEXTLESSON;
        } else if(navFocus === PAGECONTENT.CONTENT) {
            navFocus = PAGECONTENT.HEADING;
        } else if(navFocus === PAGECONTENT.NEXTLESSON) {
            navFocus = PAGECONTENT.CONTENT;
        }
        speak_content(navFocus.name);
      }
      else if (e.keyCode == 40 && document.getElementById("sectionNum").innerText == 0) {
        if(navFocus === PAGECONTENT.HEADING){
          navFocus = PAGECONTENT.CONTENT;
        } else if(navFocus === PAGECONTENT.CONTENT) {
          navFocus = PAGECONTENT.NEXTLESSON;
        } else if(navFocus === PAGECONTENT.NEXTLESSON) {
          navFocus = PAGECONTENT.HEADING;
        }
        speak_content(navFocus.name);
      }
      else if (e.keyCode == 38) {
        navFocus = decrementNavFocus(navFocus);
        speak_content(navFocus.name);
      }
      else if (e.keyCode == 39) {
        console.log(navFocus);
        var elt = document.getElementById(navFocus.htmlId);
        if (elt !== null) {
          if (navFocus === PAGECONTENT.NEXTLESSON || navFocus === PAGECONTENT.RUNCODE)
            elt.click();
          else if (elt.innerText === "")
            speak_content("There is no " + navFocus.name + " for this challenge");
          else
            speak_content(elt.innerText);
        }
        else {
          speak_content("This is the final lesson");
        }
      }
      else if (e.keyCode == 37) { //alt+left
        var elt = document.getElementById("PrevLesson");
        if (elt !== null) {
          if (navFocus === PAGECONTENT.NEXTLESSON)
            elt.click();
          else if (elt.innerText === "")
            speak_content("There is no previous lesson for this challenge");
          else
            speak_content(elt.innerText);
        }
        else {
          speak_content("This is the first lesson");
        }
      }
      else if (e.keyCode == 40) {
        navFocus = incrementNavFocus(navFocus);
        speak_content(navFocus.name);
      }
      else if(e.keyCode == 71){
        console.log('alt g');
        editor.focus();
      }
    }
  }
}

// register the handler
document.addEventListener('keyup', doc_keyUp, false);

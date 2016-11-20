var editor; 

var prev_ln = 0;
var focused = false;
// speak the line number and then the contents of the line
function speak_line(ln) {
  speak_punc("line " + ln + " " + editor.getLine(ln));
}

var cursorChanged = function(){
  if(focused) {
    tmp = editor.getCursor().line;
    if(prev_ln != tmp){
      prev_ln = tmp;
      speak_line(tmp);
    }
  }
}

var editorFocused = function(){
  focused = true;
  speak_punc("There are " + editor.lineCount() + " lines in the editor. " + "line " + editor.getCursor().line + editor.getLine(editor.getCursor().line));
  //speak_line(editor.getCursor().line)
}

var editorBlurred = function() {
  focused = false;
}

window.onload = function () { 
    editor = CodeMirror.fromTextArea(document.getElementById("code"),{
          lineNumbers: true,
          theme: "monokai",
          mode:  "python",
          firstLineNumber: 0
    });
    editor.on("cursorActivity", cursorChanged);
    editor.on("focus", editorFocused); // read number of lines and current line.
    editor.on("blur", editorBlurred); // read number of lines and current line.

  };
// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit(output) { 
  //var prog = document.getElementById("code").value;
  var prog = editor.getValue();
  var mypre = document.getElementById("output"); 
  mypre.innerHTML = ''; 
  Sk.pre = "output";
  Sk.configure({output:outf, read:builtinRead}); 
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
  var myPromise = Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody("<stdin>", false, prog, true);
  });
  myPromise.then(function(mod) {
    document.getElementById("output").style.visibility = "visible";
    console.log(output);
    var codeOutput = document.getElementById("output").innerText;
    if (output == codeOutput) {
      document.getElementById("success").style.visibility = "visible";
      speak(document.getElementById("success").innerText);
    }
    else
      speak(codeOutput);
    console.log('success');
  },
  function(err) {
    document.getElementById("output").innerText = err.toString();
    speak("error" + err.toString());
  });
} 


var PAGECONTENT = {
  HEADING: {value: 1, name: "Heading", htmlId: "Heading"},
  CONTENT: {value: 2, name: "Content", htmlId: "Content"},
  CHALLENGE: {value: 3, name: "Challenge", htmlId: "Challenge"},
  EXAMPLE: {value: 4, name: "Example", htmlId: "Example"},
  HINTS: {value: 5, name: "Hints", htmlId: "Hints"},
  NEXTLESSON: {value: 6, name: "Next Lesson", htmlId: "NextLesson"}
}

function read_heading() {
  console.log('hello ready state change')
  var lessonNumber = document.getElementById("LessonNumber").textContent;
  var sectionNumber = document.getElementById("SectionNumber").textContent;
  var heading = $("#subheading").text();
  var message = "Lesson " + lessonNumber + " Section " + sectionNumber + heading; 
  speak(message);
}

var navFocus = PAGECONTENT.NEXTLESSON;
var helpFocus = 0;

function incrementNavFocus(navFocus) {
  switch (navFocus.value) {
    case 1: return PAGECONTENT.CONTENT;
    case 2: return PAGECONTENT.CHALLENGE;
    case 3: return PAGECONTENT.EXAMPLE;
    case 4: return PAGECONTENT.HINTS;
    case 5: return PAGECONTENT.NEXTLESSON;
    case 6: return PAGECONTENT.HEADING;
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
  }
}

function doc_keyUp(e) {
  e.preventDefault();
  if (e.altKey) {
    if(!isNavOpen){
      if (e.keyCode == 38) {
        navFocus = decrementNavFocus(navFocus);
        speak(navFocus.name);
      }
      else if (e.keyCode == 39) {
        var elt = document.getElementById(navFocus.htmlId);
        if (elt !== null) {
          if (navFocus === PAGECONTENT.NEXTLESSON)
            elt.click();
          else if (elt.innerText === "")
            speak("There is no " + navFocus.name + " for this challenge");
          else
            speak(elt.innerText);
        }
        else
          speak("This is the final lesson");
      }
      else if (e.keyCode == 37) { //alt+left
        var elt = document.getElementById("PrevLesson");
        if (elt !== null) {
          if (navFocus === PAGECONTENT.NEXTLESSON)
            elt.click();
          else if (elt.innerText === "")
            speak("There is no previous lesson for this challenge");
          else
            speak(elt.innerText);
        }
        else
          speak("This is the first lesson");
      }
      else if (e.keyCode == 40) {
        navFocus = incrementNavFocus(navFocus);
        speak(navFocus.name);
      }
    }
  }
}

// register the handler
document.addEventListener('keyup', doc_keyUp, false);
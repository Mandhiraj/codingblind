
var editor; 
var filename;
var prev_ln = 0;
var focused = false;

var focusedfilename = false



var editorCursorChanged = function(){
  if(focused) {
    tmp = editor.getCursor().line;
    if(prev_ln != tmp){
      prev_ln = tmp;
      speak_line(tmp);
    }
    ch   = editor.getCursor().ch;
    line = editor.doc.getLine(tmp);
    console.log(ch);
    if (ch >= 1){
      speak_code(line[ch-1]);
    }
  }
}

var filenameCursorChanged = function(){
  if(focusedfilename) {
    ch   = filename.getCursor().ch;
    line = filename.doc.getLine(tmp);
    console.log(ch);
    if (ch >= 1){
      speak_code(line[ch-1]);
    }
  }
}

var filenameFocused = function(){
  focused = true;
  speak_code("Filename " + filename.getLine(filename.getCursor().line));
}

var filenameBlurred = function() {
  focused = false;
}

var editorFocused = function(){
  focused = true;
  if(editor.lineCount() == 1)
    speak_code("There is " + editor.lineCount() + " line in the editor. " + "line " + editor.getCursor().line + editor.getLine(editor.getCursor().line));
  else
    speak_code("There are " + editor.lineCount() + " lines in the editor. " + "line " + editor.getCursor().line + editor.getLine(editor.getCursor().line));
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
    editor.on("cursorActivity", editorCursorChanged);
    editor.on("focus", editorFocused); // read number of lines and current line.
    editor.on("blur", editorBlurred); // read number of lines and current line.

    filename = CodeMirror.fromTextArea(document.getElementById("title"),{
          lineNumbers: true,
          theme: "monokai",
          mode:  "python",
          firstLineNumber: 0
    });
    filename.on("cursorActivity", filenameCursorChanged);
    filename.on("focus", filenameFocused); // read number of lines and current line.
    filename.on("blur", filenameBlurred); // read number of lines and current line.
    filename.setSize("100%",30);

}

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

function runCode(output) { 
  var prog = editor.getValue();
  var mypre = document.getElementById("output"); 
  mypre.innerHTML = ''; 
  Sk.pre = "output";
  Sk.configure({output:outf, read:builtinRead}); 
  (Sk.classroomGraphics || (Sk.classroomGraphics = {})).target = 'mycanvas';
  var myPromise = Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody("<stdin>", false, prog, true);
  });
  myPromise.then(function(mod) {
    var codeOutput = document.getElementById("output").innerText;
    speak('output:' + codeOutput);
  },
  function(err) {
    document.getElementById("output").innerText = err.toString();
    if (prog == ""){
      speak("You haven't coded anything yet!");
    }
    else{
      speak("error" + err.toString());
    }
  });
} 



function store(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

function load(name) {
  return JSON.parse(localStorage.getItem(name));
}

var programs = [];

function loadSavedCode() {
  programs = load('programs');
  if(programs == null)
    programs = [];
  console.log(programs);
  $('#directory ul').empty();
  var name = document.getElementById("title"); 
  var prog = editor.getValue(); 
  for(i = 0; i < programs.length; ++i){
    $('#directory ul').append(
      $('<li>').attr('class','list-group-item').append(
          $('<a>').attr('href','javascript:void(0)').attr('onclick','loadCode('+i+')').append(programs[i]['filename'])
    ));  
  }
}

function updateFilename(data){
    var cm = filename;
    var doc = cm.getDoc();
    var pos = {line: 0, ch: 0}
}

function loadCode(idx){
  filename.setValue("");
  filename.doc.replaceRange(programs[idx]['filename'], {line: 0, ch: 0});
  editor.setValue("");
  editor.doc.replaceRange(programs[idx]['code'], {line: 0, ch: 0});
}

function saveCode() {
  console.log('aasdfads')
  var name = filename.getValue(); 
  var prog = editor.getValue(); 
  file = {'filename': name, 'code': prog};
  programs.push(file);
  //delete_cookie('programs');
  store('programs',programs);
  loadSavedCode();
}

// var PAGECONTENT = {
//   HEADING: {value: 1, name: "Heading", htmlId: "Heading"},
//   SAVECODE: {value: 5, name: "Save Code", htmlId: "SaveCode"},
//   RUNCODE: {value: 6, name: "Run Code", htmlId: "RunCode"},
// }


// function incrementNavFocus(navFocus) {
//   switch (navFocus.value) {
//     case 2: return PAGECONTENT.HEADING;
//     case 3: return PAGECONTENT.SAVECODE;
//     case 1: return PAGECONTENT.RUNCODE;
//   }
// }

// function decrementNavFocus(navFocus) {
//   switch (navFocus.value) {
//     case 3: return PAGECONTENT.HEADING;
//     case 1: return PAGECONTENT.SAVECODE;
//     case 2: return PAGECONTENT.RUNCODE;
//   }
// }

// function doc_keyUp(e) {
//   e.preventDefault();
//   if (e.altKey) {
//     if(!isNavOpen){
//       if (e.keyCode == 38) {
//         navFocus = decrementNavFocus(navFocus);
//         speak(navFocus.name);
//       }
//       else if (e.keyCode == 39) {
//         console.log(avFocus);
//         if(programsList) {

//         }
//         else {
//           var elt = document.getElementById(navFocus.htmlId);
//           if (elt !== null) {
//             if (navFocus === PAGECONTENT.SAVECODE || navFocus === PAGECONTENT.RUNCODE)
//               elt.click();
//             else if (elt.innerText === "")
//               speak("There is no " + navFocus.name + " for this challenge");
//             else
//               speak(elt.innerText);
//           }
//           else {
//             speak("This is the final lesson");
//           }
//         }
//       }
//       else if (e.keyCode == 37) { //alt+left
//         var elt = document.getElementById("PrevLesson");
//         if (elt !== null) {
//           if (navFocus === PAGECONTENT.NEXTLESSON)
//             elt.click();
//           else if (elt.innerText === "")
//             speak("There is no previous lesson for this challenge");
//           else
//             speak(elt.innerText);
//         }
//         else {
//           speak("This is the first lesson");
//         }
//       }
//       else if (e.keyCode == 40) {
//         navFocus = incrementNavFocus(navFocus);
//         speak(navFocus.name);
//       }
//       else if(e.keyCode == 71){
//         console.log('alt g');
//         editor.focus();
//       }
//     }
//   }
// }

// // register the handler
// document.addEventListener('keyup', doc_keyUp, false);

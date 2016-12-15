
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
    if (ch >= 1){
      speak_code(line[ch-1]);
    }
  }
}

var filenameCursorChanged = function(){
  if(focusedfilename) {
    ch   = filename.getCursor().ch;
    line = filename.doc.getLine(tmp);
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
          lineNumbers: false,
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
  document.getElementById("output").style.visibility = "visible";
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
    speak('output ' + codeOutput);

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
function deleteCode(idx) {
  remove(programs[idx]['filename']);
  loadSavedCode();
}
  


function store(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

function load(name) {
  return JSON.parse(localStorage.getItem(name));
}

function remove(name){
  var index = -1;
  var programs = JSON.parse(localStorage.getItem("programs")) || {}; //fetch cart from storage
  
  for (var i = 0; i < programs.length; i++) { //loop over the collection
    if (programs[i].filename === name) { //see if ids match
      programs.splice(i, 1); //remove item from array
      break; //exit loop
    }
  }
  localStorage.setItem("programs", JSON.stringify(programs)); //set item back into storage
} 

var programs = [];
function loadSavedCode() {
  programs = load('programs');
  if(programs == null)
    programs = [];
  $('#directory ul').empty();
  var name = document.getElementById("title"); 
  var prog = editor.getValue(); 
  for(i = 0; i < programs.length; ++i){
    $('#directory ul').append(
      $('<li>').attr('class','list-group-item').append(
        $('<h4>').attr('id','filename').attr('style','display:inline').append(programs[i]['filename'])).append(
          $('<div>').attr('style','text-align:right').append(
            $('<button>').attr('class','btn btn-primary').attr('onclick', 'loadCode('+i+')').append('load   ')).append(
              $('<button>').attr('class','btn btn-secondary').attr('onclick', 'deleteCode('+i+')').append(' delete')
            //$('<a>').attr('href','javascript:void(0)').attr('onclick','loadCode('+i+')').append('load')).append(
              //  $('<a>').attr('href','javascript:void(0)').attr('onclick','deleteCode('+i+')').append(' delete')
    )
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
  var name = filename.getValue(); 
  if (name == '') {
    speak("Please enter a filename before saving!");
    return;
  }
  var prog = editor.getValue(); 
  file = {'filename': name, 'code': prog};
  programs.push(file);
  //delete_cookie('programs');
  store('programs',programs);
  loadSavedCode();
}

var PAGECONTENT = {
  HEADING: {value: 1, name: "Heading", htmlId: "Heading"},
  SAVECODE: {value: 2, name: "Save Code", htmlId: "SaveCode"},
  RUNCODE: {value: 3, name: "Run Code", htmlId: "RunCode"},
  LOADCODE: {value: 4, name: "Load Code", htmlId: "LoadCode"},
  DELETECODE: {value: 5, name: "Delete Code", htmlId: "DeleteCode"},
}

var navFocus = PAGECONTENT.HEADING;

function incrementNavFocus(navFocus) {
  switch (navFocus.value) {
    case 5: return PAGECONTENT.HEADING;
    case 1: return PAGECONTENT.SAVECODE;
    case 2: return PAGECONTENT.RUNCODE;
    case 3: return PAGECONTENT.LOADCODE;
    case 4: return PAGECONTENT.DELETECODE;
  }
}

function decrementNavFocus(navFocus) {
  switch (navFocus.value) {
    case 2: return PAGECONTENT.HEADING;
    case 3: return PAGECONTENT.SAVECODE;
    case 4: return PAGECONTENT.RUNCODE;
    case 5: return PAGECONTENT.LOADCODE;
    case 1: return PAGECONTENT.DELETECODE;
  }
}
var innerMenu = false;
var fileIndex = 0;
function doc_keyUp(e) {
  e.preventDefault();
  e.stopPropagation();
  if (e.altKey) {
    if(!isNavOpen){
      if (e.keyCode == 38) {
        if (innerMenu) {
          var lis = document.getElementById("directory").getElementsByTagName("li");
          --fileIndex;
          if (fileIndex < 0)
            fileIndex = lis.length - 1;
          console.log("hey");
          speak_code(lis[fileIndex].innerText);
        }
        else {
          navFocus = decrementNavFocus(navFocus);
          speak(navFocus.name);
        }
      }
      else if (e.keyCode == 39) { //alt+right
        if (innerMenu) {
          // make sure to exit the innerMenu
          innerMenu = false;
          var lis = document.getElementById("directory").getElementsByTagName("li");
          if (navFocus == PAGECONTENT.LOADCODE) {
            speak(lis[fileIndex].getElementsByTagName("h4")[0].innerText + " loaded successfully");
            loadCode(fileIndex);
          }
          else {
            speak(lis[fileIndex].getElementsByTagName("h4")[0].innerText + " deleted successfully");
            deleteCode(fileIndex);
          }
        }
        else if (navFocus == PAGECONTENT.LOADCODE || navFocus == PAGECONTENT.DELETECODE) {
          var lis = document.getElementById("directory").getElementsByTagName("li");
          if (lis.length) {
            innerMenu = true;
            fileIndex = 0;
            speak_code(lis[fileIndex].getElementsByTagName("h4")[0].innerText);
          }
          else {
            speak("You don't have any saved files");
          }

        }
        else if (navFocus == PAGECONTENT.RUNCODE || navFocus == PAGECONTENT.SAVECODE) {
          document.getElementById(navFocus.htmlId).click();
        }
        else {
          speak("Welcome to the Sandbox! Use ALT and the arrow keys to manage your program files");
        }
      }
      else if (e.shiftKey && e.keyCode == 37) { //alt+left
        innerMenu = false;
        console.log("mfer");
      }
      else if (e.keyCode == 40) {
        if (innerMenu) {
          var lis = document.getElementById("directory").getElementsByTagName("li");
          ++fileIndex;
          if (fileIndex >= lis.length)
            fileIndex = 0;
          speak_code(lis[fileIndex].getElementsByTagName("h4")[0].innerText);
        } 
        else {
          navFocus = incrementNavFocus(navFocus);
          speak(navFocus.name);
        }
      }
      else if(e.keyCode == 71){
        editor.focus();
      }
    }
  }
}

// register the handler
document.addEventListener('keyup', doc_keyUp, false);

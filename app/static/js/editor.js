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
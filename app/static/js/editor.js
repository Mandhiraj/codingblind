var editor; 
var prev_ln = 0;
var focused = false;

var cursorChanged = function(){
  if(focused) {
    tmp = editor.getCursor().line;
    if(prev_ln != tmp){
      prev_ln = tmp;
      speak_line(tmp);
    }
    else {
      ch   = editor.getCursor().ch;
      line = editor.doc.getLine(tmp);
      console.log(ch);
      if (ch >= 1){
        speak_code(line[ch-1]);
      }
    }
  }
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
    editor.on("cursorActivity", cursorChanged);
    editor.on("focus", editorFocused); // read number of lines and current line.
    editor.on("blur", editorBlurred); // read number of lines and current line.
}


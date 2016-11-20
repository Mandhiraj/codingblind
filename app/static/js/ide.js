
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

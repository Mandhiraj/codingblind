function checkCodeStructure(code, output) {
  lessonNum = document.getElementById("LessonNumber").textContent;
  sectionNum = document.getElementById("SectionNumber").textContent;

  if (sectionNum == 0)
    return true;
  if (lessonNum == 1) {
    if (sectionNum == 1)
      return !isNaN(parseFloat(output)) && isFinite(output);
    if (sectionNum == 2)
      return code.includes("10") && code.includes("20");
    if (sectionNum == 3)
      return !code.includes("8") && code.includes("(") && code.includes(")");
    if (sectionNum == 4)
      return code.includes("=") && code.includes("10") && code.includes("20");
    if (sectionNum == 5)
      return !code.includes("8") && code.includes("=");
  }
  if (lessonNum == 2) {
    if (sectionNum == 1)
      return output.match(/[a-z]/i)
    if (sectionNum == 2)
      return code.includes("=") && code.includes("+");
  }
  if (lessonNum == 3) {
    if (sectionNum == 1)
      return code.includes(">") || code.includes("<") || code.includes("==") || code.includes("!=");
    if (sectionNum == 2)
      return code.includes("= True") || code.includes("=True");
    if (sectionNum == 3)
      return code.includes("cow");
    if (sectionNum == 4)
      return code.includes("else") && code.toLowerCase().includes("not a valid animal");
    if (sectionNum == 5)
      return code.includes("rain = True") && code.includes("wind = True");
    if (sectionNum == 6)
      return code.includes("rain = True") || code.includes("wind = True");
  }



  
  



  return false;
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
    var codeOutput = document.getElementById("output").innerText;
    
    if ((output == codeOutput || output == "js") && checkCodeStructure(prog, codeOutput)) {
      document.getElementById("success").style.visibility = "visible";
      speak(document.getElementById("success").innerText);
    }
    else {
      speak('output:' + codeOutput + " " + document.getElementById("failure").innerText);
      document.getElementById("failure").style.visibility = "visible";
    }

    console.log('success');
  },
  function(err) {
    document.getElementById("output").innerText = err.toString();
    
    if (prog == "")
      speak("You haven't coded anything yet!");
    else
      speak("error" + err.toString());
  });

  document.getElementById("output").style.visibility = "visible";
} 

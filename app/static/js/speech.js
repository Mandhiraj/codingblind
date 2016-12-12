var msg = new SpeechSynthesisUtterance();
msg.lang = 'en-US';
msg.voiceURI = 'native';
msg.volume = 1;
msg.rate = 0.8;
msg.pitch = 1.1;

function setupSpeech(text) {
  msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = .8; // 0.1 to 10
  msg.pitch = 1.1; //0 to 2

  var voices = speechSynthesis.getVoices();
  for (i = 0; i < voices.length; ++i) {
    if (voices[i].name === "native")
      msg.voice = voices[i];
  }
  return msg;
}

function speak(text) {
  speechSynthesis.pause();
  speechSynthesis.cancel();

  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  speechSynthesis.speak(msg);
  speechSynthesis.resume();

}

function speak_code(text) {
  text = substitutePunctuationCode(text);
  speak(text);
}

function speak_content(text) {
  text = substitutePunctuationContent(text);
  speak(text);
}

function speak_line(ln) {
  speak_punc("line " + ln + " " + editor.getLine(ln));
}

function substitutePunctuationCode(text){
  for (var i = 0; i < text.length; i++) {
    if(text[i] in punctuationCode){
      text = text.replace(text[i],' ' + punctuationCode[text[i]] +' ');
    }
  }  
  return text;
}

function substitutePunctuationContent(text){
  for (var i = 0; i < text.length; i++) {
    if(text[i] in punctuationContent){
      text = text.replace(text[i],' ' + punctuationContent[text[i]] +' ');
    }
  }  
  return text;
}


var punctuationCode = {
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
  '\n':'newline',
  '_':'underscore'
}


var punctuationContent = {
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
  '_':'underscore'
}
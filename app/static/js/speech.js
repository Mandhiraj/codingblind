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

var speechUtteranceChunker = function (utt, settings, callback) {
    settings = settings || {};
    var newUtt;
    var txt = (settings && settings.offset !== undefined ? utt.text.substring(settings.offset) : utt.text);
    if (utt.voice && utt.voice.voiceURI === 'native') { // Not part of the spec
        newUtt = utt;
        newUtt.text = txt;
        newUtt.addEventListener('end', function () {
            if (speechUtteranceChunker.cancel) {
                speechUtteranceChunker.cancel = false;
            }
            if (callback !== undefined) {
                callback();
            }
        });
    }
    else {
        var chunkLength = (settings && settings.chunkLength) || 160;
        var pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
        var chunkArr = txt.match(pattRegex);
        console.log(chunkArr); 

        if (chunkArr[0] === undefined || chunkArr[0].length <= 2) {
            //call once all text has been spoken...
            if (callback !== undefined) {
                callback();
            }
            return;
        }
        var chunk = chunkArr[0];
        newUtt = setupSpeech(chunk);
        var x;
        for (x in utt) {
            if (utt.hasOwnProperty(x) && x !== 'text') {
                newUtt[x] = utt[x];
            }
        }
        newUtt.addEventListener('end', function () {
            if (speechUtteranceChunker.cancel) {
                speechUtteranceChunker.cancel = false;
                return;
            }
            settings.offset = settings.offset || 0;
            settings.offset += chunk.length ;
            speechUtteranceChunker(utt, settings, callback);
        });
    }

    if (settings.modifier) {
        settings.modifier(newUtt);
    }
    console.log(newUtt); //IMPORTANT!! Do not remove: Logging the object out fixes some onend firing issues.
    //placing the speak invocation inside a callback fixes ordering and onend issues.
    setTimeout(function () {
        speechSynthesis.speak(newUtt);
    }, 0);
};


function speak_punc(text) {
  text = substitutePunctuation(text);

  speak(text);
//   speechSynthesis.getVoices().forEach(function(voice) {
//   console.log(voice.name, voice.default ? '(default)' :'');
// });
}

function speak(text) {
  speechSynthesis.pause();
  speechSynthesis.cancel();

  utterance = setupSpeech(text);
  //pass it into the chunking function to have it played out.
  //you can set the max number of characters by changing the chunkLength property below.
  //a callback function can also be added that will fire once the entire text has been spoken.
  speechUtteranceChunker(utterance, {
      chunkLength: 120
  }, function () {
      //some code to execute when done
      console.log('done');
  });

  // speechSynthesis.speak(msg);
  // speechSynthesis.resume();

//   speechSynthesis.getVoices().forEach(function(voice) {
//   console.log(voice.name, voice.default ? '(default)' :'');
// });
}
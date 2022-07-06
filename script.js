let conButton = document.getElementById('conButton');

let output = document.getElementById('output');

conButton.addEventListener('click', function () {
  let inputText = document.getElementById('inputText');
  let word = inputText.value;
  let pattern = /[a-z]/g;
  let pattern2 = /[A-Z]/g;
  let res = word.match(pattern);
  let res2 = word.match(pattern2);

  if (res === null) {
    res = [];
  }
  if (res2 === null) {
    res2 = [];
  }
  let newWord = '';
  for (let w of word) {
    if (res.includes(w)) {
      newWord = newWord.concat(w.toUpperCase());
    } else if (res2.includes(w)) {
      newWord = newWord.concat(w.toLowerCase());
    } else {
      newWord = newWord.concat(w);
    }
  }
  output.innerHTML = newWord;
});

// });

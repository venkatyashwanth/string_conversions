let conButton = document.getElementById('conButton');

let output = document.getElementById('output');

conButton.addEventListener('click', function () {
  let inputText = document.getElementById('inputText');
  let word = inputText.value;
  let newWord = '';
  for (let i of word) {
    let asciiVal = i.charCodeAt();
    if (asciiVal >= 65 && asciiVal <= 90) {
      let small = i.toLowerCase();
      newWord = newWord.concat(small);
    } else {
      let caps = i.toUpperCase();
      newWord = newWord.concat(caps);
    }
  }
  output.innerHTML = newWord;
});

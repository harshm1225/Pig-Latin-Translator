let TranslateButton = document.querySelector("#translate-button");
let InputTextArea = document.querySelector(".input-text-area");
let OutputTextArea = document.querySelector(".output-container");

const url = "https://api.funtranslations.com/translate/pig-latin.json";

function clickHandler() {
  let inputText = InputTextArea.value;
  fetch(getFinalURL(inputText))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      OutputTextArea.innerText = data.contents.translated;
    });
}

function getFinalURL(text) {
  return url + "?" + "text=" + text;
}

TranslateButton.addEventListener("click", clickHandler);

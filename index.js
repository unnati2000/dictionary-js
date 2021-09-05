const word = document.getElementById("word");
const search = document.getElementById("search");
const display = document.getElementById("display");
const partOfSpeechDiv = document.getElementById("partOfSpeechDiv");
const partOfSpeechHeader = document.getElementById("partOfSpeechHeader");
const partOfSpeechPara = document.getElementById("partOfSpeechPara");
const meaningDiv = document.getElementById("meaningDiv");
const audioDiv = document.getElementById("audio");

search.addEventListener("click", async () => {
  console.log(word.value.toLowerCase());

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value.toLowerCase()}  `;
  const res = await fetch(url);

  const data = await res.json();

  displayWords(data);
});

const displayWords = (data) => {
  console.log(data);
  const partOfSpeech = data[0].meanings[0].partOfSpeech;
  const meanings = data[0].meanings[0].definitions;
  console.log(meanings);

  console.log(partOfSpeech);

  partOfSpeechDiv.className =
    "bg-gray-100 px-2 py-3 flex flex-col w-1/4 justify-center items-center border-2 border-green-500 rounded";

  partOfSpeechHeader.innerHTML = "Part of Speech";
  partOfSpeechPara.innerHTML = partOfSpeech;

  // meanings

  let meaningList = ``;
  meanings.forEach((meaning, ind) => {
    console.log(meaning);
    meaningList += `<p class='my-3 text-md'>${ind + 1}) ${
      meaning.definition
    } </p>`;
  });
  meaningDiv.className =
    " text-center w-1/4 bg-gray-100 my-6 border-2 border-green-500 rounded block";

  meaningDiv.innerHTML = meaningList;

  let aud = `<audio src="${data[0].phonetics[0].audio}" controls>`;
  // let aud = document.createElement("audio");
  // aud.src = data[0].phonetics[0].audio;
  // aud.controls = true;
  audioDiv.innerHTML = aud;
};

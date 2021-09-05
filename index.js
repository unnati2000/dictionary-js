const word = document.getElementById("word");
const search = document.getElementById("search");

const appKey = "";
const lang = "en-gb";

search.addEventListener("click", async () => {
  console.log(word.value.toLowerCase());

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value.toLowerCase()}  `;
  const res = await fetch(url);

  const data = await res.json();
  console.log(data);
});

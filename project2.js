const quotes = [
  {
    name: "Sahbazov Rufet",
    quote: "Fucking to everything & never mind",
  },
  {
    name: "Aiq Abusov ",
    quote: "Trying reach to goals , by the way funny stuffs too",
  },
  {
    name: "Hesenli Hacaga",
    quote: "Unsatisfying and wanna the best",
  },
  {
    name: "Niftaliyev Ilqar",
    quote: "Trying to figured out his life ",
  },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  let x = quotes[number].name;
  console.log(x);
  quoteAuthor.innerHTML = x;
  quote.innerHTML = quotes[number].quote;
});

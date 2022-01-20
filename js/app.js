const apiURL = "https://api.chucknorris.io/jokes/random";

const getNextJoke = async () => {
  
  const res = await fetch(apiURL);
  const joke = await res.json();

  const content = document.getElementById('content');
  content.innerText = `"${joke.value}"`;
  content.classList.add("fst-italic");
};

//get first joke at initialization
getNextJoke();

jokesForm.addEventListener("submit", (e) => {
  //preventing default
  e.preventDefault();

  getNextJoke();  
});

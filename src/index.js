function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "b4bfef39d45aa0tc0o1538f819e3be9c";
  let prompt = `Generate a poem about ${promptInput.value}`;
  let context =
    "You are a poem expert and love to write introspective and romantic yet concise poems. Your mission is to generate a poem 5 lines and shorter, separating each line by a <br>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="glow">Generating poem...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);

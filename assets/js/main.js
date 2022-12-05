const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
console.log("%c===== lev1_1: fetch()=====", "background-color:green");
fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

console.log(
  "%c===== Lev2_1_API_fetch() - Daten weiter verarbeiten=====",
  "background-color:green"
);
fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((e) => {
      let newFigure = document.createElement("fig");
      let newImage = document.createElement("img");
      let newCaption = document.createElement("caption");
      let div = document.createElement("div");
      newImage.src = `${e.download_url}`;
      newCaption.textContent = e.author;
      newFigure.appendChild(newImage);
      newFigure.appendChild(newCaption);
      container.appendChild(newFigure);
    });
  });

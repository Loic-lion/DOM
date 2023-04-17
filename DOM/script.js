let apprenants = [
  "Abel",
  "Alexandra",
  "Anthony",
  "Benjamin",
  "Bruno",
  "Delphine",
  "Emilien",
  "Ethan",
  "Ismael",
  "Jodie",
  "Louka",
  "Loïc",
  "Marine",
  "Nikko",
  "Steve",
  "Sylvain",
  "Thomas",
  "Willy",
];

// apprenants.sort(() => Math.random() - 0.5);

let n = apprenants.length;
for (let i = n - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1)); // generate random index to swap with
  [apprenants[i], apprenants[j]] = [apprenants[j], apprenants[i]]; // swap elements at indices i and j
}

let article = document.querySelector("article");

apprenants.forEach((apprenant) => {
  let section = document.createElement("section");
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgb = `rgb(${red}, ${green}, ${blue})`;
  section.style.backgroundColor = rgb;
  let paragraph = document.createElement("p");
  paragraph.textContent = apprenant;

  let brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  if (brightness > 128) {
    paragraph.style.color = "black";
  } else {
    paragraph.style.color = "white";
  }
  section.appendChild(paragraph);
  article.appendChild(section);
});







let sectionFilm1 = document.querySelector('#film1');
sectionFilm1.querySelector('h2').textContent = film1.nom;
sectionFilm1.querySelectorAll('p')[0].textContent = `Acteurs: ${film1.acteurs.join(', ')}`;
sectionFilm1.querySelectorAll('p')[1].textContent = `Genre: ${film1.genre}`;
sectionFilm1.querySelectorAll('p')[2].textContent = `Année de production: ${film1.annee}`;
sectionFilm1.querySelectorAll('p')[3].textContent = `Réalisateur: ${film1.realisateur}`;
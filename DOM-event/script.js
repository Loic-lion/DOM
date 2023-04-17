const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  const colorsquare = e.target.classList[1];
  const displayedSquareWrapper = document.querySelector(
    ".displayedsquare-wrapper"
  );
  const displayedSquare = document.createElement("div");
  displayedSquare.setAttribute("class", "displayedsquare");
  displayedSquare.classList.add(colorsquare);
  displayedSquareWrapper.appendChild(displayedSquare);

  const logList = document.querySelector("ul");
  const logItem = document.createElement("li");
  logItem.innerHTML = `[${getElapsedTime()}] Created a new ${colorsquare} square`;
  logList.appendChild(logItem);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}
/////////////
const bodyclick = document.querySelector("body");
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red},${green},${blue})`;

    document.body.style.backgroundColor = rgb;

    const logList = document.querySelector("ul");
    const logItem = document.createElement("li");
    logItem.innerHTML = `[${getElapsedTime()}] SpaceBar hitted`;
    logList.appendChild(logItem);
  }
});

///////////////////SUPPRESSION DES LOGS
document.addEventListener("keyup", (event) => {
  if (event.code === "KeyL") {
    while ("li") {
      var deletelastlog = document.querySelector("li:last-of-type");
      deletelastlog.remove();
    }
  }
});
/////////////////////////SUPRESSION DES SQUARES
document.addEventListener("keyup", (event) => {
  if (event.code === "KeyS") {
    let square = document.querySelectorAll(".displayedsquare");
    square.forEach((element) => {
      element.remove();
    });
  }
});

/////////////////////////AFFICHER COULEUR DES NOUVEAUX SQUARE QUAND ON CLIQUE DESSUS
const squareDisplay = document.querySelectorAll(".displayedsquare-wrapper");
squareDisplay.forEach((element) => {
  element.addEventListener("click", (e) => {
    let lcolor = ["green", "orange", "violet"];
    if (lcolor.includes(e.target.classList[1])) alert(e.target.classList[1]);
  });
});

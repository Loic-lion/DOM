// document.title = "Modifying the DOM";
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let rgb = `rgb(${red},${green},${blue})`;

document.body.style.backgroundColor = rgb;

// alert(document.title);

// let enfant = document.body.children[1].children;
// for (let child of enfant) {
//   alert(child.tagName);
// }
// let elements = document.querySelectorAll(".important");
// elements.forEach((element) => {
//   element.setAttribute("title", "This is an important item");
// });

// let images = document.querySelectorAll("img");
// images.forEach((image) => {
//   if (!image.className.include("important")) {
//     image.style.display = "none";
//   }
// });

// let paragraphes = document.querySelectorAll("p");
// paragraphes.forEach((paragraphe) => {
//   alert(paragraphe.textContent);
//   if (paragraphe.className) {
//     alert(`Class name: ${paragraphe.className}`);
//   }
// });

let paragraphes = document.querySelectorAll("p");

paragraphes.forEach((paragraphe) => {
  if (!paragraphe.classList.length) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red},${green},${blue})`;
    paragraphe.style.color = rgb;
  }
});

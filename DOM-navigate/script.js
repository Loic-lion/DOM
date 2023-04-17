const element = document.querySelector("ol");
const lastChild = element.lastElementChild;
element.insertBefore(lastChild, element.firstElementChild);

//////////////////////////////
const sectionTwo = document.getElementsByTagName("section")[1];
const sectionThree = document.getElementsByTagName("section")[2];

const h2Two = sectionTwo.querySelector("h2");
const h2Three = sectionThree.querySelector("h2");

sectionTwo.insertBefore(h2Three, sectionTwo.firstChild);
sectionThree.insertBefore(h2Two, sectionThree.firstChild);

////////////////////////////
var lastSection = document.querySelector("section:last-of-type");
lastSection.remove();

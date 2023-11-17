// let aLink = document.querySelector("ol.list-unstyled li:nth-of-type(2)");
// const removeLink = function () {
//   aLink.classList.add("displayNone");
// };
// removeLink();
const liReset = document.querySelectorAll("li");
for (let i = 0; i < liReset.length; i++) {
  if (liReset[i].textContent.includes("Twitter")) {
    liReset[i].remove();
  }
}
const alertMessage = function () {
  alert("Questo è l'autore dell'articolo");
};
const nomeAutore = function () {
  const aSelector = document.querySelectorAll("p.blog-post-meta a");
  for (let i = 0; i < aSelector.length; i++) {
    console.log(aSelector[i].innerHTML);
    aSelector[i].addEventListener("mouseover", alertMessage);
  }
};
console.log(nomeAutore());

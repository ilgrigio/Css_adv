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

let aSelector = document.querySelectorAll(".blog-post-meta a");
const nomeAutore = function () {
  aSelectAuth.addEventListener("mouseover", nomeAutore);
  alert("Questo è l'autore dell'articolo");
};
for (let i = 0; i < aSelector.length; i++) {
  let aLink = nomeAutore(aSelector[i]);
}
// console.log(nomeAutore());
// nomeAutore();

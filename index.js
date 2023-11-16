// let aLink = document.querySelector("ol.list-unstyled li:nth-of-type(2)");
// const removeLink = function () {
//   aLink.classList.add("displayNone");
// };
// removeLink();
let aLink = document.querySelectorAll("h2");

const removeLink = function () {
  aLink.innerText = "Ciao pippo";
};
console.log(removeLink());

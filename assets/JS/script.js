let exampleText = document.querySelectorAll(".example-text-container");

for (let i = 0; i < exampleText.length; i++) {
  exampleText[i].addEventListener("mouseenter", function () {
    exampleText[i].querySelector(".hidden-text").style.display = "flex";
  });
}
for (let i = 0; i < exampleText.length; i++) {
  exampleText[i].addEventListener("mouseleave", function () {
    exampleText[i].querySelector(".hidden-text").style.display = "none";
  });
}

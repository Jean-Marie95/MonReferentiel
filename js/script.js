const pouceIcone = document.getElementsByClassName("pouce");

for (let index = 0; index < pouceIcone.length; index++) {
  const elt = pouceIcone[index];
  elt.addEventListener("click", function () {
    if (elt.getAttribute("src") == "img/miniature_unlike.png") {
      elt.setAttribute("src", "img/miniature_like.png");

      // On récupère la balise a (ciblé par son id) pour mettre le texte en bleu,
      // pour cela on remonte sur le parent pour récupérer les enfants,
      // et on redescend....
      const tabEnfants = elt.parentNode.children;

      [...tabEnfants].forEach((element) => {
        if (element.className == "like") {
          element.style.color = "blue";
        }
      });
    } else {
      elt.setAttribute("src", "img/miniature_unlike.png");

      // On récupère la balise a (ciblé par son id) pour mettre le texte en noir,
      // pour cela on remonte sur le parent pour récupérer les enfants,
      // et on redescend....
      const tabEnfants = elt.parentNode.children;

      [...tabEnfants].forEach((element) => {
        if (element.className == "like") {
          element.style.color = "black";
        }
      });
    }
  });
}

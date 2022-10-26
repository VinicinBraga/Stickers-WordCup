let card = document.querySelector("#card1");
card.addEventListener(
  "click",
  (changeCard = (event) => {
    console.log(card.id);
    console.log(event.target.id);
    if (card.id === "card1") {
      card.id = "card2";
    } else if (card.id === "card2") {
      card.id = "card3";
    } else if (card.id === "card3") {
      card.id = "card4";
    } else {
      card.id = "card1";
    }
  })
);

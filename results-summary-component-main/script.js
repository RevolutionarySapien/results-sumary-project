"use strict";

const scoresDiv = document.querySelector(".scores");
console.log(scoresDiv);

fetch("./data.json")
  .then((res) => res.json())
  .then((data) =>
    scoresDiv.insertAdjacentHTML(
      "afterbegin",
      `<div class="score-div score-1">
   <div class="icon-cat"><img src="${data[0].icon}"> ${data[0].category}</div>
  <div class="total-100"><div class="score">${data[0].score}</div> <div>/ 100</div></div>
</div>
<div class="score-div score-2">
<div class="icon-cat"><img src="${data[1].icon}"> ${data[1].category}</div>
  <div class="total-100"><div class="score">${data[1].score}</div> / 100</div>
</div>
<div class="score-div score-3">
<div class="icon-cat"><img src="${data[2].icon}"> ${data[2].category}</div>
  <div class="total-100"><div class="score">${data[2].score}</div> / 100</div>
</div>
<div class="score-div score-4">
<div class="icon-cat"><img src="${data[3].icon}"> ${data[3].category}</div>
  <div class="total-100"><div class="score">${data[3].score}</div> / 100</div>
</div>`
    )
  );

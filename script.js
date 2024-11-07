document.addEventListener("DOMContentLoaded", () => {
  const popBtn = document.querySelector("#pop-button");
  const pop = new Audio("./assets/pop.wav");
  pop.preservesPitch = false;

  popBtn.addEventListener("click", () => {
    pop.load();
    pop.playbackRate = 0.25 + Math.random() * 1.25;
    pop.play();
  });
});

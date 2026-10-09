document.addEventListener("DOMContentLoaded", () => {
  const postInc = document.querySelector("#incBtn");
  const postDec = document.querySelector("#decBtn");
  const displayContent = document.querySelector("#display");
  const status = document.querySelector("#status");

  let counter = 0;
  let intervalId = null;
  let timeoutId = null;

  const TICK_MS = 500;
  const DURATION_MS = 5000;

  function updateDisplay() {
    displayContent.value = `count ${counter}`;
  }

  postInc.addEventListener("click", () => {
    if (intervalId) return;

    postInc.disabled = true;

    intervalId = setInterval(() => {
      counter++;
      updateDisplay();
    }, TICK_MS);

    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      intervalId = null;
      postInc.disabled = false;
      status.textContent = "Stopped";
    }, DURATION_MS);
  });

  postDec.addEventListener("click", () => {
    counter--;
    updateDisplay();
    if (displayContent.value < 0) return `ren + counter`;
  });
});

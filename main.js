let inputCounter = document.querySelector("#counter");
let buttonStart = document.querySelector("#startButton");
let errorElement = document.querySelector("#error");
let timerCircles = document.querySelector("#CircleContainer");
let slice = document.querySelector("#circle1");

let sBox = document.querySelector("#sbox");
let timerNum = document.querySelector("#text-circle");
let message = document.querySelector(".message #loading");
let end = document.querySelector(".message #end");

buttonStart.addEventListener("click", function (e) {
  let seconds = parseInt(counter.value);

  let lastPercent = "";

  if (isNaN(seconds)) {
    errorElement.textContent = "Please enter correct number";
    errorElement.classList.add("active");
    return;
  }
  errorElement.classList.remove("active1");
  timerCircles.style.display = "block";
  sBox.style.display = "none";
  timerNum.textContent = seconds;
  message.style.display = "block";
  end.style.display = "none";

  let originalSeconds = seconds;
  let timerid = setInterval(() => {
    if (seconds < 1) {
      clearInterval(timerid);
      sBox.classList.add("active1");
      timerCircles.style.display = "none";
      inputCounter.value = "";
      message.style.display = "none";
      end.style.display = "block";
      sBox.style.display = "block";
      timerNum.classList.remove(lastPercent);
    }
    if (lastPercent) timerNum.classList.remove(lastPercent);

    let percent = Math.floor(
      ((originalSeconds - seconds) / originalSeconds) * 100
    );
    lastPercent = `p${percent}`;

    timerCircles.classList.add(`p${percent}`);
    seconds -= 1;
    timerNum.textContent = seconds;
  }, 1000);
});

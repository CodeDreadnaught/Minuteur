import TimerMethods from "./script.js";
import footer from "./footer.js";

const hoursUI = document.querySelector(".timer input:first-child"),
minutesUI = document.querySelector(".timer input:nth-child(2)"),
secondsUI = document.querySelector(".timer input:last-child"),
startButton = document.querySelector(".play-button button"),
startButtonWrapper = document.querySelector(".play-button"),
appWrapper = document.querySelector(".app-wrapper"),
allInputUI = document.querySelectorAll(".timer input");


(function loadAllEventListeners() {
    hoursUI.addEventListener("keyup", TimerMethods.regulateInput);
    hoursUI.addEventListener("click", TimerMethods.regulateZeroInput);
    hoursUI.addEventListener("blur", TimerMethods.ensureNonSingleDigit);

    minutesUI.addEventListener("keyup", TimerMethods.regulateInput);
    minutesUI.addEventListener("click", TimerMethods.regulateZeroInput);
    minutesUI.addEventListener("blur", TimerMethods.ensureNonSingleDigit);
    minutesUI.addEventListener("keyup", TimerMethods.correctInput);

    secondsUI.addEventListener("keyup", TimerMethods.regulateInput);
    secondsUI.addEventListener("click", TimerMethods.regulateZeroInput);
    secondsUI.addEventListener("blur", TimerMethods.ensureNonSingleDigit);
    secondsUI.addEventListener("keyup", TimerMethods.correctInput);

    startButton.addEventListener("click", TimerMethods.startCountDown);

    document.addEventListener("DOMContentLoaded", footer);
}) ();

export { hoursUI, minutesUI, secondsUI, startButton, startButtonWrapper, appWrapper, allInputUI };
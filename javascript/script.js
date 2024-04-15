import { hoursUI, minutesUI, secondsUI, startButton, startButtonWrapper, appWrapper, allInputUI } from "./app.js";

class TimerMethods {
    static ensureNonSingleDigit(event) {
        event.target.value = event.target.value.padStart(2, "0");
    }

    static correctInput(event) {
        let currentInputValue = event.target.value;
    
        if (currentInputValue > 59) {
            event.target.value = 59;
        }
    }

    static preventFloatingNumbers(event) {
        const char = event.data;
        
        if (char != null && char !== '' && !/^[0-9]*$/.test(char)) {
            event.preventDefault();
        }
    }
    
    static regulateZeroInput(event) {
        let currentInputValue = event.target.value;

        if (currentInputValue === "00") {
            event.target.value = "";
        }

        appWrapper.classList.remove("time-out-animation");
        allInputUI.forEach(currentInput => {
            currentInput.style.fontWeight = "normal";
        });
    }

    static regulateInput(event) {
        let currentInputValue = event.target.value;
        
        if (currentInputValue.length > 3) {
            const currentInputValueArray = currentInputValue.split("");
            currentInputValueArray.pop();
            const currentInputValueRegulated = currentInputValueArray.join("");

            event.target.value = currentInputValueRegulated;
        }
    
        hoursUI.style.width = hoursUI.value.length > 2 ? "9rem" : "8rem";
    
        if (Number(hoursUI.value) > 0 || Number(minutesUI.value) > 0 || Number(secondsUI.value) > 0) {
            startButtonWrapper.classList.remove("hidden");
        } else {
            startButtonWrapper.classList.add("hidden");
        }
    }

    static startCountDown() {
        if (hoursUI.value || minutesUI.value || secondsUI.value) {
            const timerInSeconds = (Number(hoursUI.value) * 3600) + (Number(minutesUI.value) * 60) + Number(secondsUI.value);

            const activateTimeMonitoring = setInterval(() => {
                hoursUI.disabled = true;
                minutesUI.disabled = true;
                secondsUI.disabled = true;
                startButton.disabled = true;
                startButtonWrapper.classList.remove("active");
                allInputUI.forEach(currentInput => {
                    currentInput.style.fontWeight = "bold";
                });
    
                const hoursValueUI = Number(hoursUI.value),
                minutesValueUI = Number(minutesUI.value),
                secondsValueUI = Number(secondsUI.value),
                timerInSeconds = (hoursValueUI * 3600) + (minutesValueUI * 60) + (secondsValueUI);
                
                let remaningTimeInSeconds = timerInSeconds - 1,
                hours = Math.floor(remaningTimeInSeconds / 3600), 
                minutes = Math.floor((remaningTimeInSeconds % 3600) / 60), 
                seconds = remaningTimeInSeconds % 60;
                
                hours = hours < 0 ? "00" : hours;
                minutes = minutes < 0 ? "00" : minutes;
                seconds = seconds < 0 ? "00" : seconds;
    
                hours = hours.toString().padStart(2, "0");
                minutes = minutes.toString().padStart(2, "0");
                seconds = seconds.toString().padStart(2, "0");

                hoursUI.value = hours;
                minutesUI.value = minutes;
                secondsUI.value = seconds;
            }, 1000);
    
            setTimeout(() => {
                clearInterval(activateTimeMonitoring);

                hoursUI.disabled = false;
                minutesUI.disabled = false;
                secondsUI.disabled = false;
                startButton.disabled = false;

                startButtonWrapper.classList.add("active");
                startButtonWrapper.classList.add("hidden");
                appWrapper.classList.add("time-out-animation");
            }, (timerInSeconds * 1000));
        }
    }
}

export default TimerMethods;

function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          display.textContent = "Время истекло";
          // Действия при истечении времени, например, показать кнопку "Завершить"
          document.getElementById("finishButton");
          var finishButton = document.getElementById("finishButton");
          finishButton.click();
        }
      }, 1000);
    }

    window.onload = function () {
      var threeMinutes = 60 * 3,
          display = document.querySelector('#timer');
      startTimer(threeMinutes, display);
    };



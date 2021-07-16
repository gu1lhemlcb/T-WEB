/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
►►► Scripts/layout/menu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
("use strict");

const CountDown = {
  init: () => {
    const countDownEl = document.querySelector("#next-module-button");
    if (!countDownEl) {
      return;
    }
    var clockContainer = document.querySelector(".js-module-clock");
    var hoursEl = clockContainer.querySelector("#hours");
    var minsEl = clockContainer.querySelector("#mins");
    var secsEl = clockContainer.querySelector("#secs");

    var countDown = new Date();

    var duration = clockContainer.dataset.timer;

    var durationSplit = duration.split(":");

    clockContainer.removeAttribute("data-timer");

    countDown.setHours(countDown.getHours() + Number(durationSplit[0]));
    countDown.setMinutes(countDown.getMinutes() + Number(durationSplit[1]));
    countDown.setSeconds(countDown.getSeconds() + Number(durationSplit[2]));

    var update_timer = function () {
      var timer_state = "".concat(result[0], ":", result[1], ":", result[2]);
      $.ajax({
        url: window.location.href,
        method: "POST",
        data: { timer_state: timer_state, form_type: "update_timer" },
      })
        .success((data) => {
          console.log(data, "success");
        })
        .error((data) => {
          console.log(data, "error");
        });
    };
    
    var end_module = function () {
      var timer_state = "00:00:00";
      $.ajax({
        url: window.location.href,
        method: "POST",
        data: { timer_state: timer_state, form_type: "end_module" },
      })
        .success((data) => {
          console.log(data, "success");
        })
        .error((data) => {
          console.log(data, "error");
        });
    };

    const myCountDown = function () {
      var now = new Date().getTime();
      var distance = countDown - now;

      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        hoursEl.innerHTML = hours + "h ";
        minsEl.innerHTML = minutes + "m ";
        secsEl.innerHTML = seconds + "s ";
        if (distance <= 0) {
          
          clearInterval(myfunc);
          clearInterval(interval);
          end_module();
          hoursEl.innerHTML = "0h ";
          minsEl.innerHTML = "0m ";
          secsEl.innerHTML = "0s";
  
          countDownEl.removeAttribute("disabled");
          countDownEl.innerHTML = "Valider le module";
        }

      return [hours, minutes, seconds];
    };
    var result;

    var myfunc = setInterval(function () {
      result = myCountDown();
    }, 1000);

    var interval = setInterval(function () {
      update_timer();
    }, 90000);
  },
};

export default CountDown;

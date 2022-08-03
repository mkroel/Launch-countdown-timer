var date = new Date();
var endDate = new Date(date.getTime() + 777343*1000);

var x = setInterval(function() {
    var now = new Date().getTime();
    
    var diff = endDate - now;
    
    var timeDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    var timeHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var timeMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var timeSeconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (timeDays < 10) {timeDays = "0" + timeDays};
    if (timeHours < 10) {timeHours = "0" + timeHours};
    if (timeMinutes < 10) {timeMinutes = "0" + timeMinutes};
    if (timeSeconds < 10) {timeSeconds = "0" + timeSeconds};

    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;

    /* if timer is 0 */
    if (diff < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "S";
        document.getElementById("hours").innerHTML = "O";
        document.getElementById("minutes").innerHTML = "O";
        document.getElementById("seconds").innerHTML = "N";

        /*toggle h2*/
        document.querySelectorAll("h2").forEach(function(el, i) {
            el.id = i;
            el.classList.add("finished")
        });
    }
}, 1000);

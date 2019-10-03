var countDownDate = new Date("Oct 24, 2019 00:00:00").getTime(); // Set the launch date here
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = '<div class="block1">' + '<span class="day">' + days + "</span>" + "</div><div class='block2'>DAYS</div>" + '<span class="hms">' + hours + '</span>' + "H " + '<span class="hms">' + minutes + '</span>' +  "M " + '<span class="hms">' + seconds + '</span>' + "S";
    
    // Text to display post countdown timer expiration
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


<script>document.getElementById("ybcari").addEventListener("click", function() {          
          var lokasi = "https://jgjk.mobi/act/search/"+ $("input[name='ycari']").val()
          window.location.replace(lokasi);
        });
      </script>


<script type="text/javascript">
function animation(span) {
    span.className = "puter";
    setTimeout(function () {
        span.className = ""
    }, 700);
}

function Countdown() {

    setInterval(function () {

       var hari    = document.getElementById("days");
       var jam     = document.getElementById("hours");
       var menit   = document.getElementById("minutes");
       var detik   = document.getElementById("seconds");
          
       var deadline    = new Date("jan 01, 2023 23:59:59");
       var waktu       = new Date();
       var distance    = deadline - waktu;
          
       var days    = Math.floor((distance / (1000*60*60*24)));
       var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
       if (days < 10)
       {
          days = days;
       }
       if (hours < 10)
       {
          hours = hours;
       }
       if (minutes < 10)
       {
          minutes = minutes;
       }
       if (seconds < 10)
       {
          seconds = seconds;
       }

       hari.innerHTML    = days;
       jam.innerHTML     = hours;
       menit.innerHTML   = minutes;
       detik.innerHTML   = seconds;
       //animation
       animation(detik);
       if (seconds = 0) animation(menit);
       if (minutes = 0) animation(jam);
       if (hours = 0) animation(hari);

    }, 1000);
}

Countdown();

</script>


<script>

const navBar = document.querySelector(".navbar")
      allLi = document.querySelectorAll("li");

allLi.forEach((li, index) => {
   li.addEventListener("click" , e =>{
     e.preventDefault(); //preventing from submitting
     navBar.querySelector(".active").classList.remove("active");
     li.classList.add("active");

     const indicator = document.querySelector(".indicator");
     indicator.style.transform = `translateX(calc(${index * 70}px))`;
   });
});

</script>

<script>
function openPage(pageName,elmnt,color) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].style.backgroundColor = "";
}
document.getElementById(pageName).style.display = "block";
element.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>

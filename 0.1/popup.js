var btn = document.getElementById("notify");
var clock = document.getElementById("timer");
btn.onclick = startClock;

function startClock() {
  var timer = setInterval(counter, 1000);
  var secs = 0;
  function counter() {
    ++secs;
    var seconds = secs;
    clock.innerHTML = secs;
    while(secs == 1800) {
      alert('Focus!');
      secs = 0;
    }
  }
}

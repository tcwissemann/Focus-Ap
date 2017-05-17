var timer = setInterval(counter, 1000);
var secs = 0;
function counter() {
  ++secs;
  var seconds = secs;
  document.getElementById("timer").innerHTML = secs;
}

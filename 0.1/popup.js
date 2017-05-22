var button = document.getElementById("notify");
var clock = document.getElementById("timer");
button.onclick = startWork;

function startWork(){
  var timer = setInterval(counter, 1000);
  var secs = 0;
  //call counter every second then start the timer at 0
  function counter(){
    ++secs;
    var seconds = secs;
    clock.innerHTML = secs;
    //add 1 every second then replace the html element
    while(secs == 1800){
      alert('Focus!');
      secs = 0;
      //when the elements value is 1800 (thirty minutes) call an alert and reset
    }
    while(secs < 1800){
      el = document.documentElement,
      rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
      rfs.call(el);
      //^ problem area - taken from stack overflow
      //when the elements value is less than 1800 gets fullscreen
    }
  }
}

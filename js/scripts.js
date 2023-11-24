document.getElementById('Blog').addEventListener('click', function() {
    window.location.href = 'blog-post.html';
});

var Div1 = document.getElementById('DivOcean');
var Audio1 = document.getElementById('Ocean');
var Div2 = document.getElementById('DivBubble');
var Audio2 = document.getElementById('Bubble');
var Div3 = document.getElementById('DivSplash');
var Audio3 = document.getElementById('Splash');
var Div4 = document.getElementById('DivHeartbeat');
var Audio4 = document.getElementById('Heartbeat');

Div1.addEventListener('mouseover', function() {
  Audio1.play();
});
Div1.addEventListener('mouseout', function() {
  Audio1.pause();
  Audio1.currentTime = 0;
});

Div2.addEventListener('mouseover', function() {
  Audio2.play();
});
Div2.addEventListener('mouseout', function() {
  Audio2.pause();
  Audio2.currentTime = 0;
});

Div3.addEventListener('mouseover', function() {
  Audio3.play();
});
Div3.addEventListener('mouseout', function() {
  Audio3.pause();
  Audio3.currentTime = 0;
});

Div4.addEventListener('mouseover', function() {
  Audio4.play();
});
Div4.addEventListener('mouseout', function() {
  Audio4.pause();
  Audio4.currentTime = 0;
});

$(".full-landing-image").ripples({
    resolution: 200,
    perturbance: 0.02,
});

document.addEventListener('keypress', function (event) {
  if (event.key.toLowerCase() === 'q' || event.key.toLowerCase() === 'h') {
      var modal = document.getElementById('exampleModal');
      var modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
  }
});
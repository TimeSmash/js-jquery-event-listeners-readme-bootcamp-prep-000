//define functions here

function getIt() {
  alert("Hey!");
}

function frameIt () {
  let tasty = 'img.tasty';
    $('tasty').css('border-color', 'red');
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key == 71) {
      alert('You have pressed the g key.')
    }
  })
}
$(document).ready(function(){
$('p').on('click', getIt())
$('img.tasty').on('load', frameIt());
pressIt();
// call functions here

});

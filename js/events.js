//define functions here

function getIt() {
  alert("Hey!");
}

function frameIt () {
    $('img.tasty').css('border-color', 'red');
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key == 71) {
      alert('You have pressed the g key.')
    }
  })
}

let tasty = $('img.tasty')
$(document).ready(function(){
$('p').on('click', getIt())
$('tasty').on('load', frameIt());
pressIt();
// call functions here

});

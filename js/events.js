//define functions here

function getIt() {
  $('p').on('click', function() {
  alert("Hey!")}
  );
}

function frameIt () {
  $('img.tasty').on('load', function () {
    $('img.tasty').css('border-color', 'red');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key == 71) {
      
    }
  })
}
$(document).ready(function(){
getIt();
frameIt();
// call functions here

});

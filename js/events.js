//define functions here

function getIt() {
  $('p').on('click', function() {
  alert("Hey!")}
  );
}

function frameIt () {
  $('img.tasty').on('load', function () {
    $('img.tasty').css('border-color', 'red')
  })
}

$(document).ready(function(){
getIt();
frameIt();
// call functions here

});

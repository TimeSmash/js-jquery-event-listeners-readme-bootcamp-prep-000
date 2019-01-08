//define functions here

function getIt() {
  $('p').on('click', function() {
  alert("Hey!")}
  );
}

function frameIt () {
  $('img.tasty').on('load', function () {
    $('img.tasty').css('border-color')
  })
}

$(document).ready(function(){
getIt();
frameIt();
// call functions here

});

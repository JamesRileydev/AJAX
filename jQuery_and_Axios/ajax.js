window.onload = function() {

$("#btn").click(function(){
  // alert("u clicked");
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: 'json'
  })
  .done(addP)
  .fail(function(){
    alert("FAILURE");
  })
});

function addP (data){
    $('p').text(data[0])
  }

$("#getBtn").click(function(){
  $.get('https://api.github.com/users/colt')
});

$("#postBtn").click(function(){

});

$("#getJSONBtn").click(function(){

});


}
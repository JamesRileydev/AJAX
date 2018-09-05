window.onload = function () {

  $("#btn").click(function () {
    // alert("u clicked");
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      dataType: 'json'
    })
      .done(addP)
      .fail(function () {
        alert("FAILURE");
      })
  });

  function addP(data) {
    $('p').text(data[0])
  }

  $("#getBtn").click(function () {
    $.get('https://api.github.com/users/JamesRileydev')
      .done(function (data) {
        console.log(data);
      })
      .fail(function () {
        console.log("Error");
      })
  });

  $("#postBtn").click(function () {
    var data_ = {name: 'Billy', city: "G-rap"};
    $.post("https://www.goodtimesforall.com", data_)
      .done(function (data) {
        console.log(data);
      })
      .fail(function () {
        console.log("Error");
      })
  });

  $("#getJSONBtn").click(function () {
    $.getJSON('http://letsrevolutionizetesting.com/challenge')
    .done(function(data){
      console.log(data);
    })
    .fail(function(){
      console.log("getJSON failed");
    })
  });


}
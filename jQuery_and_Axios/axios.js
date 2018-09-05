window.onload = function () {

  var btn = document.querySelector('button');
  var section = this.document.querySelector('#comments');
  btn.addEventListener("click", sendRequest);

  function sendRequest() {
    axios.get("https://jsonplaceholder.typicode.com/comments", {
      params: {
        postId: 1
      }
    })
      .then(addComments)
      .catch(handleErrors)
  }

  function addComments(res) {
    res.data.forEach(function (comment) {
      appendComment(comment);
    });
  }

  function appendComment(comment) {
    var newP = document.createElement("p");
    newP.innerText = comment.email;
    section.appendChild(newP);
  }

  function handleErrors(err) {
    if (err.response) {
      console.log("Problems with Response ", err.response.status);
    } else if (err.request) {
      console.log("Error with Request!");
    } else {
      console.log("Error", err.message)
    }
  }

  // var url = 'https://opentdb.com/api.php?amount=1';
  // axios.get(url)
  //   .then(function (res) {
  //     console.log(res.data.results[0].question);
  //   })
  //   .catch(function () {
  //     console.log("Error");
  //   })



}
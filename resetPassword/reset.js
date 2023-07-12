const email = document.getElementById("email");
const theoldPassword = document.getElementById("oldPassword");
const thenewPassword = document.getElementById("newPassword");
const resetButton = document.querySelector(".submitBtn");

console.log(resetButton)

const resetProperties = {
email: "",
oldPassword: "",
newPassword: "",
}

resetButton.addEventListener("click", (e) => {
    resetPassword()
    e.preventDefault();
    console.log(resetProperties);
})


function resetPassword() {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email.value,
  "oldPassword": theoldPassword.value,
  "newPassword": thenewPassword.value
});

console.log(newPassword)

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://eventease.us-west-1.elasticbeanstalk.com/api/v1/user/passwordreset", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}


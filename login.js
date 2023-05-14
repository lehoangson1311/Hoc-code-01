// hide/show password
function showPassword() {
  const inputPass = document.getElementById("inputPasswordLogin");
  console.log(inputPass.attributes.type.value);
  if (inputPass.attributes.type.value === "password") {
    inputPass.attributes.type.value = "text";
  } else {
    inputPass.attributes.type.value = "password";
  }
}
// đưa đến link đăng ký
function registerHome() {
  window.location = "http://127.0.0.1:5500/register.html";
}
// validation form login
const inputUsername = document.getElementById("inputUserLogin");
const inputPassword = document.getElementById("inputPasswordLogin");
const btnLogin = document.getElementById("loginToHome");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href =
        "http://127.0.0.1:5500/Layout-Scloudy/Trang-chu.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});

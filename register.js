// hide/show password
function showPassword() {
  const inputPass = document.getElementById("passwordSignup");
  console.log(inputPass.attributes.type.value);
  if (inputPass.attributes.type.value === "password") {
    inputPass.attributes.type.value = "text";
  } else {
    inputPass.attributes.type.value = "password";
  }
}
function showPassword2() {
  const inputPass = document.getElementById("passwordRepeatSignup");
  console.log(inputPass.attributes.type.value);
  if (inputPass.attributes.type.value === "password") {
    inputPass.attributes.type.value = "text";
  } else {
    inputPass.attributes.type.value = "password";
  }
}
// localStorage đăng ký
const inputUsernameRegister = document.getElementById("userNameSignup");
const inputPasswordRegister = document.getElementById("passwordSignup");
const inputPasswordRepeatRegister = document.getElementById(
  "passwordRepeatSignup"
);
const firstNameRepeatRegister = document.getElementById("firstNameSignup");
const lastNameRepeatRegister = document.getElementById("lastNameSignup");
const btnRegister = document.getElementById("submitSignup");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else if (
    inputPasswordRegister.value !== inputPasswordRepeatRegister.value
  ) {
    console.log(inputPasswordRegister, inputPasswordRepeatRegister);
    alert("vui lòng nhập đúng mật khẩu");
  } else {
    // array user

    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
      firstName: firstNameRepeatRegister.value,
      lastName: lastNameRepeatRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "http://127.0.0.1:5500/Layout-Scloudy/login.html";
  }
});

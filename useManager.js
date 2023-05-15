const data = [];
function addData() {
  const dataUser = document.getElementById("userNameSignup").value;
  const dataFirstName = document.getElementById("firstNameSignup").value;
  const dataLastName = document.getElementById("lastNameSignup").value;
  const itemData = {
    username: dataUser,
    firstName: dataFirstName,
    lastName: dataLastName,
  };
  data.push(itemData);
  renderData();
}
function renderData() {
  table = `<tr>
            <th>username</th>
            <th>firstName</th>
            <th>lastName</th>
            </tr>`;
  for (let i = 0; i < data.length; i++) {
    localStorage.getItem(inputUsernameRegister);
    table += `<tr>
            <th>${data[i].username}</th>
            <th>${data[i].firstName}</th>
            <th>${data[i].lastName}</th>
            </tr>`;
  }
  document.getElementById("render").innerHTML = table;
}

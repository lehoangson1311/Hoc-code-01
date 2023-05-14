// trỏ vào trang đăng nhập và đăng ký
function loginHome() {
  window.location = "http://127.0.0.1:5500/Layout-Scloudy/login.html";
}
function registerHome() {
  window.location = "http://127.0.0.1:5500/register.html";
}
// vòng lặp để lấy thông tin
let list = [];
const postListCar = JSON.parse(localStorage.getItem("listCar"));
list = postListCar;
const listCar = document.getElementById("list-card");

// render lại list
function loop() {
  listCar.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const elementCar = document.createElement("div");
    elementCar.innerHTML = `<div class="card-sub2">
    <img src="${list[i].imgInput}" alt="" />
    <div class="text-card">
      <div class="text-content-left">
        <p>Loại xe: ${list[i].car}</p>
        <p>Hãng xe: ${list[i].brand}</p>
        <p>Năm sản xuất:  ${list[i].age}</p>
      </div>
      <div class="text-content-right">
        <p>tỉnh thành:${list[i].city}</p>        
        <p>giá: ${list[i].price}</p>
        <p>số km đã chạy: ${list[i].kilometer}</p>
      </div>
    </div>
    <div class="btnDelete">
     <button class="delete" onclick="removeItem(${i})" ><span class="text">Delete</span></button>
     </div>
  </div>`;
    listCar.appendChild(elementCar);
  }
}

loop();
// dialog active
function showDialog() {
  document.getElementById("dialogMainId").style.display = "flex";
}
function hideDialog() {
  document.getElementById("dialogMainId").style.display = "none";
}

// xử lí input hình ảnh
const fileUpload = document.getElementById("imgInput");
let imgLink = "";
fileUpload.addEventListener("change", (event) => {
  const files = event.target.files;
  // đối tượng cho phép web đọc không đồng bộ nội dung của tệp
  const reader = new FileReader();

  reader.readAsDataURL(files[0]);

  reader.addEventListener("load", (e) => {
    const img = e.target.result;
    imgLink = img;
    console.log(img);
  });
});

// nhập số liệu mới vào form
const getFormValue = () => {
  const car = document.getElementById("car").value;
  const brand = document.getElementById("brand").value;
  const price = document.getElementById("price").value;
  const age = document.getElementById("age").value;
  const city = document.getElementById("city").value;
  const kilometer = document.getElementById("kilometer").value;
  console.log(imgLink);
  return {
    car: car,
    brand: brand,
    price: price,
    age: age,
    city: city,
    kilometer: kilometer,
    imgInput: imgLink,
  };
};

// add param
const add = (item) => {
  list.push(item);
  this.loop();
};
// xóa loop
const removeItem = (index) => {
  let removeQuestion = prompt(
    "Do you wanna delete the post ?? please write down 'YES' to confirm !"
  );
  if (removeQuestion === "YES") {
    list.splice(index, 1);
    loop();
    let listCar = JSON.stringify(list);
    localStorage.setItem("listCar", listCar);
    alert("Deleted");
  } else {
  }
};

// xử lý submit form
const remove = () => {};
const submit = () => {
  add(getFormValue());
  // localStorage
  let listCar = JSON.stringify(list);
  localStorage.setItem("listCar", listCar);

  fileUpload.value = "";
  imgLink = "";
  document.getElementById("dialogMainId").style.display = "none";
};

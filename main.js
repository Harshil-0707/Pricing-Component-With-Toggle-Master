const btn = document.getElementById("inner-button1");
const amount = document.getElementsByClassName("amount");

btn.onclick = () => {
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    amount[0].innerHTML = "$19.99";
    amount[1].innerHTML = "$24.99";
    amount[2].innerHTML = "$39.99";
  } else {
    amount[0].innerHTML = "$199.99";
    amount[1].innerHTML = "$249.99";
    amount[2].innerHTML = "$399.99";
  }
};

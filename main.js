const form = document.querySelector("#form2");
const btn = document.querySelector("#btn");
form.onsubmit = (e) => {
  e.preventDefault();
};

btn.onclick = () => {
  alert("Hello");
};

document.getElementById("submit").addEventListener("click", function () {
  const inputValue = document.querySelector("#user-input").value;
  // console.log(inputValue);
  const li = document.createElement("li");
  // console.log(li);
  li.innerText = inputValue;
  // console.log(li)
  document.querySelector("#list-container").appendChild(li);
});

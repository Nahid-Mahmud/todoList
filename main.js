"use strict ";
document
  .getElementById("user-input")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    if (text !== "") {
      document.querySelector("#submit").removeAttribute("disabled");
    } else {
      document.querySelector("#submit").setAttribute("disabled", true);
    }
  });

document.getElementById("submit").addEventListener("click", function () {
  const inputValue = document.querySelector("#user-input").value;
  // console.log(inputValue);
  const li = document.createElement("li");
  // console.log(li);
  li.setAttribute("class", "listItem");
  li.classList.add(
    "listItem",
    "w-[max-content]",
    "text-xl",
    "px-4",
    "py-4",
    "rounded-md",
    "text-center",
    "flex",
    "flex-col",
    "bg-slate-400"
  );
  // console.log(li);
  li.innerText = inputValue;
  // console.log(li)

  document.querySelector("#list-container").appendChild(li);
});

document
  .querySelector("#list-container")
  .addEventListener("click", function (event) {
    // console.log(event.target);
    event.target.parentNode.removeChild(event.target);
  });

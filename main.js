"use strict";

// creating todo template

document.querySelector("#submit").addEventListener("click", function () {
  const listContainer = document.createElement("section");
  // console.log(listContainer);
  listContainer.innerHTML = `<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title text-xl font-medium" id="heading">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p id="description">hello</p>
    <div class="text-center md:text-right">
      <button class="completed-task btn btn-primary capitalize">
        Task Completed
      </button>
    </div>
  </div>
</div>`;
  console.log(listContainer);
  document.querySelector("#accordian-container").appendChild(listContainer);
});


let addItem = document.querySelector("#shopping-list").addEventListener("submit", function(event) {
    event.preventDefault();

    let line = document.createElement("li");
    let inputValue = event.target.querySelector("#input").value;
    let newLine = document.createTextNode(inputValue);

    const list = document.querySelector("#items");

    list.appendChild(newLine);
    // list.insertBefore(line, list.querySelector(":nth-child(1)"));
  });

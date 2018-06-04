const list = document.querySelector("#items");

let addItem = document.querySelector("#shopping-list").addEventListener("submit", function(event) {
    event.preventDefault();

    let line = document.createElement("li");
    let inputValue = event.target.querySelector("#input").value;
    let newLine = document.createTextNode(inputValue);

    line.appendChild(newLine);
    list.appendChild(line);
    // list.insertBefore(line, list.querySelector(":nth-child(1)"));
  });

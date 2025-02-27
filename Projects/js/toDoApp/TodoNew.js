let inPut = document.querySelector("input");
    let btn = document.querySelector("button");
    let ul = document.querySelector("ul");
    let QuitBtn = document.getElementById("quit");
    QuitBtn.classList.add("quit");

    btn.addEventListener("click", function () {
      let item = document.createElement("li");
      item.style.margin = "10px";
      item.style.fontWeight = "700";
      item.style.fontSize = "25px";
      item.style.textTransform = "capitalize";

      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.classList.add("btn");

      deleteBtn.addEventListener("click", function () {
        item.remove(this);
      });

      if (inPut.value == "") {
        alert("invalid input!");
      } else {
        item.innerText = inPut.value;
        ul.appendChild(item);
        item.appendChild(deleteBtn);
        inPut.value = "";
      }

      QuitBtn.addEventListener("click", function () {
        item.remove(item);
        let msg = document.createElement("h3");
        msg.innerText = "Byee! Have a nice day :)";
        ul.appendChild(msg);
      });
    });
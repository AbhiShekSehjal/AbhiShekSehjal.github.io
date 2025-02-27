let CopyBtn = document.querySelector("#copyBtn");
      let heading = document.querySelector("h1");
      let button = document.querySelector("#colorGenerator");
      let underBox = document.getElementById("underbox");

      button.addEventListener("click", () => {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let newColor = `rgb(${red},${green},${blue})`;

        heading.innerHTML = newColor;

        underBox.style.backgroundColor = newColor;
      });

      CopyBtn.addEventListener("click", () => {
        let CopiedBtn = document.querySelector(".copiedBtn");
        window.navigator.clipboard.writeText(heading.innerText);
        CopiedBtn.setAttribute("style", "display:inline");
      });
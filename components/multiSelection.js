
window.addEventListener("message", function (event) {
    this.localStorage.setItem("selectedOption", "transferencia-unica")
    if (event.data && event.data.type === "applyStyles") {
      var style = document.createElement("style");
      style.innerHTML = event.data.css;
      document.head.appendChild(style);
      document.getElementById("titulo").innerHTML = getComputedStyle(document.querySelector(".titulo")).getPropertyValue("--titulo").trim().replace(/"/g, "");
      document.getElementById("transferencia-unica-label").innerHTML = getComputedStyle(document.querySelector(".titulo")).getPropertyValue("--unico").trim().replace(/"/g, "");
      document.getElementById("transferencia-multiple-label").innerHTML = getComputedStyle(document.querySelector(".titulo")).getPropertyValue("--multiples").trim().replace(/"/g, "");
    }
  });

  



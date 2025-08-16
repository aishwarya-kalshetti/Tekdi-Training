const textarea = document.getElementById("text");
    const counter = document.getElementById("counter");
    const limit = 100;

    textarea.addEventListener("keyup", () => {
      const remaining = limit - textarea.value.length;
      counter.textContent = "Characters left: " + remaining;
      counter.classList.toggle("red", remaining < 0);
    });
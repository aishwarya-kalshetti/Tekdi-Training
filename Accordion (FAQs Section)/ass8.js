const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
      header.addEventListener("click", () => {
       
        document.querySelectorAll(".accordion-content").forEach(content => {
          content.classList.remove("active");
        });

        const content = header.nextElementSibling;
        content.classList.add("active");
      });
    });
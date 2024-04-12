document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form khi submit

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    var loading = document.getElementById("loading-overlay");
    loading.classList.add("is-active");

    fetch(
      "https://script.google.com/macros/s/AKfycbxUGl7G9kDJaHQyesVhhA1SJfpTusDUZEAwrO2d1DA758pcIRypbFRMInwYMV6kZQvSEA/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      }
    )
      .then((response) => {
        loading.classList.remove("is-active");

        var myModal = new bootstrap.Modal(
          document.getElementById("modalSendContact")
        );
        myModal.show();
        form.reset();
      })
      .catch((error) => {
        loading.classList.remove("is-active");
      });
  });
});

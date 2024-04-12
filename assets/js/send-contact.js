document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form khi submit

    // Hiển thị loading và ẩn thông báo
    // document.querySelector(".loading").style.display = "block";
    // document.querySelector(".error-message").style.display = "none";
    // document.querySelector(".sent-message").style.display = "none";

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    fetch(
      "https://script.google.com/macros/s/AKfycbx6McxS7OaxZbaoxJAGoUMQ2eI-Qfps2QB0h3Wox0vnPmPhvuFTEcLrIPNHB1MtQpQ/exec",
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
        // document.querySelector(".loading").style.display = "none"; // Ẩn loading

        var myModal = new bootstrap.Modal(
          document.getElementById("modalSendContact")
        );
        myModal.show();
      })
      .catch((error) => {
        // Hiển thị thông báo lỗi
        // document.querySelector(".error-message").style.display = "block";
        // document.querySelector(".error-message").textContent =
        //   "An error occurred. Please try again.";
      });
  });
});

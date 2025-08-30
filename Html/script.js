// ✅ JavaScript to show alert on form submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your feedback! We appreciate it.");
      form.reset();
    });
  }
});

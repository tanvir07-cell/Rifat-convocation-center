const loader = document.getElementById("loader");

// using arrow function to the loader:
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// removing toast message:
document.getElementById("btn-close").addEventListener("click", () => {
  document.getElementById("myToast").style.display = "none";
});

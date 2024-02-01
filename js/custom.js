const modelBox = document.getElementById("model-box");

function showModel() {
  setTimeout(() => {
    modelBox.style.display = "block";
  }, 2000);
}

function closeModel() {
  modelBox.style.display = "none";
}

showModel();

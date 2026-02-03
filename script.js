// No button bhagne ke liye
const noBtn = document.querySelector(".no-button");

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Yes button click
function yesClicked() {
  document.querySelector("h1").innerHTML = "I love you Nandu 💖✨";
  document.body.style.background =
    "radial-gradient(circle, #ffdde1, #ee9ca7)";
}
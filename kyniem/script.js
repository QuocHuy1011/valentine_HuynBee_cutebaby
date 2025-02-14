document.getElementById("playButton").addEventListener("click", function() {
  document.getElementById("videoOverlay").style.display = "flex";
});

function closeVideo() {
  document.getElementById("videoOverlay").style.display = "none";
  document.getElementById("videoPlayer").pause();

  // Ẩn nút play và chữ "Ấn vào nút play", hiển thị hộp quà và chữ "Ấn vào hộp quà"
  document.getElementById("playButton").style.display = "none";
  document.getElementById("playText").style.display = "none";
  document.getElementById("giftBox").style.display = "block";
  document.getElementById("giftText").style.display = "block";
}

// Chuyển hướng khi nhấn vào hộp quà
document.getElementById("giftBox").addEventListener("click", function() {
  window.location.href = "../loichuc/index.html";
});

// hiệu ứng mưa tym
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = '<img src="../img/tym.png" alt="heart image" style="width: 30px; height: 30px;">';
  heart.classList.add("falling-heart");
  document.body.appendChild(heart);

  const left = Math.random() * window.innerWidth;
  const duration = Math.random() * 3 + 2;
  const size = Math.random() * 20 + 10;

  heart.style.left = `${left}px`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;

  setTimeout(() => {
      heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 200);

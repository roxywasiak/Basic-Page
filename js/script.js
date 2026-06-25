const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const emailAddress = "your@email.com";
  const subject = "Message from my About Me webpage";
  const body = `Hi, ${message}`;

  window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  formMessage.textContent = "Your email app should now open!";
});

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    musicButton.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicButton.textContent = "▶ Play Music";
  }
});

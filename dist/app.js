const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); // observe each element

document.getElementById("youtube").addEventListener("click", youtube);

function youtube() {
    document.getElementById("clickable");
    window.location.href = "https://www.youtube.com/@kociumba";
  }

document.getElementById("github").addEventListener("click", github);

function github() {
  document.getElementById("clickable");
  window.location.href = "https://www.github.com/kociumba";
}

document.getElementById("discord").addEventListener("click", discord);

function discord() {
  document.getElementById("clickable");
  window.location.href = "https://discord.gg/h2t8TxYffk";
}

document.getElementById("spotify").addEventListener("click", spotify);

function spotify() {
  document.getElementById("clickable");
  window.location.href = "https://open.spotify.com/artist/1ScF8LjgGaH54EkCiwCqNU?si=bMqr6dLkS0inuMfQekBl5g";
}

document.getElementById("email").addEventListener("click", email);

function email() {
  document.getElementById("clickable");
  window.location.href = "mailto: kociumbaofficial@gmail.com?subject=Business Inquiry&body = Message";
}


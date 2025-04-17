// ======= VALIDASI NAMA USER =======
let savedName = localStorage.getItem("userName");

if (!savedName) {
  savedName = prompt("Masukkan nama Anda:");
  if (savedName) {
    localStorage.setItem("userName", savedName);
  } else {
    savedName = "Pengunjung";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.getElementById("userName");
  if (nameElement) {
    nameElement.textContent = savedName;
  }
});


// ======= FORM MESSAGE HANDLER =======
document.getElementById("formMessage").addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil nilai input dari form
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tgl_lahir").value;
  const pekerjaan = document.getElementById("pekerjaan").value;
  const pesan = document.getElementById("pesan").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const now = new Date().toLocaleString();

  // Buat elemen output
  const outputBox = document.getElementById("outputBoxContainer");
  const table = document.createElement("table");
  table.className = "output-table";

  table.innerHTML = `
    <tr><td><strong>Waktu</strong></td><td>${now}</td></tr>
    <tr><td><strong>Nama</strong></td><td>${nama}</td></tr>
    <tr><td><strong>Tanggal Lahir</strong></td><td>${tanggal}</td></tr>
    <tr><td><strong>Jenis Kelamin</strong></td><td>${gender}</td></tr>
    <tr><td><strong>Pekerjaan</strong></td><td>${pekerjaan}</td></tr>
    <tr><td><strong>Pesan</strong></td><td>${pesan}</td></tr>
  `;

  outputBox.appendChild(table);
  this.reset();
});


// ======= SLIDER BANNER =======
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Tampilkan slide pertama dan mulai auto-slide setiap 10 detik
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
  setInterval(() => {
    nextSlide();
  }, 10000);
});

// ======= RESPONSIVE NAVIGASI =======
const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Optional: close menu on link click (for better UX)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

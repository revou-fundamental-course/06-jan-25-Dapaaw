

function gantiNama() {
  let nama = prompt("Masukkan nama anda");
  if (nama && nama.trim() !== "") {
      document.getElementById("username").innerHTML = nama;
  } else {
      document.getElementById("username").innerHTML = "Guest";
  }
}

// Run when page loads
window.addEventListener('DOMContentLoaded', function() {
  gantiNama();
});


function validateForm() {
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const genderInputs = document.getElementsByName('gender');
  const message = document.getElementById('message').value;
  
  // Basic validation
  if (!name || !dob || !message) {
      alert('Please fill in all required fields');
      return false;
  }
  
  let selectedGender = '';
  for (const gender of genderInputs) {
      if (gender.checked) {
          selectedGender = gender.value;
          break;
      }
  }
  
  if (!selectedGender) {
      alert('Please select a gender');
      return false;
  }
  
  // Update output box
  document.getElementById('time').textContent = new Date().toLocaleString();
  document.getElementById('outputName').textContent = name;
  document.getElementById('outputDob').textContent = dob;
  document.getElementById('outputGender').textContent = selectedGender;
  document.getElementById('outputMessage').textContent = message;
  
  // Show output box
  document.getElementById('output-box').style.display = 'block';
  
  return false; // Prevent form submission
}

// Optional: Add slide functionality for the homepage slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initialize slider
showSlide(0);
setInterval(nextSlide, 5000); // Change slide every 5 seconds

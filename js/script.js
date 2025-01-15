// function gantiNama() {
//     let nama = prompt("Masukkan nama anda");
//     document.getElementById("username").innerHTML = nama;
// }

// gantiNama();

function validateForm() {
    // Ambil nilai input
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();

    // Validasi input
    if (name === "") {
      alert("Nama harus diisi!");
      return false;
    }

    if (dob === "") {
      alert("Tanggal lahir harus diisi!");
      return false;
    }

    if (!gender) {
      alert("Jenis kelamin harus dipilih!");
      return false;
    }

    if (message === "") {
      alert("Pesan harus diisi!");
      return false;
    }

    // Menampilkan waktu saat ini
    const currentTime = new Date().toString();

    // Tampilkan hasil di bagian output
    document.getElementById("time").textContent = currentTime;
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputDob").textContent = dob;
    document.getElementById("outputGender").textContent = gender.value;
    document.getElementById("outputMessage").textContent = message;

    // Return false untuk mencegah pengiriman form
    return false;
  }
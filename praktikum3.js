// Ini adalah non void karena memakai return 
// sehingga mengembalikan nilai ke variabel yang sudah ditentukan (hasil)
// hanya menghitung dan menghasilkan nilai
function kelilingPersegi(sisi) {
  return 4 * sisi;
}

// Ini adalah void karena tidak memakai return sehingga tidak mengembalikan nilai
// dalam fungsi void ini terdapat variabel (hasil) yang memanggil fungsi non void (kelilingPersegi)
// Sehingga ketika fungsi ini dipanggil maka akan menempatkan argumen dari (sisi) ke dalam parameter fungsi non-void
// hanya memanggil fungsi non void dan menampilkan outputnya
function cetakKeliling(sisi) {
  let hasil = kelilingPersegi(sisi);
  console.log('Persegi dengan sisi ' + sisi + ' memiliki keliling ' + hasil);
}

cetakKeliling(6);
cetakKeliling(10);
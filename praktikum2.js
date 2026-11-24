function luasPersegi(sisi) {
  sisi * sisi;
}

let luas1 = luasPersegi(5);
let luas2 = luasPersegi(8);

console.log('Luas persegi pertama: ' + luas1);
console.log('Luas persegi kedua: ' + luas2);
console.log('Jumlah kedua luas: ' + (luas1 + luas2));

//1. Saat return dihapus
// semua nilai dari variabel yang menggunakan fungsi adalah undefined
// sehingga tidak bisa menjumlahkan kedua variabel tersebut

//2. Kita bisa menjumlahkan luas1 dan luas2 karena
// setelah menjalankan fungsi maka hasilnya akan dihitung lalu dikembalikan ke masing masing variabel untuk disimpan (luas1 dan luas2)
// sehingga kedua variabel terisi angka dan bisa dijumlahkan
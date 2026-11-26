function hitungRataRata(n1, n2, n3){
    let rata=(n1+n2+n3)/3;
    return rata;
}

function tentukanPredikat(rataRata){
    if (rataRata >= 85){
        predikat='A';
    } else if (rataRata >= 75){
        predikat='B';
    } else if (rataRata >= 60){
        predikat='C';
    } else{
        predikat='D';
    }
    return predikat;
}

function cetakRapor(nama, n1, n2, n3){
    console.log('============================');
    console.log('Nama : '+nama);
    let rataRata=hitungRataRata(n1, n2, n3);
    let predikat=tentukanPredikat(rataRata);
    console.log('Rata-rata : '+rataRata.toFixed(2));
    console.log('Predikat : '+predikat);
    console.log('============================');
}

cetakRapor('Zalfa', 89, 70, 95);
cetakRapor('Athaya', 90, 91, 94);
cetakRapor('Wawa', 69, 75, 79);
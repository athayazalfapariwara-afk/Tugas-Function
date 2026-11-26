function luasPersegiPanjang(panjang, lebar){
    let luas=panjang * lebar;
    return luas;
}

function kelilingPersegiPanjang(panjang, lebar){
    let keliling=(panjang+lebar)*2;
    return keliling;
}

console.log('Luas = ' + luasPersegiPanjang(10, 4));
console.log('Keliling = ' + kelilingPersegiPanjang(10, 4));
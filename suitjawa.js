var tanya = true;
while (tanya){
//menangkap pilihan player
var p = prompt('pilih : gajah, semut, orang')

//menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();
// menentukan rules
if( comp < 0.34){
    comp = 'gajah';
}else if (comp >=0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}
console.log(comp);

var hasil = '';
if( p == comp){
    hasil = 'SERI!';
}if (p == 'gajah') {
    // if(comp == 'orang'){
    // hasil = 'MENANG!';
    //}else{
    // hasil = 'KALAH!';
    //}
    hasil = (comp == 'orang')? 'MENANG!' : 'KALAH!';
} else if ( p == 'orang'){
    if ( comp == 'gajah'){
        hasil =  'KALAH!';
    }else {
        hasil =  'MENANG!';
    }
}
// menentukan rules
if (p == comp){
    // if(comp == 'orang'){
    // hasil = 'MENANG!';
    // } else
    // hasil = 'KALAH!';{   
    //}
    hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
}  else if( p == 'orang') {
    hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
} else if ( p == 'semut') {
    hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
} 
//tampilkan hasil
alert('kamu memilih :  ' +  p  +' dan komputer memilih :  '+ comp +'\nMaka hasilnya : ' +hasil);}
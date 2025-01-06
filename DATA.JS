const nama = "muhammad akbar";
let usia = 70;

// if () {

// } 
// else if () {

// } 
// else if () {

// } 
// else {

// }    

function generateBiodata() {
    // LEBIH DARI (>) & KURANG DARI (<)
    if (usia > 10 && usia < 18) {
        console.log('anda remaja');
    } 
    else if (usia > 18 && usia < 30) {
        console.log('anda dewasa');
    }
    else if (usia > 30) {
        console.log('anda orang tua');
    }
    else if (usia > 5 && usia < 10) {
        console.log('anda anak-anak');
    }
    else {  
        console.log('lu masih bayi ya hahaha');
    }
}

console.log(nama);
console.log(usia);

generateBiodata();
//alert("Hello world");

let a = 3;
let b = 5;

//console.log(a + b)
console.log(suma(3, 3));


/*Functie JS*/
function suma(a, b){
	return a + b;
}

/*Instructiuni de decizie*/

const n = 2;
if(n > 0){
	console.log("Pozitiv")
} else if(n < 0) {
	console.log("Negativ")
} else {
	console.log("Null")
}


let cifra = 2;
switch(cifra){
	case 1: 
		console.log("Unu")
		break;
	case 2: 
		console.log("Doi")
		break;
	case 3: 
		console.log("Trei")
		break;
	default: 
		console.log("Nu est ecifra")
}
/*Instructiuni repetitive*/

for(let i = 1; i <=5; i++){
	console.log(i);	
}

let i = 1;
while( i <=5){
	console.log(i);	
	i++;
}

i = 1;
do{
	console.log(i);	
	i++;
}while( i <=5);


/*Siruri de caractere*/
console.clear();

const name = "Ion Creanga";

console.log(name);
console.log(name.length);
console.log(name.split(" "));


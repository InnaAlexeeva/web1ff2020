/*Functii*/

const x = 2;
const y = 0;


/*
console.log(`${x} + ${y} = ${suma(x, y)}`);
console.log(`${x} - ${y} = ${diferenta(x, y)}`);
console.log(x + " * " + y  + " = " + produs(x, y));
console.log(`${x} / ${y} = ${impartire(x, y)}`);
*/

function suma(x, y){
	return x + y;
}


function diferenta(x, y){
	return x - y;
}

function produs(x, y){
	return x * y;
}

function impartire(x, y){
	if (y !== 0){
		return x / y;
	}
	return "Error. Devidign by zero";	
}


/*Siruri de caractere*/

let name = "Ion Creanga";

console.log(name);
console.log(name.length);
console.log(name.split(' '));
console.log(name.charAt(0));
console.log(name.toLowerCase());
console.log(name.toUpperCase());


/*Masive*/

let note = [10, 9, 7, 8];
console.log(note);
console.log(note.length);
console.log(Math.max(...note));
console.log(Math.min(...note));
console.log(note.reduce((a, b) => a + b, 0) / note.length);

const user = ["Mihai", "Eminescu", 170];
console.log(user);
console.log(user.join(" "));
function buttonClicked() {
	console.log('buttonClicked');
}

function buttonClicked2() {
	console.log('buttonClicked 2');
}

document.getElementById('clickMe2').addEventListener("click", function(){
	buttonClicked2();
});

/*------------------------------*/

function suma(x, y){
	return x + y;
}
document.getElementById("calculateButton").addEventListener("click", function(){
	const x = +document.getElementById('x').value;
	const y = Number(document.getElementById('y').value);
	console.log(suma(x, y))
})


/*-----------------------------------*/

document.getElementById('hideMeButton').addEventListener("click", function(){
	setTimeout(function(){
		document.getElementById('hideMeButton').style.display = 'none';
	}, 2000);
});

document.getElementById('showHidenButton').addEventListener("click", function(){
	document.getElementById('hideMeButton').style.display = 'inline';
});

/*---------------------*/


document.getElementById("colorListButton").addEventListener("mouseover", function(){
	colorList();
});

const colorList = () => {
	const listItems = document.querySelectorAll("ul li");
	for (i = 0; i < listItems.length; i++) {
	  listItems[i].style.backgroundColor = "red";
	}

	//document.body.style.backgroundColor = 'yellow';
	document.querySelector('body').style.backgroundColor = 'yellow';
}

document.getElementById("colorListButton").addEventListener("mouseleave", function(){
	uncolorList();
});

const uncolorList = () => {
	const listItems = document.querySelectorAll("ul li");
	for (i = 0; i < listItems.length; i++) {
	  listItems[i].style.backgroundColor = "";
	}
	document.body.style.backgroundColor = '';
	//document.querySelector('body').style.backgroundColor = '';
}
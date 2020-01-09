const pi = 3.14;
function bereken() {
	let omtrek = (document.querySelector("input").value*pi);
	let oppervlakte = (document.querySelector("input").value*document.querySelector("input").value*pi*0.25);
	
    document.querySelector("p").innerHTML = "RESULT:<br>Omtrek -> "+omtrek+"<br>Oppervlakte -> "+oppervlakte;
}

document.querySelector("small").innerText = new Date().toTimeString().split(" ")[0]
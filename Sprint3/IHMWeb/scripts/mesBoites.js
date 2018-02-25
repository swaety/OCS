var client = new XMLHttpRequest();
//change it to idPost if it's a Post Page
//document.getElementById("debug").innerHTML = "ID particulier is :"+idParticulier;
var IPCloud = "http://localhost:5555/"
client.open("GET",IPCloud+'particulier/'+idParticulier+'/boites/', false);
client.send(null);

var currentList = JSON.parse(client.response);
var printList1 = "<table border=\"1\" style=\"width:100%;\"><thead><tr><th><p style=\"text-align:center;\">UUID</p></th><th><p style=\"text-align:center;\">Adresse</p></th><th><p style=\"text-align:center;\">Gérer</p></th></tr></thead><tbody>";
for(let i = 0; i < currentList.length ; i++){
	var elem = document.createElement("div");
	printList1 += '<tr><td style="text-align:center;">' +currentList[i].uuid + '</td><td style="text-align:center;">' + currentList[i].adresseNum +' '+currentList[i].adresseRue +' '+currentList[i].adresseCP+' ' +currentList[i].adresseVille +'</td><td style="text-align:center;">' + '<div onclick="clicGerer('+i+')" style="border:1px solid black; cursor: pointer;"><div style="text-align:center;text-decoration:none; "><p>' +'Gerer' + '</p></div></div>'  +'</td></tr>';	
}
printList1 += "</tbody></table>";
document.getElementById("data").innerHTML = printList1;


function clicGerer(i) {
	var printArt1='<table border="1" style="width:100%;"><thead><tr><th><p style="text-align:center;">Num</p></th><th><p style="text-align:center;">Rue</p></th><th><p style="text-align:center;">Code Postale</p></th><th><p style="text-align:center;">Ville</p></th><th><p style="text-align:center;">Supprimer</p></th></tr></thead><tbody>';
	document.getElementById("retour").style.visibility = 'visible';
	var elem = document.createElement("div");
	printArt1 += '<tr><td style="text-align:center;">'+ currentList[i].adresseNum + '</td><td style="text-align:center;">'+currentList[i].adresseRue +'</td><td style="text-align:center;">'+ currentList[i].adresseCP+'</td><td style="text-align:center;">'+currentList[i].adresseVille +'</td><td style="text-align:center;">' + '<div onclick="clicRemove('+i+')" style="border:1px solid black; cursor: pointer;"><div style="text-align:center;text-decoration:none; "><p>' +'Suppr' + '</p></div></div>'  +'</td></tr>';	
	document.getElementById("data").innerHTML = printArt1;	
}

function retour(){
	document.getElementById("retour").style.visibility = 'hidden';
	document.getElementById("data").innerHTML = printList1;
}

function clicRemove(uuidb){
	var uu = currentList[uuidb].uuid
	client.open("DELETE",IPCloud+'particulier/'+idParticulier+'/boites/'+uu+'/del', false);
	client.send(null);
	client.open("GET",IPCloud+'particulier/'+idParticulier+'/boites/', false);
	client.send(null);
	currentList = JSON.parse(client.response);
	printList1 = "<table border=\"1\" style=\"width:100%;\"><thead><tr><th><p style=\"text-align:center;\">UUID</p></th><th><p style=\"text-align:center;\">Adresse</p></th><th><p style=\"text-align:center;\">Gérer</p></th></tr></thead><tbody>";
	
	for(let i = 0; i < currentList.length ; i++){
		var elem = document.createElement("div");
		printList1 += '<tr><td style="text-align:center;">' +currentList[i].uuid + '</td><td style="text-align:center;">' + currentList[i].adresseNum +' '+currentList[i].adresseRue +' '+currentList[i].adresseCP+' ' +currentList[i].adresseVille +'</td><td style="text-align:center;">' + '<div onclick="clicGerer('+i+')" style="border:1px solid black; cursor: pointer;"><div style="text-align:center;text-decoration:none; "><p>' +'Gerer' + '</p></div></div>'  +'</td></tr>';	
	}
	printList1 += "</tbody></table>";
	document.getElementById("data").innerHTML = printList1;
}

function addboite() {
    var nom = prompt("entrez un nom pour votre boite:", "");
	var adressNum = prompt("adresse(numero):", "");
	var adressRue = prompt("adresse(rue):", "");
	var adressCP = prompt("adresse(code postal):", "");
	var adressVille = prompt("adresse(ville):", "");
	var adressPays = prompt("adresse(pays):", "");
	var uuid = prompt("uuid de votre smartil:", "");
	var xhr = new XMLHttpRequest();
	xhr.open("POST", IPCloud+'particulier/'+idParticulier+'/'+nom+'/'+adressNum+'/'+adressRue+'/'+adressCP+'/'+adressVille+'/'+adressPays+'/'+uuid+'/', true);
	xhr.send(null);
	client.open("GET",IPCloud+'particulier/'+idParticulier+'/boites/', false);
	client.send(null);
	currentList = JSON.parse(client.response);
	printList1 = "<table border=\"1\" style=\"width:100%;\"><thead><tr><th><p style=\"text-align:center;\">UUID</p></th><th><p style=\"text-align:center;\">Adresse</p></th><th><p style=\"text-align:center;\">Gérer</p></th></tr></thead><tbody>";
	
	for(let i = 0; i < currentList.length ; i++){
		var elem = document.createElement("div");
		printList1 += '<tr><td style="text-align:center;">' +currentList[i].uuid + '</td><td style="text-align:center;">' + currentList[i].adresseNum +' '+currentList[i].adresseRue +' '+currentList[i].adresseCP+' ' +currentList[i].adresseVille +'</td><td style="text-align:center;">' + '<div onclick="clicGerer('+i+')" style="border:1px solid black; cursor: pointer;"><div style="text-align:center;text-decoration:none; "><p>' +'Gerer' + '</p></div></div>'  +'</td></tr>';	
	}
	printList1 += "</tbody></table>";
	

	document.getElementById("data").innerHTML = printList1;
}
var client = new XMLHttpRequest();
client.open("GET",'http://192.168.0.14:5555/particulier', false);
client.send(null);
var currentList = JSON.parse(client.response);

function parseCalendar(str){
	var res = "";
	res = res + str.slice(8, 10);
	if(str.slice(5, 7)=="01"){
		res = res + " Janvier ";
	}
	else if(str.slice(5, 7)=="02"){
		res = res + " Février ";
	}
	else if(str.slice(5, 7)=="03"){
		res = res + " Mars ";
	}
	else if(str.slice(5, 7)=="04"){
		res = res + " Avril ";
	}
	else if(str.slice(5, 7)=="05"){
		res = res + " Mai ";
	}
	else if(str.slice(5, 7)=="06"){
		res = res + " Juin ";
	}
	else if(str.slice(5, 7)=="07"){
		res = res + " Juillet ";
	}
	else if(str.slice(5, 7)=="08"){
		res = res + " Août ";
	}
	else if(str.slice(5, 7)=="09"){
		res = res + " Septembre ";
	}
	else if(str.slice(5, 7)=="10"){
		res = res + " Octobre ";
	}
	else if(str.slice(5, 7)=="11"){
		res = res + " Novembre ";
	}
	else if(str.slice(5, 7)=="12"){
		res = res + " Décembre ";
	}
	res = res + str.slice(0, 4);
	res = res + " à ";
	res = res + str.slice(11, 16);
	return res;
}


var tableofclients = "<table border=\"1\" style=\"width:100%;\"><thead><tr><th><p style=\"text-align:center;\">Boite</p></th><th><p style=\"text-align:center;\">Nom</p></th><th><p style=\"text-align:center;\">Prénom</p></th><th><p style=\"text-align:center;\">Adresse</p></th><th><p style=\"text-align:center;\">Courrier</p></th></tr></thead><tbody>";
var tableofresults = "";
for(let i = 0; i < currentList.length ; i++){
	
	for(let j = 0; j < currentList[i].listBoite.length ; j++){
		var elem = document.createElement("div");
		tableofclients += '<tr><td>' +currentList[i].listBoite[j].uuid + '</td><td style="text-align:center;">' + currentList[i].nom +'</td><td style="text-align:center;">' + currentList[i].prenom +'</td><td style="text-align:center;">' + currentList[i].listBoite[j].adresseNum +' '+ currentList[i].listBoite[j].adresseRue +' '+ currentList[i].listBoite[j].adresseCP + ' '+ currentList[i].listBoite[j].adresseVille +'</td><td style="text-align:center;">' + '<div onclick="clicCourrier('+i+','+j+')" style="border:1px solid black; cursor: pointer;"><div style="text-align:center;text-decoration:none; "><p>' +'Courrier' + '</p></div></div>'  +'</td></tr>';	
	}
}
tableofclients += "</tbody></table>"
document.getElementById("data").innerHTML = tableofclients;


function clicCourrier(i,j) {
	var tableofresults='<br><div><button onclick="returntab()">retour</button></div><br><table border=\"1\" style=\"width:30%; float:left;\"><thead><tr><th>Heure de récéption de courrier</th></tr></thead><tbody>';
	for(let k = 0; k < currentList[i].listBoite[j].listCourrier.length ; k++){
		var elem = document.createElement("div");
		tableofresults += '<tr><td>'+ parseCalendar(currentList[i].listBoite[j].listCourrier[k].dateHeure) +'</td></tr>';	
	}
	tableofresults += '</tbody></table><table border=\"1\" style=\"width:70%; float:right;\"><thead><tr><th>Heure de dépot du colis</th><th>Heure du passage du facteur</th><th>Colis réceptionné par la poste</th></tr></thead><tbody>';
	
	var ListDepot= [];
	var ListPrise= [];
	var ListStatus= [];
	var myLenght = currentList[i].listBoite[j].listColis.length;
	
	for(let k = 0; k < myLenght ; k++){
		if(currentList[i].listBoite[j].listColis[k].statut==true){
			ListDepot.push(parseCalendar(currentList[i].listBoite[j].listColis[k].dateHeureDep));
			ListPrise.push(parseCalendar(currentList[i].listBoite[j].listColis[k].dateHeurePri));
			ListStatus.push(currentList[i].listBoite[j].listColis[k].statut);
		}
		else if(currentList[i].listBoite[j].listColis[k].statut==false){
			ListDepot.push(parseCalendar(currentList[i].listBoite[j].listColis[i].dateHeureDep));
			ListPrise.push("Votre colis est toujours dans votre boite");
			ListStatus.push(currentList[i].listBoite[j].listColis[k].statut);
		}
		
	}
	for(let z = 0; z < myLenght ; z++){
		var elem = document.createElement("div");
		if(ListStatus[z]==true){
			tableofresults += '<tr><td>'+ListDepot[z]+'</td><td>'+ListPrise[z]+'</td><td>&#10004</td></tr>';
		}
		else if(ListStatus[z]==false){
			tableofresults += '<tr><td>'+ListDepot[z]+'</td><td>'+ListPrise[z]+'</td><td>X</td></tr>';
		}
	}
	tableofresults += "</tbody></table>";
	document.getElementById("data").innerHTML = tableofresults;
}

function returntab(){
	document.getElementById("data").innerHTML = tableofclients;
}
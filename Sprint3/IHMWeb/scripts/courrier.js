var client = new XMLHttpRequest();
//change it to idPost if it's a Post Page
var idParticulier = "<?php echo $_SESSION['idParticulier'];?>";

client.open("GET",'http://192.168.0.14:5555/particulier/'+idParticulier+'/boites', false);
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

console.log(currentList);
var tableofboites = "<table border=\"1\" style=\"width:100%;\"><thead><tr><th><p style=\"text-align:center;\">Boite</p></th><th><p style=\"text-align:center;\">Adresse</p></th><th><p style=\"text-align:center;\">Action</p></th></tr></thead><tbody>";
var tableofresults = "";
for(let i = 0; i < currentList.length ; i++){
	var elem = document.createElement("div");
	tableofboites += '<tr><td style="text-align:center;">' +currentList[i].uuid + '</td><td style="text-align:center;">' + currentList[i].adresseNum +' '+ currentList[i].adresseRue +' '+ currentList[i].adresseCP + ' '+ currentList[i].adresseVille +'</td><td style="text-align:center;">' + '<div onclick="clicAction('+i+')" style="border:1px solid black; cursor: pointer;"><div style="text-align:center;text-decoration:none; "><p>' +'Courrier' + '</p></div></div>'  +'</td></tr>';	
}
tableofboites += "</tbody></table>"
document.getElementById("data").innerHTML = tableofboites;


function clicAction(i) {
	var tableofresults='<br><div><button onclick="returntab()">retour</button></div><br><table border=\"1\" style=\"width:30%; float:left;\"><thead><tr><th>Heure de récéption de courrier</th></tr></thead><tbody>';
	for(let k = 0; k < currentList[i].listCourrier.length ; k++){
		var elem = document.createElement("div");
		tableofresults += '<tr><td style="text-align:center;">'+ parseCalendar(currentList[i].listCourrier[k].dateHeure) +'</td></tr>';	
	}
	tableofresults += '</tbody></table><table border=\"1\" style=\"width:70%; float:right;\"><thead><tr><th>Heure de dépot du colis</th><th>Heure du passage du facteur</th><th>Colis réceptionné par la poste</th></tr></thead><tbody>';
	
	var ListDepot= [];
	var ListPrise= [];
	var ListStatus= [];
	var myLenght = currentList[i].listColis.length;
	
	for(let k = 0; k < myLenght ; k++){
		if(currentList[i].listColis[k].statut==true){
			ListDepot.push(parseCalendar(currentList[i].listColis[k].dateHeureDep));
			ListPrise.push(parseCalendar(currentList[i].listColis[k].dateHeurePri));
			ListStatus.push(currentList[i].listColis[k].statut);
		}
		else if(currentList[i].listColis[k].statut==false){
			ListDepot.push(parseCalendar(currentList[i].listColis[i].dateHeureDep));
			ListPrise.push("Votre colis est toujours dans votre boite");
			ListStatus.push(currentList[i].listColis[k].statut);
		}
		
	}
	for(let z = 0; z < myLenght ; z++){
		var elem = document.createElement("div");
		if(ListStatus[z]==true){
			tableofresults += '<tr><td style="text-align:center;">'+ListDepot[z]+'</td><td style="text-align:center;">'+ListPrise[z]+'</td><td style="text-align:center;">&#10004</td></tr>';
		}
		else if(ListStatus[z]==false){
			tableofresults += '<tr><td style="text-align:center;">'+ListDepot[z]+'</td><td style="text-align:center;">'+ListPrise[z]+'</td><td style="text-align:center;">X</td></tr>';
		}
	}
	tableofresults += "</tbody></table>";
	document.getElementById("data").innerHTML = tableofresults;
}

function returntab(){
	document.getElementById("data").innerHTML = tableofboites;
}
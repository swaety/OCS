var client = new XMLHttpRequest();
client.open("GET",'http://192.168.0.18:8080/boite/0/colis', false);
client.send(null);
var myMail = JSON.parse(client.response);

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

var ListDepot= [];
var ListPrise= [];
var ListStatus= [];
var myLenght = myMail.length;

for(let i = 0; i < myMail.length ; i++){
	if(myMail[i].statut==true){
		ListDepot.push(parseCalendar(myMail[i].dateHeureDep));
		ListPrise.push(parseCalendar(myMail[i].dateHeurePri));
		ListStatus.push(myMail[i].statut);
	}
	else if(myMail[i].statut==false){
		ListDepot.push(parseCalendar(myMail[i].dateHeureDep));
		ListPrise.push("Votre colis est toujours dans votre boite");
		ListStatus.push(myMail[i].statut);
	}
	
}

	var printTab = "";
	for(let j = 0; j < myLenght ; j++){
		var elem = document.createElement("div");
		if(ListStatus[j]==true){
			printTab += '<tr><td>'+ListDepot[j]+'</td><td>'+ListPrise[j]+'</td><td>&#10004</td></tr>';
		}
		else if(ListStatus[j]==false){
			printTab += '<tr><td>'+ListDepot[j]+'</td><td>'+ListPrise[j]+'</td><td>X</td></tr>';
		}
	}
	document.getElementById("tab").innerHTML = printTab;
	

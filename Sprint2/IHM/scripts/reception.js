//var myMail = JSON.parse('[{"dateHeure": "2017-12-22 08:45:24.754655456373623"},{"dateHeure": "2018-01-22 20:45:24.754655456373623"}]'); 
var client = new XMLHttpRequest();
client.open("GET",'http://192.168.0.18:8080/boite/0/courrier', false);
client.send(null);
var myMail = JSON.parse(client.response);
var MailList= [];

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

for(let i = 0; i < myMail.length ; i++){
	MailList.push(parseCalendar(myMail[i].dateHeure));
}
	
	var printTab = "";
	for(let j = 0; j < MailList.length ; j++){
		var elem = document.createElement("div");
		printTab += '<tr><td>' +MailList[j] + '</td></tr>';
	}
	document.getElementById("tab").innerHTML = printTab;
	

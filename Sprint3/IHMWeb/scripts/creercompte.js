function particulier(){
	document.getElementById('choice').style.visibility='hidden';
	document.getElementById('contenu').innerHTML = "<div w3-include-html='creercompteParticulier.html'></div> ";
	w3.includeHTML();

}
function poste(){
	document.getElementById('choice').style.visibility='hidden';
	document.getElementById('contenu').innerHTML = "<div w3-include-html='creercomptePoste.html'></div> ";
	w3.includeHTML();
}
	

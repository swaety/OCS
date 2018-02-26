import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../providers/share/share';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
	public myID = this.shareService.getID(); 
	public balList = JSON.parse(this.shareService.getbal());
	public bal = {};
	public items = [{name:"item 1", description:"description example 1" }, { name:"item 2", description:"description example 2" }, { name:"item 3", description:"description example 3" }];
  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareService, public httpClient: HttpClient) {
  	console.log(this.myID);
  	console.log(this.balList);
  }

parseCalendar(str){
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

test(numBoite){
  	var boitetag = -1;
  	var myString = "";
  	for(var i=0; i<this.balList.length; i++){
  		if(this.balList[i].uuid == numBoite){
  			boitetag = i;
  		}
  	}
  	myString += "Courriers reçus :\n"
  	for(var i=0; i<this.balList[boitetag].listCourrier.length; i++){
  		myString += this.parseCalendar(this.balList[boitetag].listCourrier[i].dateHeure);
  		myString += "\n";
  	}
  	alert(myString);
  }
  /*ionViewDidEnter(){
  	console.log(this.shareService.getID())
  }*/

}

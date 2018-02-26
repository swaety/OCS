import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../providers/share/share';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
nomb: string;
numrue: string;
nomrue: string;
cp: string;
ville: string;
pays: string;
uuid: string;
uri: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public shareService: ShareService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  addBal(){
  	console.log(this.nomb);
  	console.log(this.numrue);
  	console.log(this.nomrue);
  	console.log(this.cp);
  	console.log(this.ville);
  	console.log(this.pays);
  	console.log(this.uuid);
  	this.uri = "";
  	this.uri += this.shareService.getIP();
  	this.uri += '/particulier/';
  	this.uri += this.shareService.getID();
  	this.uri += '/';
  	this.uri += this.nomb;
  	this.uri += '/'
  	this.uri += this.numrue;
  	this.uri += '/';
  	this.uri += this.nomrue;
  	this.uri += '/';
  	this.uri += this.cp;
  	this.uri += '/';
  	this.uri += this.ville;
  	this.uri += '/';
  	this.uri += this.pays;
  	this.uri += '/';
  	this.uri += this.uuid;

  	this.httpClient.post(this.uri, null).subscribe(data => {});
  }

}

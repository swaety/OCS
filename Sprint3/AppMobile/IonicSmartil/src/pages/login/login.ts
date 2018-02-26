import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../providers/share/share';
import { AlertController } from 'ionic-angular';

 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 	login: string;
 	password: string;
  server: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public shareService: ShareService, private alertCtrl: AlertController) { }

  doLogin() {
    this.httpClient.get(this.server+'/particulier/'+this.login+'/'+this.password)
    .subscribe(data => { 
      this.shareService.setID(data);
      if(data!=null){
        this.shareService.setIP(this.server);
        this.navCtrl.setRoot('MenuPage');
        this.httpClient.get(this.server+'/particulier/'+this.shareService.getID()+'/boites')
        .subscribe(data2 => {
          this.shareService.setbal(JSON.stringify(data2));
        })
      }
      else{
        //alert("Login ou mot de passe incorrect ...")
        let alert = this.alertCtrl.create({
          title: 'Erreur',
          message: 'Login ou mot de passe incorrect',
          buttons: ['Réessayer']
          });
        alert.present();
        }
    })
  } 
}
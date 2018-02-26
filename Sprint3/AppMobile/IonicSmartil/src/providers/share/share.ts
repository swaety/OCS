import { Injectable } from '@angular/core';
 
@Injectable()
export class ShareService {
     
    id: any;
    mesbal: any;
    ipserver: any;
 
    constructor() {
        this.id = '-1';
        this.mesbal = {"key":"null"};
        this.ipserver = 'http://'
    }
  
    setID(changed) {
        this.id = changed.Ide;       
    }
    setbal(changed) {
        this.mesbal = changed;       
    }
    getbal(){
        return this.mesbal;
    }
  
    getID() {
        return this.id;
    }  
    setIP(changed){
        this.ipserver = changed;
    }
    getIP(){
        return this.ipserver;
    }
}
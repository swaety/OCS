//
//  ViewController.swift
//  Smartil
//
//  Created by jonathan on 22/02/2018.
//  Copyright © 2018 jonathan. All rights reserved.
//

import UIKit
import Foundation

extension UIColor {
    convenience init(hexString: String, alpha: CGFloat = 1.0) {
        let hexString: String = hexString.trimmingCharacters(in: CharacterSet.whitespacesAndNewlines)
        let scanner = Scanner(string: hexString)
        if (hexString.hasPrefix("#")) {
            scanner.scanLocation = 1
        }
        var color: UInt32 = 0
        scanner.scanHexInt32(&color)
        let mask = 0x000000FF
        let r = Int(color >> 16) & mask
        let g = Int(color >> 8) & mask
        let b = Int(color) & mask
        let red   = CGFloat(r) / 255.0
        let green = CGFloat(g) / 255.0
        let blue  = CGFloat(b) / 255.0
        self.init(red:red, green:green, blue:blue, alpha:alpha)
    }
    func toHexString() -> String {
        var r:CGFloat = 0
        var g:CGFloat = 0
        var b:CGFloat = 0
        var a:CGFloat = 0
        getRed(&r, green: &g, blue: &b, alpha: &a)
        let rgb:Int = (Int)(r*255)<<16 | (Int)(g*255)<<8 | (Int)(b*255)<<0
        return String(format:"#%06x", rgb)
    }
}

class ViewController: UIViewController, UITextFieldDelegate {

    @IBOutlet weak var connect: UIButton!
    @IBOutlet weak var login: UITextField!
    @IBOutlet weak var mdp: UITextField!
    @IBOutlet weak var adresseip: UITextField!
    
    var idparticulier = ""
    var ipserver = "http://"
    
    override func viewDidLoad() {
        super.viewDidLoad()

        let url = URL(string: "http://172.20.10.4:3000/app")
        
        let task = URLSession.shared.dataTask(with: url!) {(data, response, error) in
            if(error==nil){
                    let test = NSString(data: data!, encoding: String.Encoding.utf8.rawValue)
                    print(test)
            }else{
                print("error")
            }
        }
        task.resume()
        self.login.delegate = self
        self.mdp.delegate = self
        self.adresseip.delegate = self
        connect.backgroundColor = UIColor(hexString: "#F2F2F2")
        connect.setTitleColor(UIColor.black, for: .normal)
        connect.layer.cornerRadius = 15
        login.placeholder = "Pseudo"
        mdp.placeholder = "Mot de passe"
        mdp.isSecureTextEntry = true
        adresseip.placeholder = "adresse IP du serveur (alpha version)"
        assignbackground()
        print("blabla")
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    func assignbackground(){
        let background = UIImage(named: "background.png")
        
        var imageView : UIImageView!
        imageView = UIImageView(frame: view.bounds)
        imageView.contentMode =  UIViewContentMode.scaleAspectFill
        imageView.clipsToBounds = true
        imageView.image = background
        imageView.center = view.center
        view.addSubview(imageView)
        self.view.sendSubview(toBack: imageView)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        self.view.endEditing(true)
    }
    
    /*override func shouldPerformSegue(withIdentifier identifier: String, sender: Any?) -> Bool {
        if (identifier == "loginbutton"){
            return false
        }
        else{
            return true
        }
    }*/
    
    
    @IBAction func ConnectButton(_ sender: Any) {
        let errorLoggin: UIAlertView = UIAlertView(title: "Erreur", message: "Login ou Mot de passe incorect !",delegate: self as? UIAlertViewDelegate, cancelButtonTitle: "Réessayer")
        
        let mstoryboard: UIStoryboard = UIStoryboard.init(name: "Main", bundle: nil)
        let tabBar = mstoryboard.instantiateViewController(withIdentifier: "tabBar")
        
        var isOK = true
        var connectip = ipserver
        connectip += adresseip.text!
        connectip += "/particulier/"
        connectip += login.text!
        connectip += "/"
        connectip += mdp.text!
        ipserver += adresseip.text!
        print(connectip)
        if(isOK){
            self.present(tabBar, animated: true, completion: nil)
        }else{
            errorLoggin.show()
        }
        
    }
    
}


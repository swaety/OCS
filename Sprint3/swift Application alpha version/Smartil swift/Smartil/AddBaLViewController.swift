//
//  AddBaLViewController.swift
//  Smartil
//
//  Created by jonathan on 22/02/2018.
//  Copyright © 2018 jonathan. All rights reserved.
//

import UIKit

class AddBaLViewController: UIViewController, UITextFieldDelegate{

    @IBOutlet weak var name: UITextField!
    @IBOutlet weak var numerorue: UITextField!
    @IBOutlet weak var rue: UITextField!
    @IBOutlet weak var codepostal: UITextField!
    @IBOutlet weak var ville: UITextField!
    @IBOutlet weak var pays: UITextField!
    @IBOutlet weak var uuid: UITextField!
    @IBOutlet weak var addBaL: UIButton!
    @IBOutlet weak var scan: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.name.delegate = self
        self.numerorue.delegate = self
        self.rue.delegate = self
        self.codepostal.delegate = self
        self.ville.delegate = self
        self.pays.delegate = self
        self.uuid.delegate = self
        addBaL.backgroundColor = UIColor(hexString: "#F2F2F2")
        addBaL.setTitleColor(UIColor.black, for: .normal)
        addBaL.layer.cornerRadius = 15
        scan.backgroundColor = UIColor(hexString: "#F2F2F2")
        scan.setTitleColor(UIColor.black, for: .normal)
        scan.layer.cornerRadius = 15
        uuid.placeholder = "uuid situé sous le couvercle de votre smartil"
        pays.placeholder = "Pays"
        codepostal.placeholder = "Code postal"
        ville.placeholder = "Ville"
        numerorue.placeholder = "N°"
        rue.placeholder = "Rue"
        name.placeholder = "Nom de la boite (ie: Maison)"
        assignbackground()
        // Do any additional setup after loading the view.
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

    @IBAction func click_AddBaL(_ sender: Any) {
        let addSucces: UIAlertView = UIAlertView(title: "Boite ajoutée !", message: name.text!+" fait désormais partie de vos boites Smartil !",delegate: self as? UIAlertViewDelegate, cancelButtonTitle: "Ok")
        addSucces.show()
        let vc = MesBaLViewController(nibName: "MesBaLViewController", bundle: nil)
        vc.boites.append(name.text!)
        let mstoryboard: UIStoryboard = UIStoryboard.init(name: "Main", bundle: nil)
        let tabBar = mstoryboard.instantiateViewController(withIdentifier: "tabBar")
        tabBar.viewWillAppear(true)
        self.present(tabBar, animated: true, completion: nil)
    }
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}

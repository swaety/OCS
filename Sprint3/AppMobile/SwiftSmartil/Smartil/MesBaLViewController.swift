//
//  MesBaLViewController.swift
//  Smartil
//
//  Created by jonathan on 22/02/2018.
//  Copyright © 2018 jonathan. All rights reserved.
//

import UIKit

class MesBaLViewController: UIViewController {
    
    @IBOutlet weak var mystack: UIStackView!
    var boites = ["Maison"]
    
    func loadBoites(){
        var k = 45
        for i in 0..<boites.count {
            view.addSubview(makeButtonWithText(text: boites[i],ypos:k))
            k = k + 85
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let vc = ViewController(nibName: "ViewController", bundle: nil)
        var test = vc.ipserver
        loadBoites()
        
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
    
    func makeButtonWithText(text:String, ypos:Int) -> UIButton {
        let myButton = UIButton(type: UIButtonType.system)
        //Set a frame for the button. Ignored in AutoLayout/ Stack Views
        myButton.frame = CGRect(x: 17, y:ypos, width: 343, height: 75)
        myButton.backgroundColor = UIColor(hexString: "#F2F2F2")
        myButton.setTitle(text, for: [])
        myButton.setTitleColor(UIColor.black, for: .normal)
        myButton.layer.cornerRadius = 10
        /*let deepPressGestureRecognizer = deepPressGestureRecognizer(target: self,
                                                                    action: "deepPressHandler:",
                                                                    threshold: 0.75)
        myButton.addGestureRecognizer(deepPressGestureRecognizer)*/
        
        return myButton
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

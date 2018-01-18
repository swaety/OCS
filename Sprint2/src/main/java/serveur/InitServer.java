package serveur;


import database.MockDatabase;
import entities.Courrier;
import saveData.JSONData;

import java.io.File;
import java.util.ArrayList;

public class InitServer {

    private static File courrier = new File("./src/main/resources/Courrier.txt");

    public InitServer(){}

    public void initialisation(){

        Courrier courrier0 = new Courrier("Calendar","10:45","17/12/2017","antibes","1 km/h");
        MockDatabase.data.addCourrier(courrier0);
        Courrier courrier1 = new Courrier("Phone","10:22","18/12/2017","cii","155 km/h");
        MockDatabase.data.addCourrier(courrier1);
        ArrayList<Courrier> listCourrier = new ArrayList<Courrier>();
        listCourrier.add(courrier0);
        listCourrier.add(courrier1);

        JSONData.saveJSON(MockDatabase.data.getCourriersList(), courrier);
    }
}


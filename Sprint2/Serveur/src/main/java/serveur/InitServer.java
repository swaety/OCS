package serveur;


import database.MockDatabase;
import entities.Boite;
import saveData.JSONData;

import java.io.File;
import java.util.ArrayList;

public class InitServer {

    private static File courrier = new File("./src/main/resources/Boite.txt");

    public InitServer(){}

    public void initialisation(){

        Boite boite0 = new Boite("Calendar","10:45","17/12/2017","antibes","1 km/h");
        MockDatabase.data.addCourrier(boite0);
        Boite boite1 = new Boite("Phone","10:22","18/12/2017","cii","155 km/h");
        MockDatabase.data.addCourrier(boite1);
        ArrayList<Boite> listBoite = new ArrayList<Boite>();
        listBoite.add(boite0);
        listBoite.add(boite1);

        JSONData.saveJSON(MockDatabase.data.getCourriersList(), courrier);
    }
}


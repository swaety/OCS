package serveur;


import database.MockDatabase;
import entities.Boite;
import entities.Particulier;
import entities.Poste;
import saveData.JSONData;

import java.io.File;

/**
 * Created by Thomas on 22/01/2018.
 */
public class InitServer {

    private static File boite = new File("./src/main/resources/Boite.txt");
    private static File particulier = new File("./src/main/resources/Particulier.txt");
    private static File poste = new File("./src/main/resources/Poste.txt");

    public InitServer(){}

    public void initialisation(){

        Particulier particulier0 = new Particulier("Lavirotte","Stéphane", 12,
                3, 1970, "stephane@lavirotte.com", "0600000000", "sea3017",
                329, "chemin du valbosquet", "06600",
                "Cannes", "FR");
        MockDatabase.data.addParticulier(particulier0);
        Particulier particulier1 = new Particulier("Tigli","Jean-Yves", 30,
                2, 1965, "jean-yves.tigli@unice.fr", "0600020000", "pfe2017",
                85, "rue Henri Poincarre", "06460",
                "Biot", "FR");
        MockDatabase.data.addParticulier(particulier1);


        Boite boite0 = new Boite("Maison", 329, "chemin du valbosquet", "06600",
                "Cannes", "FR");
        MockDatabase.data.addBoite(boite0);
        Boite boite1 = new Boite("Maison", 85, "rue Henri Poincarre", "06460",
                "Biot", "FR");
        MockDatabase.data.addBoite(boite1);

        Poste poste0 = new Poste("Poste Principale", 2, "CHEMIN DES TERRIERS", "06600",
                "Antibes", "FR", "laposte@laposte.com", "04 93 34 61 73",
                "lesbolosses", 10);
        MockDatabase.data.addPoste(poste0);

        JSONData.saveJSON(MockDatabase.data.getBoitesList(), boite);
        JSONData.saveJSON(MockDatabase.data.getParticuliersList(), particulier);
        JSONData.saveJSON(MockDatabase.data.getPostesList(), poste);
    }
}


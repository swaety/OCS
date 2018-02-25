package serveur;


import database.MockDatabase;
import entities.Boite;
import entities.Particulier;
import entities.Poste;
import loadAndSaveData.LoadBoite;
import loadAndSaveData.SaveData;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
public class InitServer {

    private static File boite = new File("./src/main/resources/Boite.txt");
    private static File particulier = new File("./src/main/resources/Particulier.txt");
    private static File poste = new File("./src/main/resources/Poste.txt");

    public InitServer(){}

    public void initialisation() {

        Particulier particulier0 = new Particulier("Boudab","Jonathan","shaeny", 9,
                10, 1994, "test@test.com", "0600000000", "azerty123",
                329, "chemin du valbosquet", "06600",
                "Antibes", "FR");
        MockDatabase.data.addParticulier(particulier0);
        Particulier particulier1 = new Particulier("Tigli","Jean-Yves","sapin", 30,
                2, 1965, "jean-yves.tigli@unice.fr", "0600020000", "pfe2017",
                85, "rue Henri Poincarre", "06460",
                "Biot", "FR");
        MockDatabase.data.addParticulier(particulier1);
        ArrayList<Particulier> listParticulier = new ArrayList<Particulier>();
        listParticulier.add(particulier0);
        listParticulier.add(particulier1);


        Boite boite0 = new Boite("Maison", 329, "chemin du valbosquet", "06600",
                "Antibes", "FR", "2fac1234-31f8-11b4-a222-08002b34c003");
        MockDatabase.data.addBoite(boite0);
        Boite boite1 = new Boite("Ecole", 85, "rue Henri Poincare", "06410",
                "Biot", "FR", "abc");
        MockDatabase.data.addBoite(boite1);
        ArrayList<Boite> listBoite = new ArrayList<Boite>();
        listBoite.add(boite0);
        listBoite.add(boite1);

        Poste poste0 = new Poste("Poste Principale","poste1", 2, "CHEMIN DES TERRIERS", "06600",
                "Antibes", "FR", "laposte@laposte.com", "04 93 34 61 73",
                "lesbolosses", 10);
        MockDatabase.data.addPoste(poste0);

        ArrayList<Poste> listPoste = new ArrayList<Poste>();
        listPoste.add(poste0);

        particulier0.getListBoite().add(boite0);
        //particulier0.getListBoite().add(boite1);
        particulier1.getListBoite().add(boite1);
        //particulier1.getListBoite().add(boite0);

        //LoadBoite.load(null,boite);

        SaveData.saveJSON(MockDatabase.data.getBoitesList(), boite);
        SaveData.saveJSON(MockDatabase.data.getParticuliersList(), particulier);
        SaveData.saveJSON(MockDatabase.data.getPostesList(), poste);
    }
}


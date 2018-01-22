package database;


import entities.*;

import java.util.ArrayList;


/**
 * Created by Thomas on 22/01/2018.
 */

public class MockDatabase {
    public static MockDatabase data = new MockDatabase();

    private ArrayList<Boite> boitesList;
    private ArrayList<Particulier> particuliersList;
    private ArrayList<Poste> postesList;

    public MockDatabase(){
        boitesList = new ArrayList<Boite>();
        particuliersList = new ArrayList<Particulier>();
        postesList = new ArrayList<Poste>();
    }

    public void addBoite(Boite boite) {
        boite.generateID();
        boitesList.add(boite);
    }

    public ArrayList<Boite> getBoitesList() {
        return boitesList;
    }

    public void addParticulier(Particulier particulier) {
        particulier.generateID();
        particuliersList.add(particulier);
    }

    public ArrayList<Particulier> getParticuliersList() {
        return particuliersList;
    }

    public void addPoste(Poste poste) {
        poste.generateID();
        postesList.add(poste);
    }

    public ArrayList<Poste> getPostesList() {
        return postesList;
    }
}
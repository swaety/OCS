package database;


import entities.*;

import java.util.ArrayList;
/**
 * Created by Zeubi on 19/11/2017.
 */

public class MockDatabase {
    public static MockDatabase data = new MockDatabase();

    private ArrayList<Boite> courriersList;

    public MockDatabase(){
        courriersList = new ArrayList<Boite>();
    }

    public void addCourrier(Boite boite) {
        boite.generateID();
        courriersList.add(boite);
    }

    public ArrayList<Boite> getCourriersList() {
        return courriersList;
    }
}
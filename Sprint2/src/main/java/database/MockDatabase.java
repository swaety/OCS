package database;


import entities.*;

import java.util.ArrayList;
/**
 * Created by Zeubi on 19/11/2017.
 */

public class MockDatabase {
    public static MockDatabase data = new MockDatabase();

    private ArrayList<Courrier> courriersList;

    public MockDatabase(){
        courriersList = new ArrayList<Courrier>();
    }

    public void addCourrier(Courrier courrier) {
        courrier.generateID();
        courriersList.add(courrier);
    }

    public ArrayList<Courrier> getCourriersList() {
        return courriersList;
    }
}
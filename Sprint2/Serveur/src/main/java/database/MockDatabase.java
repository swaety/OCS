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

    public ArrayList<Courrier> getCourrierList(long id){
        for (Boite b: boitesList) {
            if(b.getIde()==id){
                return b.getListCourrier();
            }
        }
        return null;
    }

    public void addCourrier(long id, Courrier courrier){
        for (Boite b: boitesList) {
            if(b.getIde()==id){
                b.getListCourrier().add(courrier);
            }
        }
    }

    public ArrayList<Colis> getColisList(long idBoite) {
        for (Boite b: boitesList) {
            if(b.getIde()==idBoite){
                return b.getListColis();
            }
        }
        return null;
    }


    public void addColis(long idBoite, Colis colis, long idColis) {
        colis.setIde(idColis);
        colis.setStatut(false);
        for (Boite b: boitesList) {
            if(b.getIde()==idBoite){
                b.getListColis().add(colis);
            }
        }
    }

    public void modifierColis(long idBoite, Colis colis, long idColis) {
        for (Boite b: boitesList) {
            if(b.getIde()==idBoite){
                for (Colis c : b.getListColis()) {
                    if(c.getIde()==idColis){
                        c.setStatut(true);
                        c.setDateHeurePri(colis.getDateHeurePri());
                    }
                }
            }
        }
    }
}
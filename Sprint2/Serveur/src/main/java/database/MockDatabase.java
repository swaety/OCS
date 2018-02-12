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

    public ArrayList<Courrier> getCourrierList(String id){
        for (Boite b: boitesList) {
            if(b.getUuid().compareTo(id)==0){
                return b.getListCourrier();
            }
        }
        return null;
    }

    public void addCourrier(String id, Courrier courrier){
        for (Boite b: boitesList) {
            if(b.getUuid().compareTo(id)==0){
                b.getListCourrier().add(courrier);
            }
        }
    }

    public ArrayList<Colis> getColisList(String idBoite) {
        for (Boite b: boitesList) {
            if(b.getUuid().compareTo(idBoite)==0){
                return b.getListColis();
            }
        }
        return null;
    }


    public void addColis(String idBoite, Colis colis, long idColis) {
        colis.setIde(idColis);
        colis.setStatut(false);
        for (Boite b: boitesList) {
            if(b.getUuid().compareTo(idBoite)==0){
                b.getListColis().add(colis);
            }
        }
    }

    public void modifierColis(String idBoite, Colis colis, long idColis) {
        for (Boite b: boitesList) {
            if(b.getUuid().compareTo(idBoite)==0){
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
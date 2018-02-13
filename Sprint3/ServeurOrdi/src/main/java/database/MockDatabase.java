package database;


import com.sun.deploy.net.HttpResponse;
import entities.*;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
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

    public ArrayList<Boite> getBoitesListForPoste(long idPoste) throws IOException {
        String adressePoste = "";
        String adresseBoite = "";
        ArrayList<Boite> boiteRayonPoste = new ArrayList<Boite>();
        for (Poste p: postesList) {
            if(p.getIde()==idPoste){
                adressePoste = p.getAdresseNum() + "%20" + p.getAdresseRue() + "%20" + p.getAdresseCP() + "%20" + p.getAdresseVille() + "%20" + p.getAdressePays();
                for (Boite b: boitesList) {
                    adresseBoite = b.getAdresseNum() + "%20" + b.getAdresseRue() + "%20" + b.getAdresseCP() + "%20" + b.getAdresseVille() + "%20" + b.getAdressePays();
                    if(rayon(adressePoste,adresseBoite)<=p.getRayonActivite()){
                        boiteRayonPoste.add(b);
                    }
                }
                return boiteRayonPoste;
            }
        }
        return null;
    }

    public double rayon(String adressePoste, String adresseBoite) throws IOException {
        String urlPoste = "http://maps.googleapis.com/maps/api/geocode/json?address="+adressePoste+"&sensor=false";
        urlPoste = urlPoste.replaceAll("\\s","%20" );
        String urlBoite = "http://maps.googleapis.com/maps/api/geocode/json?address="+adresseBoite+"&sensor=false";
        urlBoite = urlBoite.replaceAll("\\s","%20" );
        String APIKEY = "AIzaSyDNHQ9eQDy_pS1NH1dg2zJ-ckcVCjB13dk";
        URL urlP = new URL(urlPoste + "?" + APIKEY);
        URL urlB = new URL(urlBoite + "?" + APIKEY);
        URLConnection connP = urlP.openConnection();
        URLConnection connB = urlB.openConnection();
        InputStream isP = connP.getInputStream();
        InputStream isB = connB.getInputStream();
        //poste
        BufferedReader streamReaderP = new BufferedReader(new InputStreamReader(isP, "UTF-8"));
        StringBuilder responseStrBuilderP = new StringBuilder();

        String inputStrP;
        while ((inputStrP = streamReaderP.readLine()) != null)
            responseStrBuilderP.append(inputStrP);

        JSONObject jsonObjectP = new JSONObject(responseStrBuilderP.toString());
        //boite
        BufferedReader streamReaderB = new BufferedReader(new InputStreamReader(isB, "UTF-8"));
        StringBuilder responseStrBuilderB = new StringBuilder();

        String inputStrB;
        while ((inputStrB = streamReaderB.readLine()) != null)
            responseStrBuilderB.append(inputStrB);

        JSONObject jsonObjectB = new JSONObject(responseStrBuilderB.toString());
        JSONArray arrP = (JSONArray) jsonObjectP.get("results");
        double latP = (double) arrP.getJSONObject(0).getJSONObject("geometry").getJSONObject("location").get("lat");
        double lonP = (double) arrP.getJSONObject(0).getJSONObject("geometry").getJSONObject("location").get("lng");

        JSONArray arrB = (JSONArray) jsonObjectB.get("results");
        double latB = (double) arrB.getJSONObject(0).getJSONObject("geometry").getJSONObject("location").get("lat");
        double lonB = (double) arrB.getJSONObject(0).getJSONObject("geometry").getJSONObject("location").get("lng");
        return Distance(latP, lonP, latB, lonB);
    }

    public double Distance(double lat_a,double lon_a, double lat_b,double lon_b){

        int R = 6371;
        double latDistance = Math.toRadians(lat_a - lat_b);
        double lonDistance = Math.toRadians(lon_a - lon_b);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat_a)) * Math.cos(Math.toRadians(lat_b))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000;

        distance = Math.pow(distance, 2);

        return Math.sqrt(distance)/1000;
    }
}
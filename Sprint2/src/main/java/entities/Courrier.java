package entities;


import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;

/**
 * Created by Zeubi on 19/11/2017.
 */
@XmlRootElement
@Entity
public class Courrier {

    private static long idGene = 0;

    private String nom;
    private String horaire;
    private String date;
    private String gps;
    private String vitesse;
    private long ide;

    public Courrier() { ide = idGene++; }

    public Courrier(String nom, String horaire, String date, String gps, String vitesse){
        this.nom=nom;
        this.horaire=horaire;
        this.date=date;
        this.gps=gps;
        this.vitesse=vitesse;
        ide = idGene++;
    }

    public static long getIdGene() {
        return idGene;
    }

    public void setGps(String gps) {
        this.gps = gps;
    }

    public void setVitesse(String vitesse) {
        this.vitesse = vitesse;
    }

    public String getGps() {

        return gps;
    }

    public String getVitesse() {
        return vitesse;
    }

    public String getNom() {
        return nom;
    }

    public String getHoraire() {
        return horaire;
    }

    public String getDate() {
        return date;
    }

    public long getIde() {
        return ide;
    }

    public void generateID(){
        this.setIde(idGene-1);
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setHoraire(String horaire) {
        this.horaire = horaire;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setIde(long ide) {
        this.ide = ide;
    }
}

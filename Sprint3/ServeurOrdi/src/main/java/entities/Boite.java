package entities;


import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
@XmlRootElement
@Entity
public class Boite {

    private String nom;
    private int adresseNum;
    private String adresseRue;
    private String adresseCP;
    private String adresseVille;
    private String adressePays;
    private String uuid;
    private ArrayList<Courrier> listCourrier;
    private ArrayList<Colis> listColis;

    public Boite(){
        listCourrier = new ArrayList<Courrier>();
        listColis = new ArrayList<Colis>();
    }

    public Boite(String nom, int adresseNum, String adresseRue, String adresseCP, String adresseVille, String adressePays, String uuid) {
        this.nom = nom;
        this.adresseNum = adresseNum;
        this.adresseRue = adresseRue;
        this.adresseCP = adresseCP;
        this.adresseVille = adresseVille;
        this.adressePays = adressePays;
        listCourrier = new ArrayList<Courrier>();
        listColis = new ArrayList<Colis>();
        this.uuid = uuid;
    }

    public ArrayList<Colis> getListColis() {
        return listColis;
    }

    public void setListColis(ArrayList<Colis> listColis) {
        this.listColis = listColis;
    }

    public ArrayList<Courrier> getListCourrier() {
        return listCourrier;
    }

    public void setListCourrier(ArrayList<Courrier> listCourrier) {
        this.listCourrier = listCourrier;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getAdresseNum() {
        return adresseNum;
    }

    public void setAdresseNum(int adresseNum) {
        this.adresseNum = adresseNum;
    }

    public String getAdresseRue() {
        return adresseRue;
    }

    public void setAdresseRue(String adresseRue) {
        this.adresseRue = adresseRue;
    }

    public String getAdresseCP() {
        return adresseCP;
    }

    public void setAdresseCP(String adresseCP) {
        this.adresseCP = adresseCP;
    }

    public String getAdresseVille() {
        return adresseVille;
    }

    public void setAdresseVille(String adresseVille) {
        this.adresseVille = adresseVille;
    }

    public String getAdressePays() {
        return adressePays;
    }

    public void setAdressePays(String adressePays) {
        this.adressePays = adressePays;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}

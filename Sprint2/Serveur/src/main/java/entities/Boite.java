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

    private static long idGene = 0;

    private String nom;
    private int adresseNum;
    private String adresseRue;
    private String adresseCP;
    private String adresseVille;
    private String adressePays;
    private long ide;
    private ArrayList<Courrier> listCourrier;
    private ArrayList<Colis> listColis;

    public Boite() { ide = idGene++; }

    public Boite(String nom, int adresseNum, String adresseRue, String adresseCP, String adresseVille, String adressePays) {
        this.nom = nom;
        this.adresseNum = adresseNum;
        this.adresseRue = adresseRue;
        this.adresseCP = adresseCP;
        this.adresseVille = adresseVille;
        this.adressePays = adressePays;
        listCourrier = new ArrayList<Courrier>();
        listColis = new ArrayList<Colis>();
        ide = idGene++;
    }

    public void generateID(){
        this.setIde(idGene-1);
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

    public static long getIdGene() {
        return idGene;
    }

    public static void setIdGene(long idGene) {
        Boite.idGene = idGene;
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

    public long getIde() {
        return ide;
    }

    public void setIde(long ide) {
        this.ide = ide;
    }
}

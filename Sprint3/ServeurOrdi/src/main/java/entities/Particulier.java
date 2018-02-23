package entities;


import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
@XmlRootElement
@Entity
public class Particulier {

    private static long idGene = 0;

    private String nom;
    private String prenom;
    private String pseudo;
    private int dateJour;
    private int dateMois;
    private int dateAnnee;
    private String mail;
    private String tel;
    private String mdp;
    private int adresseNum;
    private String adresseRue;
    private String adresseCP;
    private String adresseVille;
    private String adressePays;
    private long ide;
    private ArrayList<Boite> listBoite;

    public Particulier() { ide = idGene++; }

    public Particulier(String nom, String prenom, String pseudo, int dateJour, int dateMois,
                       int dateAnnee, String mail, String tel, String mdp, int adresseNum,
                       String adresseRue, String adresseCP, String adresseVille, String adressePays) {
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
        this.dateJour = dateJour;
        this.dateMois = dateMois;
        this.dateAnnee = dateAnnee;
        this.mail = mail;
        this.tel = tel;
        this.mdp = mdp;
        this.adresseNum = adresseNum;
        this.adresseRue = adresseRue;
        this.adresseCP = adresseCP;
        this.adresseVille = adresseVille;
        this.adressePays = adressePays;
        listBoite = new ArrayList<Boite>();
        ide = idGene++;
    }

    public void generateID(){
        this.setIde(idGene-1);
    }

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public static long getIdGene() {
        return idGene;
    }

    public static void setIdGene(long idGene) {
        Particulier.idGene = idGene;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public int getDateJour() {
        return dateJour;
    }

    public void setDateJour(int dateJour) {
        this.dateJour = dateJour;
    }

    public int getDateMois() {
        return dateMois;
    }

    public void setDateMois(int dateMois) {
        this.dateMois = dateMois;
    }

    public int getDateAnnee() {
        return dateAnnee;
    }

    public void setDateAnnee(int dateAnnee) {
        this.dateAnnee = dateAnnee;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getMdp() {
        return mdp;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
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

    public ArrayList<Boite> getListBoite() {
        return listBoite;
    }

    public void setListBoite(ArrayList<Boite> listBoite) {
        this.listBoite = listBoite;
    }

    public void addBoite(Boite boite) {
        listBoite.add(boite);
    }
}

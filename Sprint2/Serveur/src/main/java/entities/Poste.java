package entities;


import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by Thomas on 22/01/2018.
 */
@XmlRootElement
@Entity
public class Poste {

    private static long idGene = 0;

    private String nom;
    private int adresseNum;
    private String adresseRue;
    private String adresseCP;
    private String adresseVille;
    private String adressePays;
    private long ide;
    private String mail;
    private String tel;
    private String mdp;
    private int rayonActivite;

    public Poste() {
        ide = idGene++;
    }

    public Poste(String nom, int adresseNum, String adresseRue, String adresseCP,
                 String adresseVille, String adressePays, String mail, String tel,
                 String mdp, int rayonActivite) {
        this.nom = nom;
        this.adresseNum = adresseNum;
        this.adresseRue = adresseRue;
        this.adresseCP = adresseCP;
        this.adresseVille = adresseVille;
        this.adressePays = adressePays;
        this.mail = mail;
        this.tel = tel;
        this.mdp = mdp;
        this.rayonActivite = rayonActivite;
        ide = idGene++;
    }

    public void generateID(){
        this.setIde(idGene-1);
    }

    public long getIde() {
        return ide;
    }

    public void setIde(long ide) {
        this.ide = ide;
    }

    public static long getIdGene() {
        return idGene;
    }

    public static void setIdGene(long idGene) {
        Poste.idGene = idGene;
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

    public int getRayonActivite() {
        return rayonActivite;
    }

    public void setRayonActivite(int rayonActivite) {
        this.rayonActivite = rayonActivite;
    }
}

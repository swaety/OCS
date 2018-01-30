package entities;

import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by Thomas on 22/01/2018.
 */
@XmlRootElement
@Entity
public class Colis {

    private static long idGene = 0;

    private String dateHeureDep;
    private String dateHeurePri;
    private boolean statut;
    private long ide;

    public Colis() {
        ide = idGene++;
    }

    public Colis(String dateHeureDep,String dateHeurePri) {
        this.dateHeureDep = dateHeureDep;
        this.dateHeurePri = dateHeurePri;
        this.statut = statut;
        ide = idGene++;
    }

    public String getDateHeureDep() {
        return dateHeureDep;
    }

    public void setDateHeureDep(String dateHeureDep) {
        this.dateHeureDep = dateHeureDep;
    }

    public String getDateHeurePri() {
        return dateHeurePri;
    }

    public void setDateHeurePri(String dateHeurePri) {
        this.dateHeurePri = dateHeurePri;
    }

    public boolean isStatut() {
        return statut;
    }

    public void setStatut(boolean statut) {
        this.statut = statut;
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
}

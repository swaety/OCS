package entities;

import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by Thomas on 22/01/2018.
 */
@XmlRootElement
@Entity
public class Courrier {

    private String dateHeure;

    public Courrier(){}

    public Courrier(String dateHeure) {
        this.dateHeure = dateHeure;
    }

    public String getDateHeure() {
        return dateHeure;
    }

    public void setDateHeure(String dateHeure) {
        this.dateHeure = dateHeure;
    }
}

package services;


import database.MockDatabase;
import entities.Boite;
import entities.Courrier;
import entities.Particulier;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
@Path("/particulier")
public class ParticuliersServices {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public long addParticulier(Particulier particulier) {
        MockDatabase.data.addParticulier(particulier);
        return particulier.getIde();
    }

    @GET
    @Path("/{login}/{mdp}")
    @Produces(MediaType.APPLICATION_JSON)
    public long getIDParticulier(@PathParam("login") String login,@PathParam("mdp") String mdp) {
        return MockDatabase.data.getIDParticulier(login,mdp);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Particulier> getListParticulier() {
        return MockDatabase.data.getParticuliersList();
    }

    //retourner les boites d'un particulier
    @GET
    @Path("/{idParticulier}/boites")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Boite> getListBoitesParticulier(@PathParam("idParticulier") long idParticulier) {
        return MockDatabase.data.getListBoitesParticulier(idParticulier);
    }

    //retourner l'historique d'une boite d'un particulier
    @GET
    @Path("/{idParticulier}/boites/{idBoite}")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Courrier> getListCourrierBoitesParticulier(@PathParam("idParticulier") long idParticulier,@PathParam("idBoite") String idBoite) {
        return MockDatabase.data.getListCourrierBoitesParticulier(idParticulier, idBoite);
    }

    //ajouter une boite à une particulier
    @POST
    @Path("/{idParticulier}/boites/add")
    @Consumes(MediaType.APPLICATION_JSON)
    public String addBoiteParticulier(@PathParam("idParticulier") long idParticulier, Boite boite) {
        MockDatabase.data.addBoiteParticulier(idParticulier, boite);
        return "{\"Reception\":\"OK\"}";
    }

    @POST
    @Path("/{idParticulier}/{nom}/{adresseNum}/{adresseRue}/{adresseCP}/{adresseVille}/{adressePays}/{uuid}")
    @Produces(MediaType.APPLICATION_JSON)
    public String addBoiteParticulier2(@PathParam("idParticulier") long idParticulier, @PathParam("nom") String nom,@PathParam("adresseNum") int adresseNum,@PathParam("adresseRue") String adresseRue,@PathParam("adresseCP") String adresseCP,@PathParam("adresseVille") String adresseVille,@PathParam("adressePays") String adressePays,@PathParam("uuid") String uuid) {
        Boite boite = new Boite(nom,adresseNum,adresseRue,adresseCP,adresseVille,adressePays,uuid);
        MockDatabase.data.addBoiteParticulier2(idParticulier, boite);
        return "{\"Reception\":\"OK\"}";
    }

    //mettre à jour les données d'une boite d'un particulier
    @PUT
    @Path("/{idParticulier}/boites/{idBoite}/modify")
    @Consumes(MediaType.APPLICATION_JSON)
    public String putBoiteParticulier(@PathParam("idParticulier") long idParticulier,@PathParam("idBoite") String idBoite, Boite boite) {
        MockDatabase.data.putBoiteParticulier(idParticulier, idBoite, boite);
        return boite.getUuid();
    }

    @DELETE
    @Path("/{idParticulier}/boites/{idBoite}/del")
    @Produces(MediaType.APPLICATION_JSON)
    public String delBoiteParticulier(@PathParam("idParticulier") long idParticulier,@PathParam("idBoite") String idBoite) {
        MockDatabase.data.delBoiteParticulier(idParticulier, idBoite);
        return "{\"Status\":\"Ok\"}";
    }
}

package services;

import database.MockDatabase;
import entities.Boite;
import entities.Colis;
import entities.Courrier;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
@Path("/boite")
public class BoitesServices {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Boite> getListBoite() {
        return MockDatabase.data.getBoitesList();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public String addBoitep(Boite boite) {
        MockDatabase.data.addBoite(boite);
        return "{\"Reception\":\"OK\"}";

    }

    @GET
    @Path("/{idBoite}/courrier")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Courrier> getListCourrier(@PathParam("idBoite") String idBoite){
        return MockDatabase.data.getCourrierList(idBoite);
    }

    @POST
    @Path("/{idBoite}/courrier")
    @Consumes(MediaType.APPLICATION_JSON)
    public String getReceptionCourrier(@PathParam("idBoite") String idBoite, Courrier courrier) {
        MockDatabase.data.addCourrier(idBoite,courrier);
        return "{\"Reception\":\"OK\"}";
    }

    @GET
    @Path("/{idBoite}/colis")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Colis> getListColis(@PathParam("idBoite") String idBoite){
        return MockDatabase.data.getColisList(idBoite);
    }

    @POST
    @Path("/{idBoite}/colisDepose/{idColis}")
    @Consumes(MediaType.APPLICATION_JSON)
    public String colisDepose(@PathParam("idBoite") String idBoite,@PathParam("idColis") long idColis, Colis colis) {
        MockDatabase.data.addColis(idBoite,colis,idColis);
        return "{\"Reception\":\"OK\"}";
    }

    @POST
    @Path("/{idBoite}/colisPrisFacteur/{idColis}")
    @Consumes(MediaType.APPLICATION_JSON)
    public String colisPrisFacteur(@PathParam("idBoite") String idBoite,@PathParam("idColis") long idColis, Colis colis) {
        MockDatabase.data.modifierColis(idBoite,colis,idColis);
        return "{\"Reception\":\"OK\"}";
    }
}


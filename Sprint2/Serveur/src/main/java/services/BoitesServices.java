package services;

import database.MockDatabase;
import entities.Boite;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
@Path("/boite")
public class BoitesServices {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public long addBoite(Boite boite) {
        MockDatabase.data.addBoite(boite);
        return boite.getIde();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Boite> getListBoite() {
        return MockDatabase.data.getBoitesList();
    }
}


package services;

import database.MockDatabase;
import entities.Boite;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

/**
 * Created by Zeubi on 19/11/2017.
 */
@Path("/courrier")
public class BoitesServices {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public long addCourrier(Boite boite) {
        MockDatabase.data.addCourrier(boite);
        return boite.getIde();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Boite> getListCourrier() {
        return MockDatabase.data.getCourriersList();
    }
}


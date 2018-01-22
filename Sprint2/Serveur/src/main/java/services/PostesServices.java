package services;


import database.MockDatabase;
import entities.Poste;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
@Path("/poste")
public class PostesServices {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public long addPoste(Poste poste) {
        MockDatabase.data.addPoste(poste);
        return poste.getIde();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Poste> getListPoste() {
        return MockDatabase.data.getPostesList();
    }
}

package services;


import database.MockDatabase;
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
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Particulier> getListParticulier() {
        return MockDatabase.data.getParticuliersList();
    }
}

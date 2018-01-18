package services;

import database.MockDatabase;
import entities.Courrier;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;

/**
 * Created by Zeubi on 19/11/2017.
 */
@Path("/courrier")
public class CourrierServices {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public long addApp(Courrier courrier) {
        MockDatabase.data.addCourrier(courrier);
        return courrier.getIde();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Courrier> getListApp() {
        return MockDatabase.data.getCourriersList();
    }
}


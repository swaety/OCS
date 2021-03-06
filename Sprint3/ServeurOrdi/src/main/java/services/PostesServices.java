package services;


import database.MockDatabase;
import entities.Boite;
import entities.Poste;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
@Path("/poste")
public class PostesServices {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public String addPoste(Poste poste) {
        MockDatabase.data.addPoste(poste);
        return "{\"Ide\": "+poste.getIde()+"}";
    }

    @GET
    @Path("/{login}/{mdp}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getIDPoste(@PathParam("login") String login,@PathParam("mdp") String mdp) {
        return "{\"Ide\": "+MockDatabase.data.getIDPoste(login,mdp)+"}";
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Poste> getListPoste() {
        return MockDatabase.data.getPostesList();
    }

    //retourner les boites d'une poste
    @GET
    @Path("/{idPoste}/boite")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Boite> getListBoitePoste(@PathParam("idPoste") long idPoste) throws IOException {
        return MockDatabase.data.getBoitesListForPoste(idPoste);
    }
}

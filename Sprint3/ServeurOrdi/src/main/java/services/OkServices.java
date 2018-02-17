package services;


import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/test")
public class OkServices {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getTest() {
        return "{\"Status\":\"Ok\"}";
    }
}

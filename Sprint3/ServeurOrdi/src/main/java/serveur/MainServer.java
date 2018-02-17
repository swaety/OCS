package serveur;

import com.sun.net.httpserver.HttpServer;
import org.glassfish.jersey.jdkhttp.JdkHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;
import services.BoitesServices;
import services.OkServices;
import services.ParticuliersServices;
import services.PostesServices;

import javax.ws.rs.core.UriBuilder;
import java.io.IOException;
import java.net.URI;

/**
 * Created by Thomas on 22/01/2018.
 */

/**
 * Main Class for the server
 */
public class MainServer {
    public static void main(String[] args){
        URI baseUri = UriBuilder.fromUri("http://localhost/").port(5555).build();
        ResourceConfig config = new ResourceConfig(BoitesServices.class);
        config.register(ParticuliersServices.class);
        config.register(PostesServices.class);
        config.register(OkServices.class);
        config.register(CORSFilter.class);
        config.register(CharsetResponseFilter.class);
        HttpServer server = JdkHttpServerFactory.createHttpServer(baseUri, config);
        InitServer i = new InitServer();
        i.initialisation();
        System.out.println("MainServer started ... ");
    }
}

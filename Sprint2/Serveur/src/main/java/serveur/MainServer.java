package serveur;

import com.sun.net.httpserver.HttpServer;
import org.glassfish.jersey.jdkhttp.JdkHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;
import services.BoitesServices;

import javax.ws.rs.core.UriBuilder;
import java.net.URI;

/**
 * Main Class for the server
 */
public class MainServer {
    public static void main(String[] args) {
        URI baseUri = UriBuilder.fromUri("http://localhost/").port(8080).build();
        ResourceConfig config = new ResourceConfig(BoitesServices.class);
        config.register(CORSFilter.class);
        config.register(CharsetResponseFilter.class);
        HttpServer server = JdkHttpServerFactory.createHttpServer(baseUri, config);
        InitServer i = new InitServer();
        i.initialisation();
        System.out.println("MainServer started ... ");
    }
}

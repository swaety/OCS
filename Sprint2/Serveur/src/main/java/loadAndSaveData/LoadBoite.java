package loadAndSaveData;


import entities.Boite;
import entities.Colis;
import org.apache.commons.io.FileUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by Thomas on 22/01/2018.
 */
public class LoadBoite {

    public static void load (Object obj, File file) throws IOException {
        System.out.println("Loaving as JSON file... Boite");
        String content = FileUtils.readFileToString(file, "utf-8");

        // Convert JSON string to JSONObject
        JSONObject tomJsonObject = new JSONObject(content);
        String adresseCP = tomJsonObject.getString("adresseCP");
        int adresseNum = tomJsonObject.getInt("adresseNum");
        String adressePays = tomJsonObject.getString("adressePays");
        String adresseRue = tomJsonObject.getString("adresseRue");
        String adresseVille = tomJsonObject.getString("adresseVille");

        int ide = tomJsonObject.getInt("ide");

        /*JSONArray colis = tomJsonObject.getJSONArray("listColis");

        for (int i = 0; i < colis.length(); i++) {
            Colis coli = (Colis) colis.get(i);
            System.out.println(coli);
        }

        // Or convert the JSONArray to Java List
        ArrayList<Object> coliis = (ArrayList<Object>) colis.toList();
        for (Object coli : coliis) {
            System.out.println((Colis)coli);
        }*/
    }
}

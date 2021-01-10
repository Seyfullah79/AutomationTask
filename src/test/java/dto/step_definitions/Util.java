package dto.step_definitions;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;


public class Util {

    //create a method which returns digit with the length of a parameter
    public static String getSingleDigit(int length) {

        // create object from random class
        Random rnd = new Random();

        //Declare string variable to store the number in.
        String digits = "";

        //generate a digit and assign it into "digits"
        for (int i = 0; i < length; i++) {
            int singleDigit = rnd.nextInt(10);
            digits += "" + singleDigit;
        }
        return digits;
    }


    public static List<String> getExpectedList(String digits) {

        // assign the path file into string
        String filePath = "src/test/resources/testData.csv";

        //create a List of String to store the combinations coming from csv file
        List<String> expectedList =new LinkedList<>();

        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {

            for (String[] strings : reader.readAll()) {

                if(strings[0].equals(digits)) {
                    for (String string : strings) {
                        expectedList.add(string);
                    }
                    expectedList.remove(0);

                }

            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException | CsvException e) {
            e.printStackTrace();
        }
        return expectedList;
    }

}

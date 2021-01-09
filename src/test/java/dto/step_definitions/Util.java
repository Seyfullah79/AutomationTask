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

    public static String getSingleDigit(int length) {

        Random rnd = new Random();
        Random rnd1 = new Random(1);
        String digits = "";

        for (int i = 0; i < length; i++) {
            int singleDigit = rnd.nextInt(10);
            if(singleDigit==0) singleDigit=rnd1.nextInt(10);
            digits += "" + singleDigit;
        }
        return digits;
    }


    public static List<String> getExpectedList(String digits) {

        String filePath = "src/test/resources/testData.csv";
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

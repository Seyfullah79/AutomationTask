package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import static step_definitions.TelephoneDialPad.*;

public class singleDigit {

  List<String> actualList;

    @When("the user enters digit number {string}")
    public void the_user_enters_digit_number(String string) {
        actualList = retrieveCombinations(string);
        System.out.println("Digit Number :" + string);
    }

    @Then("the user should see expected List")
    public void the_user_should_see_expected_List(Map<String ,String > map) {

        List<String> expectedList = new LinkedList<>();

        for (int i = 1; i <= map.size(); i++) {
            String str1 = map.get("d"+i);
            if (str1!= null) expectedList.add(str1);
        }


        System.out.println("Expected List: "+ expectedList);
        System.out.println("Actual List: " + actualList);
        System.out.println("====================================");
        Assert.assertEquals(actualList, expectedList);
    }

    @When("the user enters specific single digit number {string}")
    public void the_user_enters_specific_single_digit_number(String digitNumber) {

        System.out.println("digitNumber = " + digitNumber);
         actualList = retrieveCombinations(digitNumber);
        System.out.println("actualList = " + actualList);

    }


    @Then("the user should see fallowing list for single digit")
    public void the_user_should_see_fallowing_list_for_single_digit(List<String> expectedList) {
        System.out.println("expectedList = " + expectedList);
        Assert.assertEquals(expectedList,actualList);
    }



}

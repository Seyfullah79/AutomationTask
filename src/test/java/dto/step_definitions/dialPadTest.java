package dto.step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import static dto.step_definitions.TelephoneDialPad.*;

public class dialPadTest {

    // declare actualList in the class level so that it can be used in different method
    List<String> actualList;


    @When("the user enters digit number {string}")
    public void the_user_enters_digit_number(String inputDigit) {

        //get the combinations of inputDigit and store in the list
        actualList = retrieveCombinations(inputDigit);
        System.out.println("Digit Number :" + inputDigit);
    }

    @Then("the user should see expected List")
    public void the_user_should_see_expected_List(Map<String, String> map) {

        //Create new List to store expected data
        List<String> expectedList = new LinkedList<>();

        //store the values of map in the expected list if it is not null
        for (int i = 1; i <= map.size(); i++) {
            String str1 = map.get("d" + i);
            if (str1 != null) expectedList.add(str1);
        }

        System.out.println("Expected List: " + expectedList);
        System.out.println("Actual List: " + actualList);
        System.out.println("====================================");

        //Verify them that they are equal
        Assert.assertEquals(actualList, expectedList);
    }
    

    @Then("the user should see expected List for the double digit")
    public void the_user_should_see_expected_List_for_the_double_digit(Map<String, String> map) {

        //Create new List to store expected data
        List<String> expectedList = new LinkedList<>();

        //store the values of map in the expected list if it is not null
        for (int i = 1; i <= map.size(); i++) {
            String str1 = map.get("list"+i);
            if (str1!= null) expectedList.add(str1);
        }

        System.out.println("Expected List :" + expectedList);
        System.out.println("Actual List :" + actualList);
        System.out.println("==============================");

        //verify that expected and actual list are the same
        Assert.assertEquals(expectedList,actualList);
    }


    @Then("the user should see fallowing list")
    public void the_user_should_see_fallowing_list(List<String> expectedList) {

        System.out.println("expectedList = " + expectedList);
        System.out.println("actualList = " + actualList);
        System.out.println("==============================");

        //verify that expected and actual list are the same
        Assert.assertEquals(expectedList,actualList);

    }

    @Then("the list should contain {string}")
    public void the_list_should_contain(String expectedCombination) {

        //verify that actual list contains expected combination
        Assert.assertTrue(actualList.contains(expectedCombination));
        System.out.println("actualList = " + actualList);
        System.out.println("expectedCombination = " + expectedCombination);
        System.out.println("================================");
    }


    @Then("list should not contain {string}")
    public void list_should_not_contain(String unexpectedResult) {

        System.out.println("actualList = " + actualList);
        System.out.println("unexpectedResult = " + unexpectedResult);
        System.out.println("================================");

        // verify that actual list does NOT contain unexpected credential
        Assert.assertFalse(actualList.contains(unexpectedResult));
    }

}

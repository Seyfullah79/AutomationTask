package dto.step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

import static dto.step_definitions.TelephoneDialPad.*;

public class negativeTests {

    List<String> actualList;


    @When("digit number {string}")
    public void digit_number(String inputDigit) {

        //get the combinations of inputDigit and store them in the list
        actualList = retrieveCombinations(inputDigit);
        System.out.println("inputDigit = " + inputDigit);
    }

    @Then("List length should not contain {string}")
    public void list_length_should_not_contain(String unexpectedResult) {

        System.out.println("actualList = " + actualList);
        System.out.println("unexpectedResult = " + unexpectedResult);
        System.out.println("================================");

        // verify that actual list does NOT contain unexpected credential
        Assert.assertFalse(actualList.contains(unexpectedResult));

    }

}

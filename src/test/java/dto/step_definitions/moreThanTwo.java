package dto.step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;
import static dto.step_definitions.TelephoneDialPad.*;

public class moreThanTwo {

    List<String> actualList;

    @When("the user enters digit numbers {string}")
    public void the_user_enters_digit_numbers(String inputDigit) {

        //get the combinations of inputDigit and store in the list
        actualList = retrieveCombinations(inputDigit);
        System.out.println("inputDigit = " + inputDigit);
    }

    @Then("the list should contain {string}")
    public void the_list_should_contain(String expectedCombination) {

        //verify that actual list contains expected combination
        Assert.assertTrue(actualList.contains(expectedCombination));
        System.out.println("actualList = " + actualList);
        System.out.println("expectedCombination = " + expectedCombination);
        System.out.println("================================");
    }


}

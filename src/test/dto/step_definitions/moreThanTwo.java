package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.sql.SQLOutput;
import java.util.List;

import static step_definitions.TelephoneDialPad.*;

public class moreThanTwo {

    List<String> actualList;

    @When("the user enters digit numbers {string}")
    public void the_user_enters_digit_numbers(String inputDigit) {
        System.out.println("inputDigit = " + inputDigit);
        actualList = retrieveCombinations(inputDigit);
    }

    @Then("the list should contain {string}")
    public void the_list_should_contain(String expectedCombination) {
        System.out.println("actualList = " + actualList);
        System.out.println("expectedCombination = " + expectedCombination);
        Assert.assertTrue(actualList.contains(expectedCombination));
        System.out.println("================================");
    }



}

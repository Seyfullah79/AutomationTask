package dto.step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import java.util.List;
import static dto.step_definitions.TelephoneDialPad.*;

public class randomDigitInput {

    String inputDigits;
    List<String> actualList;

    @When("random digit number {string}")
    public void random_digit_number(String digitLength) {

        //get the random digit by using method inside the Util class
        inputDigits  = Util.getSingleDigit(Integer.parseInt(digitLength));

        // use random digit in the parameter and store in the  actual List
        actualList = retrieveCombinations(inputDigits);
        System.err.println("Tested Digit: " +inputDigits);
    }

    @Then("expectedList and actualList should be same")
    public void expectedList_and_actualList_should_be_same() {

        //get the expected List by using method in the Util class
        List<String> expectedList = Util.getExpectedList(inputDigits);
        System.err.println("Expected List : " + expectedList);
        System.err.println("Actual List: " +actualList);

        //verify them they are same
        Assert.assertEquals(expectedList,actualList);
        System.out.println("===============================");
    }

}

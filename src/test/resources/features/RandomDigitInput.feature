
@TestAll @randomDigitInput @high
Feature: DialPad

  @digit_1length
  Scenario: one digit
    When random digit number "1"
    Then expectedList and actualList should be same

  @digit_2length
  Scenario: double digit
    When random digit number "2"
    Then expectedList and actualList should be same

@TestSuit @negative
Feature: Negative Test of Dial Pad

  @NTOneDigit @low
  Scenario: One digit test
    When the user enters digit number "0"
    Then list should not contain "A"

  @NTDDTest @medium
  Scenario Outline: Different combinations test
    When the user enters digit number "<digitNumber>"
    Then list should not contain "<unexpectedResult>"


    Examples:
      | digitNumber | unexpectedResult |
      | 0           | 1                |
      | 1           | A                |
      | 1           | 0                |
      | 2           | D                |
      | 3           | C                |
      | 3           | G                |
      | 4           | F                |
      | 4           | J                |
      | 5           | I                |
      | 5           | M                |
      | 6           | L                |
      | 6           | P                |
      | 7           | O                |
      | 7           | T                |
      | 8           | S                |
      | 8           | W                |
      | 9           | V                |
      | 9           | 0                |

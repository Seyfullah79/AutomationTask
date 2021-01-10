@TestSuit @SDAll
Feature: Single Digit Function Test

  @SDDataDriven @high
  Scenario Outline: try one valid single digit <str>
    When the user enters digit number "<str>"
    Then the user should see expected List
      | d1 | <d1> |
      | d2 | <d2> |
      | d3 | <d3> |
      | d4 | <d4> |

    Examples:
      | str | d1 | d2 | d3 | d4 |
      | 0   | 0  |    |    |    |
      | 1   | 1  |    |    |    |
      | 2   | A  | B  | C  |    |
      | 3   | D  | E  | F  |    |
      | 4   | G  | H  | I  |    |
      | 5   | J  | K  | L  |    |
      | 6   | M  | N  | O  |    |
      | 7   | P  | Q  | R  | S  |
      | 8   | T  | U  | V  |    |
      | 9   | W  | X  | Y  | Z  |


  @SDSpecific @low
  Scenario: try one specific single digit
    When the user enters specific single digit number "5"
    Then the user should see fallowing list for single digit
      | J |
      | K |
      | L |
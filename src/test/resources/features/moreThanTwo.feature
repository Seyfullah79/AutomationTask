@moreThanTwo
Feature: More than two digits test

  @FourDigit @medium
  Scenario: four digits test "6637"
    When the user enters digit numbers "6637"
    Then the list should contain "OMER"

  @FiveDigit @medium
  Scenario: five digits test "01987"
    When the user enters digit numbers "01987"
    Then the list should contain "01WTS"

  @SixDigit @medium
  Scenario: six digits test "845326"
    When the user enters digit numbers "845326"
    Then the list should contain "VILDAN"

  @SevenDigit @medium
  Scenario: seven digits test "7377328"
    When the user enters digit numbers "7377328"
    Then the list should contain "RESPECT"


  @DDT3
  Scenario Outline: 3 Digits Function Tests <inputDigits>
    When the user enters digit numbers "<inputDigits>"
    Then the list should contain "<expectedResult>"

    Examples:

      | inputDigits | expectedResult |
      | 036         | 0DM1           |
      | 189         | 1UZ1           |
      | 255         | BJK            |
      | 379         | ERX            |
      | 404         | G0H            |
      | 592         | KXB            |
      | 677         | OPR            |
      | 718         | S1T            |
      | 836         | TEN            |
      | 999         | XYZ            |

  @DDT4
  Scenario Outline: 4 Digits Function Tests <inputDigits>
    When the user enters digit numbers "<inputDigits>"
    Then the list should contain "<expectedResult>"

    Examples:

      | inputDigits | expectedResult |
      | 0361        | 0DM1           |
      | 1892        | 1UZA           |
      | 2553        | BJKE           |
      | 3794        | ERXG           |
      | 4045        | G0HJ           |
      | 5926        | KXBO           |
      | 6777        | OPRQ           |
      | 7188        | S1TV           |
      | 8369        | TENY           |
      | 9990        | XYZ0           |

  @DDT5
  Scenario Outline: 5 Digits Function Tests <inputDigits>
    When the user enters digit numbers "<inputDigits>"
    Then the list should contain "<expectedResult>"

    Examples:

      | inputDigits | expectedResult |
      | 03619       | 0DM1Y          |
      | 18928       | 1UZAV          |
      | 25537       | BJKEP          |
      | 37946       | ERXGN          |
      | 40455       | G0HJK          |
      | 59264       | KXBOH          |
      | 67773       | OPRQD          |
      | 71882       | S1TVC          |
      | 83691       | TENY1          |
      | 99900       | XYZ00          |

  @DDT6
  Scenario Outline: 6 Digits Function Tests <inputDigits>
    When the user enters digit numbers "<inputDigits>"
    Then the list should contain "<expectedResult>"

    Examples:

      | inputDigits | expectedResult |
      | 123456      | 1ADGKM         |
      | 987654      | ZVROLH         |
      | 543210      | JHEB10         |
      | 456123      | GKM1AE         |
      | 135791      | 1EJRX1         |
      | 024688      | 0CGMTT         |
      | 677731      | OPRQD1         |
      | 718820      | S1TVC0         |
      | 836919      | TENY1X         |
      | 999003      | XYZ00E         |


  @DDTName
  Scenario Outline: Name Tests <inputDigits>
    When the user enters digit numbers "<inputDigits>"
    Then the list should contain "<expectedResult>"

    Examples:

      | inputDigits | expectedResult |
      | 8242428     | VAIBHAV        |
      | 342632      | DHANDA         |
      | 739385524   | SEYFULLAH      |
      | 545462      | KILINC         |



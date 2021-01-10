@TestSuit @DDAll

Feature: Double Digit Function Test

  @DDDataDriven @high
  Scenario Outline: try one valid single digit "<str>"
    When the user enters digit number "<str>"
    Then the user should see expected List for the double digit

      | list1  | <list1>  |
      | list2  | <list2>  |
      | list3  | <list3>  |
      | list4  | <list4>  |
      | list5  | <list5>  |
      | list6  | <list6>  |
      | list7  | <list7>  |
      | list8  | <list8>  |
      | list9  | <list9>  |
      | list10 | <list10> |
      | list11 | <list11> |
      | list12 | <list12> |
      | list13 | <list13> |
      | list14 | <list14> |
      | list15 | <list15> |
      | list16 | <list16> |


    Examples:

      | str | list1 | list2 | list3 | list4 | list5 | list6 | list7 | list8 | list9 | list10 | list11 | list12 | list13 | list14 | list15 | list16 |
      | 01  | 01    |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 02  | 0A    | 0B    | 0C    |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 03  | 0D    | 0E    | 0F    |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 10  | 10    |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 11  | 11    |       |       |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 12  | 1A    | 1B    | 1C    |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 19  | 1W    | 1X    | 1Y    | 1Z    |       |       |       |       |       |        |        |        |        |        |        |        |
      | 23  | AD    | AE    | AF    | BD    | BE    | BF    | CD    | CE    | CF    |        |        |        |        |        |        |        |
      | 24  | AG    | AH    | AI    | BG    | BH    | BI    | CG    | CH    | CI    |        |        |        |        |        |        |        |
      | 25  | AJ    | AK    | AL    | BJ    | BK    | BL    | CJ    | CK    | CL    |        |        |        |        |        |        |        |
      | 37  | DP    | DQ    | DR    | DS    | EP    | EQ    | ER    | ES    | FP    | FQ     | FR     | FS     |        |        |        |        |
      | 38  | DT    | DU    | DV    | ET    | EU    | EV    | FT    | FU    | FV    |        |        |        |        |        |        |        |
      | 39  | DW    | DX    | DY    | DZ    | EW    | EX    | EY    | EZ    | FW    | FX     | FY     | FZ     |        |        |        |        |
      | 40  | G0    | H0    | I0    |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 43  | GD    | GE    | GF    | HD    | HE    | HF    | ID    | IE    | IF    |        |        |        |        |        |        |        |
      | 49  | GW    | GX    | GY    | GZ    | HW    | HX    | HY    | HZ    | IW    | IX     | IY     | IZ     |        |        |        |        |
      | 50  | J0    | K0    | L0    |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 51  | J1    | K1    | L1    |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 57  | JP    | JQ    | JR    | JS    | KP    | KQ    | KR    | KS    | LP    | LQ     | LR     | LS     |        |        |        |        |
      | 61  | M1    | N1    | O1    |       |       |       |       |       |       |        |        |        |        |        |        |        |
      | 66  | MM    | MN    | MO    | NM    | NN    | NO    | OM    | ON    | OO    |        |        |        |        |        |        |        |
      | 67  | MP    | MQ    | MR    | MS    | NP    | NQ    | NR    | NS    | OP    | OQ     | OR     | OS     |        |        |        |        |
      | 70  | P0    | Q0    | R0    | S0    |       |       |       |       |       |        |        |        |        |        |        |        |
      | 74  | PG    | PH    | PI    | QG    | QH    | QI    | RG    | RH    | RI    | SG     | SH     | SI     |        |        |        |        |
      | 79  | PW    | PX    | PY    | PZ    | QW    | QX    | QY    | QZ    | RW    | RX     | RY     | RZ     | SW     | SX     | SY     | SZ     |
      | 82  | TA    | TB    | TC    | UA    | UB    | UC    | VA    | VB    | VC    |        |        |        |        |        |        |        |
      | 83  | TD    | TE    | TF    | UD    | UE    | UF    | VD    | VE    | VF    |        |        |        |        |        |        |        |
      | 86  | TM    | TN    | TO    | UM    | UN    | UO    | VM    | VN    | VO    |        |        |        |        |        |        |        |
      | 96  | WM    | WN    | WO    | XM    | XN    | XO    | YM    | YN    | YO    | ZM     | ZN     | ZO     |        |        |        |        |
      | 97  | WP    | WQ    | WR    | WS    | XP    | XQ    | XR    | XS    | YP    | YQ     | YR     | YS     | ZP     | ZQ     | ZR     | ZS     |
      | 99  | WW    | WX    | WY    | WZ    | XW    | XX    | XY    | XZ    | YW    | YX     | YY     | YZ     | ZW     | ZX     | ZY     | ZZ     |


  @DDSpecific @low
  Scenario: try one specific double digit
    When the user enters digit number "86"
    Then the user should see fallowing list
      | TM |
      | TN |
      | TO |
      | UM |
      | UN |
      | UO |
      | VM |
      | VN |
      | VO |

  @DDSpecific @low
  Scenario: try one specific double digit
    When the user enters digit number "93"
    Then the user should see fallowing list
      | WD |
      | WE |
      | WF |
      | XD |
      | XE |
      | XF |
      | YD |
      | YE |
      | YF |
      | ZD |
      | ZE |
      | ZF |

  @DDSpecific @low
  Scenario: try one specific double digit
    When the user enters digit number "37"
    Then the user should see fallowing list
      | DP |
      | DQ |
      | DR |
      | DS |
      | EP |
      | EQ |
      | ER |
      | ES |
      | FP |
      | FQ |
      | FR |
      | FS |
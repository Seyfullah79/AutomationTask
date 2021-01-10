$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/doubleDigit.feature");
formatter.feature({
  "name": "Double Digit Function Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    }
  ]
});
formatter.scenarioOutline({
  "name": "try one valid single digit \"\u003cstr\u003e\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"\u003cstr\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "list1",
        "\u003clist1\u003e"
      ]
    },
    {
      "cells": [
        "list2",
        "\u003clist2\u003e"
      ]
    },
    {
      "cells": [
        "list3",
        "\u003clist3\u003e"
      ]
    },
    {
      "cells": [
        "list4",
        "\u003clist4\u003e"
      ]
    },
    {
      "cells": [
        "list5",
        "\u003clist5\u003e"
      ]
    },
    {
      "cells": [
        "list6",
        "\u003clist6\u003e"
      ]
    },
    {
      "cells": [
        "list7",
        "\u003clist7\u003e"
      ]
    },
    {
      "cells": [
        "list8",
        "\u003clist8\u003e"
      ]
    },
    {
      "cells": [
        "list9",
        "\u003clist9\u003e"
      ]
    },
    {
      "cells": [
        "list10",
        "\u003clist10\u003e"
      ]
    },
    {
      "cells": [
        "list11",
        "\u003clist11\u003e"
      ]
    },
    {
      "cells": [
        "list12",
        "\u003clist12\u003e"
      ]
    },
    {
      "cells": [
        "list13",
        "\u003clist13\u003e"
      ]
    },
    {
      "cells": [
        "list14",
        "\u003clist14\u003e"
      ]
    },
    {
      "cells": [
        "list15",
        "\u003clist15\u003e"
      ]
    },
    {
      "cells": [
        "list16",
        "\u003clist16\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "str",
        "list1",
        "list2",
        "list3",
        "list4",
        "list5",
        "list6",
        "list7",
        "list8",
        "list9",
        "list10",
        "list11",
        "list12",
        "list13",
        "list14",
        "list15",
        "list16"
      ]
    },
    {
      "cells": [
        "01",
        "01",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "02",
        "0A",
        "0B",
        "0C",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "03",
        "0D",
        "0E",
        "0F",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "10",
        "10",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "11",
        "11",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "12",
        "1A",
        "1B",
        "1C",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "19",
        "1W",
        "1X",
        "1Y",
        "1Z",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "23",
        "AD",
        "AE",
        "AF",
        "BD",
        "BE",
        "BF",
        "CD",
        "CE",
        "CF",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "24",
        "AG",
        "AH",
        "AI",
        "BG",
        "BH",
        "BI",
        "CG",
        "CH",
        "CI",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "25",
        "AJ",
        "AK",
        "AL",
        "BJ",
        "BK",
        "BL",
        "CJ",
        "CK",
        "CL",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "37",
        "DP",
        "DQ",
        "DR",
        "DS",
        "EP",
        "EQ",
        "ER",
        "ES",
        "FP",
        "FQ",
        "FR",
        "FS",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "38",
        "DT",
        "DU",
        "DV",
        "ET",
        "EU",
        "EV",
        "FT",
        "FU",
        "FV",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "39",
        "DW",
        "DX",
        "DY",
        "DZ",
        "EW",
        "EX",
        "EY",
        "EZ",
        "FW",
        "FX",
        "FY",
        "FZ",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "40",
        "G0",
        "H0",
        "I0",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "43",
        "GD",
        "GE",
        "GF",
        "HD",
        "HE",
        "HF",
        "ID",
        "IE",
        "IF",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "49",
        "GW",
        "GX",
        "GY",
        "GZ",
        "HW",
        "HX",
        "HY",
        "HZ",
        "IW",
        "IX",
        "IY",
        "IZ",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "50",
        "J0",
        "K0",
        "L0",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "51",
        "J1",
        "K1",
        "L1",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "57",
        "JP",
        "JQ",
        "JR",
        "JS",
        "KP",
        "KQ",
        "KR",
        "KS",
        "LP",
        "LQ",
        "LR",
        "LS",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "61",
        "M1",
        "N1",
        "O1",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "66",
        "MM",
        "MN",
        "MO",
        "NM",
        "NN",
        "NO",
        "OM",
        "ON",
        "OO",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "67",
        "MP",
        "MQ",
        "MR",
        "MS",
        "NP",
        "NQ",
        "NR",
        "NS",
        "OP",
        "OQ",
        "OR",
        "OS",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "70",
        "P0",
        "Q0",
        "R0",
        "S0",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "74",
        "PG",
        "PH",
        "PI",
        "QG",
        "QH",
        "QI",
        "RG",
        "RH",
        "RI",
        "SG",
        "SH",
        "SI",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "79",
        "PW",
        "PX",
        "PY",
        "PZ",
        "QW",
        "QX",
        "QY",
        "QZ",
        "RW",
        "RX",
        "RY",
        "RZ",
        "SW",
        "SX",
        "SY",
        "SZ"
      ]
    },
    {
      "cells": [
        "82",
        "TA",
        "TB",
        "TC",
        "UA",
        "UB",
        "UC",
        "VA",
        "VB",
        "VC",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "83",
        "TD",
        "TE",
        "TF",
        "UD",
        "UE",
        "UF",
        "VD",
        "VE",
        "VF",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "86",
        "TM",
        "TN",
        "TO",
        "UM",
        "UN",
        "UO",
        "VM",
        "VN",
        "VO",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "96",
        "WM",
        "WN",
        "WO",
        "XM",
        "XN",
        "XO",
        "YM",
        "YN",
        "YO",
        "ZM",
        "ZN",
        "ZO",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "97",
        "WP",
        "WQ",
        "WR",
        "WS",
        "XP",
        "XQ",
        "XR",
        "XS",
        "YP",
        "YQ",
        "YR",
        "YS",
        "ZP",
        "ZQ",
        "ZR",
        "ZS"
      ]
    },
    {
      "cells": [
        "99",
        "WW",
        "WX",
        "WY",
        "WZ",
        "XW",
        "XX",
        "XY",
        "XZ",
        "YW",
        "YX",
        "YY",
        "YZ",
        "ZW",
        "ZX",
        "ZY",
        "ZZ"
      ]
    }
  ]
});
formatter.scenario({
  "name": "try one valid single digit \"01\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"01\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"02\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"02\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"03\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"03\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"10\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"11\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"11\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"12\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"12\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"19\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"19\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"23\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"23\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"24\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"24\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"25\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"25\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"37\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"37\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"38\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"38\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"39\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"39\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"40\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"40\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"43\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"43\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"49\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"49\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"50\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"50\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"51\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"51\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"57\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"57\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"61\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"61\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"66\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"66\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"67\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"67\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"70\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"70\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"74\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"74\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"79\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"79\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"82\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"82\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"83\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"83\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"86\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"86\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"96\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"96\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"97\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"97\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit \"99\"",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"99\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List for the double digit",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List_for_the_double_digit(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one specific double digit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDSpecific"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"86\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see fallowing list",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_fallowing_list(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one specific double digit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDSpecific"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"93\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see fallowing list",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_fallowing_list(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one specific double digit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@DDAll"
    },
    {
      "name": "@DDSpecific"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"37\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see fallowing list",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_fallowing_list(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/moreThanTwo.feature");
formatter.feature({
  "name": "More than two digits test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    }
  ]
});
formatter.scenario({
  "name": "four digits test \"6637\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@FourDigit"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"6637\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"OMER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "five digits test \"01987\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@FiveDigit"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"01987\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"01WTS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "six digits test \"845326\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@SixDigit"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"845326\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"VILDAN\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "seven digits test \"7377328\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@SevenDigit"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"7377328\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"RESPECT\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "3 Digits Function Tests \u003cinputDigits\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"\u003cinputDigits\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the list should contain \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "inputDigits",
        "expectedResult"
      ]
    },
    {
      "cells": [
        "036",
        "0DM"
      ]
    },
    {
      "cells": [
        "189",
        "1UZ"
      ]
    },
    {
      "cells": [
        "255",
        "BJK"
      ]
    },
    {
      "cells": [
        "379",
        "ERX"
      ]
    },
    {
      "cells": [
        "404",
        "G0H"
      ]
    },
    {
      "cells": [
        "592",
        "KXB"
      ]
    },
    {
      "cells": [
        "677",
        "OPR"
      ]
    },
    {
      "cells": [
        "718",
        "S1T"
      ]
    },
    {
      "cells": [
        "836",
        "TEN"
      ]
    },
    {
      "cells": [
        "999",
        "XYZ"
      ]
    }
  ]
});
formatter.scenario({
  "name": "3 Digits Function Tests 036",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"036\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"0DM\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 189",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"189\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"1UZ\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 255",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"255\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"BJK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 379",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"379\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"ERX\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 404",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"404\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"G0H\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 592",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"592\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"KXB\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 677",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"677\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"OPR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 718",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"718\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"S1T\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 836",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"836\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"TEN\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 999",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"999\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"XYZ\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "4 Digits Function Tests \u003cinputDigits\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"\u003cinputDigits\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the list should contain \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "inputDigits",
        "expectedResult"
      ]
    },
    {
      "cells": [
        "0361",
        "0DM1"
      ]
    },
    {
      "cells": [
        "1892",
        "1UZA"
      ]
    },
    {
      "cells": [
        "2553",
        "BJKE"
      ]
    },
    {
      "cells": [
        "3794",
        "ERXG"
      ]
    },
    {
      "cells": [
        "4045",
        "G0HJ"
      ]
    },
    {
      "cells": [
        "5926",
        "KXBO"
      ]
    },
    {
      "cells": [
        "6777",
        "OPRQ"
      ]
    },
    {
      "cells": [
        "7188",
        "S1TV"
      ]
    },
    {
      "cells": [
        "8369",
        "TENY"
      ]
    },
    {
      "cells": [
        "9990",
        "XYZ0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "4 Digits Function Tests 0361",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"0361\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"0DM1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 1892",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"1892\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"1UZA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 2553",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"2553\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"BJKE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 3794",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"3794\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"ERXG\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 4045",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"4045\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"G0HJ\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 5926",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"5926\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"KXBO\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 6777",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"6777\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"OPRQ\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 7188",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"7188\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"S1TV\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 8369",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"8369\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"TENY\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4 Digits Function Tests 9990",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT4"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"9990\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"XYZ0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "5 Digits Function Tests \u003cinputDigits\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"\u003cinputDigits\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the list should contain \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "inputDigits",
        "expectedResult"
      ]
    },
    {
      "cells": [
        "03619",
        "0DM1Y"
      ]
    },
    {
      "cells": [
        "18928",
        "1UZAV"
      ]
    },
    {
      "cells": [
        "25537",
        "BJKEP"
      ]
    },
    {
      "cells": [
        "37946",
        "ERXGN"
      ]
    },
    {
      "cells": [
        "40455",
        "G0HJK"
      ]
    },
    {
      "cells": [
        "59264",
        "KXBOH"
      ]
    },
    {
      "cells": [
        "67773",
        "OPRQD"
      ]
    },
    {
      "cells": [
        "71882",
        "S1TVC"
      ]
    },
    {
      "cells": [
        "83691",
        "TENY1"
      ]
    },
    {
      "cells": [
        "99900",
        "XYZ00"
      ]
    }
  ]
});
formatter.scenario({
  "name": "5 Digits Function Tests 03619",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"03619\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"0DM1Y\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 18928",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"18928\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"1UZAV\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 25537",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"25537\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"BJKEP\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 37946",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"37946\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"ERXGN\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 40455",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"40455\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"G0HJK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 59264",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"59264\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"KXBOH\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 67773",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"67773\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"OPRQD\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 71882",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"71882\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"S1TVC\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 83691",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"83691\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"TENY1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5 Digits Function Tests 99900",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT5"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"99900\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"XYZ00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "6 Digits Function Tests \u003cinputDigits\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"\u003cinputDigits\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the list should contain \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "inputDigits",
        "expectedResult"
      ]
    },
    {
      "cells": [
        "123456",
        "1ADGKM"
      ]
    },
    {
      "cells": [
        "987654",
        "ZVROLH"
      ]
    },
    {
      "cells": [
        "543210",
        "JHEB10"
      ]
    },
    {
      "cells": [
        "456123",
        "GKM1AE"
      ]
    },
    {
      "cells": [
        "135791",
        "1EJRX1"
      ]
    },
    {
      "cells": [
        "024688",
        "0CGMTT"
      ]
    },
    {
      "cells": [
        "677731",
        "OPRQD1"
      ]
    },
    {
      "cells": [
        "718820",
        "S1TVC0"
      ]
    },
    {
      "cells": [
        "836919",
        "TENY1X"
      ]
    },
    {
      "cells": [
        "999003",
        "XYZ00E"
      ]
    }
  ]
});
formatter.scenario({
  "name": "6 Digits Function Tests 123456",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"1ADGKM\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 987654",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"987654\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"ZVROLH\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 543210",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"543210\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"JHEB10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 456123",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"456123\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"GKM1AE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 135791",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"135791\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"1EJRX1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 024688",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"024688\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"0CGMTT\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 677731",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"677731\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"OPRQD1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 718820",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"718820\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"S1TVC0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 836919",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"836919\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"TENY1X\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "6 Digits Function Tests 999003",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT6"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"999003\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"XYZ00E\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Name Tests \u003cinputDigits\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDTName"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"\u003cinputDigits\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the list should contain \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "inputDigits",
        "expectedResult"
      ]
    },
    {
      "cells": [
        "8242428",
        "VAIBHAV"
      ]
    },
    {
      "cells": [
        "342632",
        "DHANDA"
      ]
    },
    {
      "cells": [
        "739385524",
        "SEYFULLAH"
      ]
    },
    {
      "cells": [
        "545462",
        "KILINC"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Name Tests 8242428",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDTName"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"8242428\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"VAIBHAV\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Name Tests 342632",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDTName"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"342632\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"DHANDA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Name Tests 739385524",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDTName"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"739385524\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"SEYFULLAH\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Name Tests 545462",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDTName"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"545462\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"KILINC\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/negativeTests.feature");
formatter.feature({
  "name": "Negative Test of Dial Pad",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.scenario({
  "name": "One digit test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTOneDigit"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"A\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"\u003cdigitNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "list should not contain \"\u003cunexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "digitNumber",
        "unexpectedResult"
      ]
    },
    {
      "cells": [
        "0",
        "1"
      ]
    },
    {
      "cells": [
        "1",
        "A"
      ]
    },
    {
      "cells": [
        "1",
        "0"
      ]
    },
    {
      "cells": [
        "2",
        "D"
      ]
    },
    {
      "cells": [
        "3",
        "C"
      ]
    },
    {
      "cells": [
        "3",
        "G"
      ]
    },
    {
      "cells": [
        "4",
        "F"
      ]
    },
    {
      "cells": [
        "4",
        "J"
      ]
    },
    {
      "cells": [
        "5",
        "I"
      ]
    },
    {
      "cells": [
        "5",
        "M"
      ]
    },
    {
      "cells": [
        "6",
        "L"
      ]
    },
    {
      "cells": [
        "6",
        "P"
      ]
    },
    {
      "cells": [
        "7",
        "O"
      ]
    },
    {
      "cells": [
        "7",
        "T"
      ]
    },
    {
      "cells": [
        "8",
        "S"
      ]
    },
    {
      "cells": [
        "8",
        "W"
      ]
    },
    {
      "cells": [
        "9",
        "V"
      ]
    },
    {
      "cells": [
        "9",
        "0"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"A\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"D\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"C\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"G\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"4\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"F\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"4\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"J\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"I\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"M\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"L\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"P\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"7\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"O\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"7\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"T\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"8\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"S\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"8\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"W\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"9\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"V\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Different combinations test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@NTDDTest"
    },
    {
      "name": "@medium"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"9\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "list should not contain \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.list_should_not_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/randomDigit.feature");
formatter.feature({
  "name": "Random one and two digits test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@RD"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.scenario({
  "name": "one digit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@RD"
    },
    {
      "name": "@high"
    },
    {
      "name": "@digit_1length"
    }
  ]
});
formatter.step({
  "name": "random digit number \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.randomDigitInput.random_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "expectedList and actualList should be same",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.randomDigitInput.expectedList_and_actualList_should_be_same()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "double digit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@RD"
    },
    {
      "name": "@high"
    },
    {
      "name": "@digit_2length"
    }
  ]
});
formatter.step({
  "name": "random digit number \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.randomDigitInput.random_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "expectedList and actualList should be same",
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.randomDigitInput.expectedList_and_actualList_should_be_same()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/singleDigit.feature");
formatter.feature({
  "name": "Single Digit Function Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    }
  ]
});
formatter.scenarioOutline({
  "name": "try one valid single digit \u003cstr\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"\u003cstr\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should see expected List",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "d1",
        "\u003cd1\u003e"
      ]
    },
    {
      "cells": [
        "d2",
        "\u003cd2\u003e"
      ]
    },
    {
      "cells": [
        "d3",
        "\u003cd3\u003e"
      ]
    },
    {
      "cells": [
        "d4",
        "\u003cd4\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "str",
        "d1",
        "d2",
        "d3",
        "d4"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "1",
        "1",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "2",
        "A",
        "B",
        "C",
        ""
      ]
    },
    {
      "cells": [
        "3",
        "D",
        "E",
        "F",
        ""
      ]
    },
    {
      "cells": [
        "4",
        "G",
        "H",
        "I",
        ""
      ]
    },
    {
      "cells": [
        "5",
        "J",
        "K",
        "L",
        ""
      ]
    },
    {
      "cells": [
        "6",
        "M",
        "N",
        "O",
        ""
      ]
    },
    {
      "cells": [
        "7",
        "P",
        "Q",
        "R",
        "S"
      ]
    },
    {
      "cells": [
        "8",
        "T",
        "U",
        "V",
        ""
      ]
    },
    {
      "cells": [
        "9",
        "W",
        "X",
        "Y",
        "Z"
      ]
    }
  ]
});
formatter.scenario({
  "name": "try one valid single digit 0",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"0\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 3",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 4",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"4\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 5",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 6",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 7",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"7\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 8",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"8\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one valid single digit 9",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDDataDriven"
    },
    {
      "name": "@high"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"9\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see expected List",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_expected_List(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "try one specific single digit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestSuit"
    },
    {
      "name": "@SDAll"
    },
    {
      "name": "@SDSpecific"
    },
    {
      "name": "@low"
    }
  ]
});
formatter.step({
  "name": "the user enters digit number \"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_enters_digit_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see fallowing list",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "dto.step_definitions.dialPadTest.the_user_should_see_fallowing_list(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/moreThanTwo.feature");
formatter.feature({
  "name": "More than two digits test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@moreThanTwo"
    }
  ]
});
formatter.scenarioOutline({
  "name": "3 Digits Function Tests \u003cinputDigits\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"\u003cinputDigits\u003e\"",
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
        "0DM1"
      ]
    },
    {
      "cells": [
        "189",
        "1UZ1"
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
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"036\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"0DM1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat step_definitions.moreThanTwo.the_list_should_contain(moreThanTwo.java:26)\n\tat ✽.the list should contain \"0DM1\"(file:///Users/seyfullahklnc/Desktop/AutomationTask/src/test/resources/features/moreThanTwo.feature:28)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 189",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"189\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"1UZ1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat step_definitions.moreThanTwo.the_list_should_contain(moreThanTwo.java:26)\n\tat ✽.the list should contain \"1UZ1\"(file:///Users/seyfullahklnc/Desktop/AutomationTask/src/test/resources/features/moreThanTwo.feature:28)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "3 Digits Function Tests 255",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"255\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"BJK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
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
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"379\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"ERX\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
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
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"404\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"G0H\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
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
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"592\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"KXB\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
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
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"677\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"OPR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
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
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"718\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"S1T\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
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
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"836\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"TEN\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
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
      "name": "@moreThanTwo"
    },
    {
      "name": "@DDT3"
    }
  ]
});
formatter.step({
  "name": "the user enters digit numbers \"999\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_user_enters_digit_numbers(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list should contain \"XYZ\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.moreThanTwo.the_list_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});
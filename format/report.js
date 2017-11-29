$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sample.feature");
formatter.feature({
  "line": 1,
  "name": "Hello World.",
  "description": "",
  "id": "hello-world.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Launching wallet app",
  "description": "",
  "id": "hello-world.;launching-wallet-app",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I launch Wallet app.",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
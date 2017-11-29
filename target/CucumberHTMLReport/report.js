$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Welcome.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Copyright (c) EverCheck 2017. info@evercheck.com."
    },
    {
      "line": 2,
      "value": "# Total scenarios 1"
    },
    {
      "line": 3,
      "value": "# feature welcome shows welcome cases"
    },
    {
      "line": 4,
      "value": "# Uses @clean_out to clear shared preferences data on success"
    },
    {
      "line": 6,
      "value": "#@ignore"
    }
  ],
  "line": 7,
  "name": "See Welcome screen",
  "description": "In order to start the app I want to see an overview of Wallet functionality",
  "id": "see-welcome-screen",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "# Uncomment ignore annotation to skip the scenario, then use in command line --tags ~@ignore"
    },
    {
      "line": 11,
      "value": "# after calabash-android run"
    },
    {
      "line": 13,
      "value": "#@ignore"
    }
  ],
  "line": 14,
  "name": "As an user I can see the welcome screen",
  "description": "",
  "id": "see-welcome-screen;as-an-user-i-can-see-the-welcome-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I launch Wallet app",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see \"Welcome to EverCheck Wallet\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_Wallet_app()"
});
formatter.result({
  "duration": 8745558401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to EverCheck Wallet",
      "offset": 14
    }
  ],
  "location": "Steps.i_should_see(String)"
});
formatter.result({
  "duration": 554097551,
  "status": "passed"
});
formatter.after({
  "duration": 5047265408,
  "error_message": "org.openqa.selenium.WebDriverException: Method has not yet been implemented (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027CEBrokers-iMac.local\u0027, ip: \u0027172.23.2.182\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{appPackage\u003dcom.evercheck.wallet, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, version\u003d8.0, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.evercheck.wallet.domain.splash_view.SplashActivity, desired\u003d{appPackage\u003dcom.evercheck.wallet, appActivity\u003dcom.evercheck.wallet.domain.splash_view.SplashActivity, browserName\u003dAndroid, platformName\u003dAndroid, deviceName\u003dNexus 5X API 26, version\u003d8.0}, platformVersion\u003d8.0.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dAndroid, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86, deviceManufacturer\u003dGoogle, platformName\u003dLINUX}]\nSession ID: 9ea82543-05a4-43f3-9220-87bae7e630ba\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\n\tat steps.Steps.finish(Steps.java:117)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#  @ignore"
    }
  ],
  "line": 20,
  "name": "As an user I can swipe between welcome cards",
  "description": "",
  "id": "see-welcome-screen;as-an-user-i-can-swipe-between-welcome-cards",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I launch Wallet app",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I swipe left",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Upload your credentials\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I swipe left",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should see \"Send it off\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I swipe left",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see \"Keep it on hand\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I swipe right",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see \"Send it off\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I swipe right",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should see \"Upload your credentials\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I swipe right",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should see \"Welcome to EverCheck Wallet\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_launch_Wallet_app()"
});
formatter.result({
  "duration": 8770253155,
  "status": "passed"
});
formatter.match({
  "location": "Steps.swipeLeft()"
});
formatter.result({
  "duration": 1574198492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload your credentials",
      "offset": 14
    }
  ],
  "location": "Steps.i_should_see(String)"
});
formatter.result({
  "duration": 1363891579,
  "status": "passed"
});
formatter.match({
  "location": "Steps.swipeLeft()"
});
formatter.result({
  "duration": 1567955135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send it off",
      "offset": 14
    }
  ],
  "location": "Steps.i_should_see(String)"
});
formatter.result({
  "duration": 1294884125,
  "status": "passed"
});
formatter.match({
  "location": "Steps.swipeLeft()"
});
formatter.result({
  "duration": 1551173660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep it on hand",
      "offset": 14
    }
  ],
  "location": "Steps.i_should_see(String)"
});
formatter.result({
  "duration": 1202520085,
  "status": "passed"
});
formatter.match({
  "location": "Steps.swipeRigth()"
});
formatter.result({
  "duration": 1577709774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Send it off",
      "offset": 14
    }
  ],
  "location": "Steps.i_should_see(String)"
});
formatter.result({
  "duration": 1279254775,
  "status": "passed"
});
formatter.match({
  "location": "Steps.swipeRigth()"
});
formatter.result({
  "duration": 1539187182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Upload your credentials",
      "offset": 14
    }
  ],
  "location": "Steps.i_should_see(String)"
});
formatter.result({
  "duration": 1345618789,
  "status": "passed"
});
formatter.match({
  "location": "Steps.swipeRigth()"
});
formatter.result({
  "duration": 1515404304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to EverCheck Wallet",
      "offset": 14
    }
  ],
  "location": "Steps.i_should_see(String)"
});
formatter.result({
  "duration": 1191562911,
  "status": "passed"
});
formatter.after({
  "duration": 17810430,
  "error_message": "org.openqa.selenium.WebDriverException: Method has not yet been implemented (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027CEBrokers-iMac.local\u0027, ip: \u0027172.23.2.182\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{appPackage\u003dcom.evercheck.wallet, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, version\u003d8.0, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.evercheck.wallet.domain.splash_view.SplashActivity, desired\u003d{appPackage\u003dcom.evercheck.wallet, appActivity\u003dcom.evercheck.wallet.domain.splash_view.SplashActivity, browserName\u003dAndroid, platformName\u003dAndroid, deviceName\u003dNexus 5X API 26, version\u003d8.0}, platformVersion\u003d8.0.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dAndroid, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86, deviceManufacturer\u003dGoogle, platformName\u003dLINUX}]\nSession ID: 96a0a6b3-5208-4a75-88fc-64180da5c652\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\n\tat steps.Steps.finish(Steps.java:117)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.before({
  "duration": 11018210851,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "As an user I can see login page",
  "description": "",
  "id": "see-welcome-screen;as-an-user-i-can-see-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@login_screen"
    }
  ]
});
formatter.after({
  "duration": 6251712,
  "error_message": "org.openqa.selenium.WebDriverException: Method has not yet been implemented (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027CEBrokers-iMac.local\u0027, ip: \u0027172.23.2.182\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{appPackage\u003dcom.evercheck.wallet, deviceScreenSize\u003d1080x1920, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003demulator-5554, version\u003d8.0, platform\u003dLINUX, deviceUDID\u003demulator-5554, appActivity\u003dcom.evercheck.wallet.domain.splash_view.SplashActivity, desired\u003d{appPackage\u003dcom.evercheck.wallet, appActivity\u003dcom.evercheck.wallet.domain.splash_view.SplashActivity, browserName\u003dAndroid, platformName\u003dAndroid, deviceName\u003dNexus 5X API 26, version\u003d8.0}, platformVersion\u003d8.0.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dAndroid, javascriptEnabled\u003dtrue, deviceModel\u003dAndroid SDK built for x86, deviceManufacturer\u003dGoogle, platformName\u003dLINUX}]\nSession ID: 2c9a5305-79b3-43d3-9bb6-850735a74042\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:46)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:472)\n\tat steps.Steps.finish(Steps.java:117)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});
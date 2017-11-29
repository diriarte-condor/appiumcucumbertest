package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.URL;
import java.util.concurrent.TimeUnit;

import java.time.Duration;
import io.appium.java_client.TouchAction;

public class Steps {

    private AndroidDriver driver;



    @Before("@login_screen")
    public void login_screen()throws Throwable {
        System.out.println("This will run before the Scenario");
        i_launch_Wallet_app();
        press_button("LOG IN");

    }

    @Given("^I launch Wallet app$")
    public void i_launch_Wallet_app() throws Throwable {
        // Created object of DesiredCapabilities class.
        DesiredCapabilities capabilities = new DesiredCapabilities();

        // Set android deviceName desired capability. Set your device name.
        capabilities.setCapability("deviceName", "Nexus 5X API 26");

        // Set BROWSER_NAME desired capability. It's Android in our case here.
        capabilities.setCapability(CapabilityType.BROWSER_NAME, "Android");

        // Set android VERSION desired capability. Set your mobile device's OS version.
        capabilities.setCapability(CapabilityType.VERSION, "8.0");

        // Set android platformName desired capability. It's Android in our case here.
        capabilities.setCapability("platformName", "Android");

        // Set android appPackage desired capability. It is
        // com.android.calculator2 for calculator application.
        // Set your application's appPackage if you are using any other app.
        capabilities.setCapability("appPackage", "com.evercheck.wallet");

        // Set android appActivity desired capability. It is
        // com.android.calculator2.Calculator for calculator application.
        // Set your application's appPackage if you are using any other app.e\
        capabilities.setCapability("appActivity", "com.evercheck.wallet.domain.splash_view.SplashActivity");

        // Created object of RemoteWebDriver will all set capabilities.
        // Set appium server address and port number in URL string.
        // It will launch calculator app in android device.
       // capabilities.setCapability("app","/Users/nishant/Development/HelloAppium/app/quikr.apk");
        driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

    }

    @When("^I press \"([^\"]*)\" button$")
    public  void press_button(String buttonText) throws Exception {
       driver.findElement(By.xpath("//*[contains(@text, '"+buttonText+"')]")).click();


    }

    @Then("^I wait for the \"([^\"]*)\" screen to appear$")
    public void wait_to_appear(String screenName)throws Throwable {

        WebDriverWait wait = new WebDriverWait(driver,15);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText(screenName)));
    }

    @Then("^I should see \"([^\"]*)\"$")
    public void i_should_see(String elementName)throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver,15);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//*[contains(@text, '"+elementName+"')]"))));
    }



@When("^I swipe right$")
public  void swipeRigth() throws Exception {
    swipeHorizontal(driver,0.01,0.9,0.5,3);
}
    @When("^I swipe left$")
    public  void swipeLeft() throws Exception {
        swipeHorizontal(driver,0.9,0.01,0.5,3);
    }

    public static void swipeHorizontal(AndroidDriver driver, double startPercentage, double finalPercentage, double anchorPercentage, int duration) throws Exception {
        Dimension size = driver.manage().window().getSize();
        int anchor = (int) (size.height * anchorPercentage);
        int startPoint = (int) (size.width * startPercentage);
        int endPoint = (int) (size.width * finalPercentage);
        Duration dur = Duration.ofSeconds(duration);
        new TouchAction(driver).press(startPoint, anchor).waitAction(dur).moveTo(endPoint, anchor).release().perform();

        //In documentation they mention moveTo coordinates are relative to initial ones, but thats not happening. When it does we need to use the function below
        //new TouchAction(driver).press(startPoint, anchor).waitAction(duration).moveTo(endPoint-startPoint,0).release().perform();
    }

}

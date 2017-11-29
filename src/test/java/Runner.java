import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)




@CucumberOptions(
        plugin = { "pretty","html:target/CucumberHTMLReport","json:target/Cucumber.json" },
        features = "src/test/java/features",
        tags = {"~@ignore"},
        glue={"steps"},
monochrome = true)
public class Runner {
}






/**
 @CucumberOptions(
 plugin = { "html:target/cucumber-html-report",
 "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
 "usage:target/cucumber-usage.json", "junit:target/cucumber-results.xml" },
 tags = {"@sanity"},
 features = "src/test/java/features/Welcome.feature",
 glue={"src/test/java/steps/Steps.java"})
 **/

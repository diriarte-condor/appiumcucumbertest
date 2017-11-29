# Copyright (c) EverCheck 2017. info@evercheck.com.
# Total scenarios 1
# feature welcome shows welcome cases
# Uses @clean_out to clear shared preferences data on success

#@ignore
Feature: See Welcome screen
  In order to start the app I want to see an overview of Wallet functionality

# Uncomment ignore annotation to skip the scenario, then use in command line --tags ~@ignore
# after calabash-android run

  #@ignore
  Scenario: As an user I can see the welcome screen
    Given I launch Wallet app
    Then I should see "Welcome to EverCheck Wallet"


    #  @ignore
  Scenario: As an user I can swipe between welcome cards
    Given I launch Wallet app
    When I swipe left
    And I should see "Upload your credentials"
    When I swipe left
    And I should see "Send it off"
    When I swipe left
    And I should see "Keep it on hand"
    When I swipe right
    And I should see "Send it off"
    When I swipe right
    And I should see "Upload your credentials"
    When I swipe right
    And I should see "Welcome to EverCheck Wallet"



  @login_screen
  Scenario: As an user I can see login page


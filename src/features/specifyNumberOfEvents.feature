Feature: Specify number of events

    Scenario: The user hasn't specified a number, show 32 events by default
        Given the main page is open
        When the user hasn't specified a number of events
        Then 32 events should be shown by default

    Scenario: The user can change the number of events to be shown
        Given the main page is open
        When the user specifies a number of events
        Then that number of events should be shown

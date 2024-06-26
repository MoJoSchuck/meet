import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

// Feature 3
defineFeature(feature, test => {
    let AppComponent;
    let user;
    let AppDOM;
    let NumberOfEventsDOM;
    let numberOfEventsInput;

    beforeEach(() => {
        user = userEvent.setup();
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;
        NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
    });

    // Scenario 1
    test('The user hasn\'t specified a number, show 32 events by default', ({ given, when, then }) => {
        given('the main page is open', () => {
            // Already done in beforeEach
        });

        when('the user hasn\'t specified a number of events', () => {
            // No action needed as we want the default behavior
        });

        then('32 events should be shown by default', async () => {
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    // Scenario 2
    test('The user can change the number of events to be shown', ({ given, when, then }) => {
        given('the main page is open', () => {
            // Already done in beforeEach
        });

        when('the user specifies a number of events', async () => {
            await user.clear(numberOfEventsInput);
            await user.type(numberOfEventsInput, '10');
        });

        then('that number of events should be shown', async () => {
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});

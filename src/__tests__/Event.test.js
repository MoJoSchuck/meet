import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;

    beforeAll(async () => {
        allEvents = await getEvents();
    });

    beforeEach(() => {
        EventComponent = render(<Event event={allEvents[0]} />);
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        const formattedStartTime = new Date(allEvents[0].start.dateTime).toLocaleString('default', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
        expect(screen.queryByText(formattedStartTime)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('event details are hidden by default', () => {
        expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    });

    test("renders event details when user clicks 'show details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button', { name: /show details/i });
        await user.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test("hides event details when user clicks 'hide details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button', { name: /show details/i });
        await user.click(button); // First click to show details
        await user.click(button); // Second click to hide details
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

});

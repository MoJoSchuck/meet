// src/__tests__/NumberOfEvents.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

test('renders textbox for NumberOfEvents component', () => {
  render(<NumberOfEvents setCurrentNOE={() => {}} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('default value of the textbox is 32', () => {
  render(<NumberOfEvents setCurrentNOE={() => {}} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toHaveValue(32);
});

test('change value of the textbox when user types', async () => {
  const user = userEvent.setup();
  render(<NumberOfEvents setCurrentNOE={() => {}} />);
  const inputElement = screen.getByRole('textbox');
  await user.type(inputElement, '{backspace}{backspace}10');
  expect(inputElement).toHaveValue(10);
});

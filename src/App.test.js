import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('shows a new message when the button is clicked', () => {
  render(<App />);
  const initialText = screen.getByText(/Click the button to see a message!/i);
  expect(initialText).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /show message/i });
  fireEvent.click(button);

  // Check that the text has changed from the initial message
  const newText = screen.queryByText(/Click the button to see a message!/i);
  expect(newText).not.toBeInTheDocument();
});
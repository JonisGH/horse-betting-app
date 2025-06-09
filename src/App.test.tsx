import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the bet type dropdown with V75 option', () => {
  render(<App />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'V75' })).toBeInTheDocument();
});

test('selecting a bet type hides the prompt and shows the selected bet type in h3', async () => {
  render(<App />);
  // The prompt should be visible initially
  expect(screen.getByText('Choose a bet type')).toBeInTheDocument();

  const dropdown = screen.getByRole('combobox');
  await userEvent.selectOptions(dropdown, 'V75');

  // The prompt should disappear
  expect(screen.queryByText('Choose a bet type')).not.toBeInTheDocument();

  // The selected bet type should be shown in an h3
  expect(screen.getByRole('heading', { level: 3, name: 'V75' })).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '../Dropdown';

const options = [
  { value: 'V75', name: 'V75' },
  { value: 'V86', name: 'V86' },
  { value: 'GS75', name: 'GS75' },
];

test('renders all options and calls onChange when selected', async () => {
  const handleChange = vi.fn();
  render(<Dropdown propOptions={options} onChange={handleChange} />);

  // Dropdown is present
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toBeInTheDocument();

  // All options are rendered
  expect(screen.getByRole('option', { name: 'V75' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'V86' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'GS75' })).toBeInTheDocument();

  // Simulate selecting an option
  await userEvent.selectOptions(dropdown, 'V86');
  expect(handleChange).toHaveBeenCalled();
});

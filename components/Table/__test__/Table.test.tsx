import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Table from '../Table';

const mockData = [
  {
    startNumber: 1,
    horseName: 'Skuggfaxe',
    driverFirstName: 'Gandalf',
    driverLastName: 'den grå',
    trainerFirstName: 'Göran',
    trainerLastName: 'Hestmester',
    fatherName: 'Skuggpappa',
  },
];

test('renders table rows when data is provided', () => {
  render(<Table header={['Start Number', 'Horse Name']} data={mockData} />);
  expect(screen.getByText('Skuggfaxe')).toBeInTheDocument();
  expect(screen.getByText('Gandalf den grå')).toBeInTheDocument();
});

test('renders skeleton rows when data is undefined', () => {
  render(<Table header={['Start Number', 'Horse Name']} />);
  expect(screen.getAllByTestId('skeletonRow').length).toBe(5);
});

test('expands row when clicked', async () => {
  render(<Table header={['Start Number', 'Horse Name']} data={mockData} />);
  const row = screen.getByText('Skuggfaxe').closest('.tableRow');
  if (!row) throw new Error('Row not found');
  await userEvent.click(row);
  expect(
    screen.getByText(
      (content) =>
        content.includes('Trainer: Göran Hestmester') && content.includes('Father: Skuggpappa'),
    ),
  ).toBeInTheDocument();
});

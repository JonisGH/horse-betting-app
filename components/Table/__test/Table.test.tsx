import { render, screen, fireEvent } from '@testing-library/react';
import Table from '../Table';

const mockData = [
  {
    startNumber: 1,
    horseName: 'Horse A',
    driverFirstName: 'John',
    driverLastName: 'Doe',
    trainerFirstName: 'Jane',
    trainerLastName: 'Smith',
    fatherName: 'Father A',
  },
];

test('renders table rows when data is provided', () => {
  render(<Table header={['Start Number', 'Horse Name']} data={mockData} />);
  expect(screen.getByText('Horse A')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});

test('renders skeleton rows when data is undefined', () => {
  render(<Table header={['Start Number', 'Horse Name']} />);
  // Use getAllByTestId if you set data-testid="skeletonRow" on your skeleton rows
  expect(screen.getAllByTestId('skeletonRow').length).toBe(5);
});

test('expands row when clicked', () => {
  render(<Table header={['Start Number', 'Horse Name']} data={mockData} />);
  const row = screen.getByText('Horse A').closest('.tableRow');
  fireEvent.click(row);
  expect(screen.getByText('Trainer: Jane Smith')).toBeInTheDocument();
});

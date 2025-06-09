import { render, screen } from '@testing-library/react';
import RaceTrack from '../RaceTrack';

const mockTrack = {
  id: 'track-1',
  name: 'Solvalla',
  startTime: '2025-06-08 15:00',
};

test('renders track name and start time', () => {
  render(<RaceTrack track={mockTrack} />);
  expect(screen.getByRole('heading', { name: 'Solvalla' })).toBeInTheDocument();
  expect(screen.getByText('2025-06-08 15:00')).toBeInTheDocument();
});

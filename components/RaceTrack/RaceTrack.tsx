import './RaceTrack.css';
import Flex from '../Flex/Flex';
import type { SimplifiedTrack } from '../../types/Types';

type RaceTrackProps = {
  track: SimplifiedTrack;
};

const RaceTrack = ({ track }: RaceTrackProps) => {
  return (
    <div className="resultContainer" key={track.id}>
      <Flex gap={12} align="center" className="bottomBorder">
        <h2>{track.trackName}</h2> - <b>{track.startTime}</b>
      </Flex>
    </div>
  );
};

export default RaceTrack;

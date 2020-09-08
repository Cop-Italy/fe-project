import React from 'react';
import Player from '../models/player';
import ResultItem from './ResultItem';

interface ResultsProps {
  items?: Player[];
}
const Results: React.FunctionComponent<ResultsProps> = ({
  items,
}: ResultsProps) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {items &&
        items.map((player) => <ResultItem key={player.id} player={player} />)}
    </ul>
  );
};

const defaultProps = {
  items: undefined,
};

Results.defaultProps = defaultProps;

export default Results;

import React from 'react';
import { Link } from 'react-router-dom';
import Player from '../models/player';

interface ResultItemProps {
  player: Player;
}

// TODO: use a better image loading library
const ResultItem: React.FunctionComponent<ResultItemProps> = ({
  player,
}: ResultItemProps) => {
  return (
    <>
      <li>
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <span
            className="w-full h-24"
            style={{
              backgroundColor: `rgba(0,0,0,0.1)`,
              backgroundImage: `url(${player?.pictureUrl}`,
              display: 'inline-block',
              border: '1px solid lightgray',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
            }}
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {player?.firstName} {player?.lastName}
            </div>
            <div className="text-right">
              <Link
                className="text-xs ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                to={`/player/${player.id}`}
              >
                Details &raquo;
              </Link>
            </div>
          </div>

          {player.team ? (
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <Link to={`/teams/${player.team.id}`}>
                  #{player.team.shortName}
                </Link>
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
      </li>
    </>
  );
};

export default ResultItem;

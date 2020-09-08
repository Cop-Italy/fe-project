import React from 'react';
import { Link } from 'react-router-dom';
import Player from '../models/player';

interface PlayerDetailCardProps {
  player: Player;
}

const getHeight = (feet?: number, inches?: number): string => {
  if (feet && inches) {
    return `${feet} ft ${inches} in`; // 6 ft 9 in
  }
  return '--';
};
const getWeight = (weight?: number): string => {
  if (weight) {
    return `${weight} lb`; // 6 ft 9 in
  }
  return '--';
};

const PlayerDetailCard: React.FunctionComponent<PlayerDetailCardProps> = ({
  player,
}: PlayerDetailCardProps) => {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="h-64 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title={`${player?.firstName} ${player?.lastName}`}
          style={{
            backgroundImage: `url(${player?.pictureUrl})`,
            backgroundColor: `rgba(0,0,0,0.1)`,
            backgroundPosition: 'center',
          }}
        />
        <div className="lg:w-2/3 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {`${player?.firstName} ${player?.lastName}`}
            </div>
            <div className="text-gray-700 text-base">
              <div className="px-6 py-4">
                <div>
                  <span className="font-bold">Position:</span>
                  <span className="ml-2">{player?.position}</span>
                </div>
                <div>
                  <span className="font-bold">Height:</span>
                  <span className="ml-2">
                    {getHeight(player?.heightFeet, player?.heightInches)}
                  </span>
                </div>
                <div>
                  <span className="font-bold">Weight:</span>
                  <span className="ml-2">{getWeight(player?.weightLbs)}</span>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="text-gray-900 font-bold text-lg my-2">
                Team: {player?.team?.shortName}
              </div>
              <div className="text-gray-700 text-base">
                <div className="px-6 py-4">
                  <div>
                    <span className="font-bold">Team name:</span>
                    <span className="ml-2">{player?.team?.fullName}</span>
                  </div>
                  <div>
                    <span className="font-bold">City:</span>
                    <span className="ml-2">{player?.team?.city}</span>
                  </div>
                  <div>
                    <span className="font-bold">Conference:</span>
                    <span className="ml-2">{player?.team?.conference}</span>
                  </div>
                  <div>
                    <span className="font-bold">Division:</span>
                    <span className="ml-2">{player?.team?.division}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Link
                className="text-xs ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                to={`/teams/${player?.team?.id}`}
              >
                Team details &raquo;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerDetailCard;

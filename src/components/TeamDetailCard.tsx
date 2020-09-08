import React from 'react';
import Team from '../models/team';

interface TeamDetailCardProps {
  team: Team;
}

const TeamDetailCard: React.FunctionComponent<TeamDetailCardProps> = ({
  team,
}: TeamDetailCardProps) => {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="w-full lg:w-full ml-4 border border-gray-400 lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {team?.shortName}
            </div>

            <div>
              <div className="text-gray-700 text-base">
                <div className="px-6 py-4">
                  <div>
                    <span className="font-bold">Team name:</span>
                    <span className="ml-2">{team?.fullName}</span>
                  </div>
                  <div>
                    <span className="font-bold">City:</span>
                    <span className="ml-2">{team?.city}</span>
                  </div>
                  <div>
                    <span className="font-bold">Conference:</span>
                    <span className="ml-2">{team?.conference}</span>
                  </div>
                  <div>
                    <span className="font-bold">Division:</span>
                    <span className="ml-2">{team?.division}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailCard;

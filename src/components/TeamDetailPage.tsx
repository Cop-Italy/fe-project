import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Team from '../models/team';
import TeamDetailCard from './TeamDetailCard';
import fetchTeam from '../utils/fetch-team';

// TODO: refactor this whole page, it has a lot in common with PlayerDetailPage
const TeamDetailPage: React.FunctionComponent = () => {
  const [team, setTeam] = useState<Team>();

  const { teamId } = useParams();

  useEffect(() => {
    async function fetchAsync(id: number) {
      const t = await fetchTeam(id);
      setTeam(t);
      console.log(`Team loaded: ${JSON.stringify(t)}`);
    }
    console.log(`Loading team: ${teamId}`);
    fetchAsync(teamId);
  }, [teamId]);

  return (
    <div className="container mx-auto">
      <Link
        className="my-4 w-auto inline-block text-xs ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        to="/"
      >
        &laquo; Back to search page
      </Link>
      {team === undefined ? (
        <div>Loading team...</div>
      ) : (
        <>
          <TeamDetailCard team={team} />
        </>
      )}
    </div>
  );
};

export default TeamDetailPage;

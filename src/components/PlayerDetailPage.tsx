import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetchPlayer from '../utils/fetch-player';
import Player from '../models/player';
import PlayerDetailCard from './PlayerDetailCard';

const PlayerDetailPage: React.FunctionComponent = () => {
  const [player, setPlayer] = useState<Player>();

  const { playerId } = useParams();

  useEffect(() => {
    async function fetchAsync(id: number) {
      const p = await fetchPlayer(id);
      setPlayer(p);
      console.log(`Player loaded: ${JSON.stringify(p)}`);
    }
    console.log(`Loading player: ${playerId}`);
    fetchAsync(playerId);
  }, [playerId]);

  return (
    <div className="container mx-auto">
      <Link
        className="my-4 w-auto inline-block text-xs ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        to="/"
      >
        &laquo; Back to search page
      </Link>
      {player === undefined ? (
        <div>Loading player...</div>
      ) : (
        <>
          <PlayerDetailCard player={player} />
        </>
      )}
    </div>
  );
};

export default PlayerDetailPage;

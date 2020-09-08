import React, { useState } from 'react';
import PageHeader from './PageHeader';
import SearchBox from './SearchBox';
import SearchMessage from './SearchMessage';
import Results from './Results';
import searchPlayers from '../utils/search-players';
import Player from '../models/player';

const MainPage: React.FunctionComponent = () => {
  const [items, setItems] = useState<Player[]>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [err, setError] = useState();
  const [searchMessage, setSearchMessage] = useState<string>('');

  const performSearch = async (query: string) => {
    if (query.trim() === '') {
      setItems(undefined);
      setSearchMessage('Please enter a player name');
    } else {
      try {
        const responsePage = await searchPlayers(query);
        console.log(`Found ${responsePage}`);
        if (responsePage.players.length === 0) {
          setSearchMessage(`Sorry, no players found with name '${query}'`);
        } else {
          setSearchMessage(`${responsePage.players.length} player(s) found`);
        }
        setItems(responsePage.players);
      } catch (error) {
        setError(error);
      }
    }
  };

  if (err) {
    throw err;
  }
  return (
    <div className="container mx-auto">
      <PageHeader />
      <SearchBox performSearch={performSearch} />
      <SearchMessage message={searchMessage} />
      <Results items={items} />
    </div>
  );
};

export default MainPage;

/* eslint-disable camelcase */
import Constants from '../common/constants';
import Player, { buildFromJson } from '../models/player';
import Players from '../models/players';

export default async function searchPlayers(query: string): Promise<Players> {
  const response = await fetch(
    `${Constants.API_BASE_URL}/players?search=${query}`
  );
  const body = await response.json();
  const players: Player[] = body.data.map((player: Record<string, unknown>) => {
    return buildFromJson(player);
  });

  console.log(players);
  const p: Players = {
    players,
    totalPages: body.meta.total_pages,
    currentPage: body.meta.current_page,
    nextPage: body.meta.next_page,
    perPage: body.meta.per_page,
    totalCount: body.meta.total_count,
  };
  return p;
}

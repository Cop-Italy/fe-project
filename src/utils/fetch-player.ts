/* eslint-disable camelcase */
import Constants from '../common/constants';
import Player, { buildFromJson } from '../models/player';

export default async function fetchPlayer(playerId: number): Promise<Player> {
  const response = await fetch(`${Constants.API_BASE_URL}/players/${playerId}`);
  const body = await response.json();
  return buildFromJson(body);
}

/* eslint-disable camelcase */
import Constants from '../common/constants';
import Team, { buildFromJson } from '../models/team';

// TODO: refactor with fetch-player file
export default async function fetchTeam(teamId: number): Promise<Team> {
  const response = await fetch(`${Constants.API_BASE_URL}/teams/${teamId}`);
  const body = await response.json();
  return buildFromJson(body);
}

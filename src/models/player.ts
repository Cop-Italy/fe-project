import Team, { buildFromJson as teamBuild } from './team';

export default interface Player {
  id: number;
  firstName: string;
  lastName: string;
  pictureUrl: string;
  position?: string;
  heightFeet?: number;
  heightInches?: number;
  weightLbs?: number;
  team: Team;
}

export function buildFromJson(player: Record<string, unknown>): Player {
  const jsonTeam = player.team as Record<string, unknown>;
  const team: Team = teamBuild(jsonTeam);
  return {
    id: player.id as number,
    firstName: player.first_name as string,
    lastName: player.last_name as string,
    position: player.position as string, // "C","G","F","C-F","G-F"
    heightFeet: player.height_feet as number,
    heightInches: player.height_inches as number,
    weightLbs: player.weight_pounds as number,
    pictureUrl: `https://nba-players.herokuapp.com/players/${player.last_name}/${player.first_name}`,
    team,
  };
}

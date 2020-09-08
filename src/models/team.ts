export default interface Team {
  id: number;
  fullName: string; // "Los Angeles Lakers",
  shortName?: string; // "Lakers"
  abbreviation?: string; // "LAL",
  city?: string; // "Los Angeles",
  conference?: string; // "West",
  division?: string; // "Pacific",
}

export function buildFromJson(jsonTeam: Record<string, unknown>): Team {
  return {
    id: jsonTeam.id as number,
    fullName: jsonTeam.full_name as string,
    shortName: jsonTeam.name as string,
    abbreviation: jsonTeam.abbreviation as string,
    city: jsonTeam.city as string,
    conference: jsonTeam.conference as string,
    division: jsonTeam.division as string,
  };
}

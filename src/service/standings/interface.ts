export interface Stats {
    games_played: number;
    won: number;
    draw: number;
    lost: number;
    goals_diff: number;
    goals_scored: number;
    goals_against: number;
}

export interface TeamStanding { 
    team_id: number;
    position: number;
    points: number;
    status: string;
    result?: string;
    overall: Stats;
}

export interface GetStandingsResponse {
    has_groups: boolean;
    standings: TeamStanding[] | TeamStanding[][]
}

export interface League {
    league_id: number;
    country_id: number;
    name: string;
}

export interface GetLeaguesResponse {
    data: League[];
}

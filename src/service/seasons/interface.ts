export interface Season {
    season_id: number;
    is_current: boolean;
    country_id: number;
    league_id: number;
    start_date: Date;
    end_date: Date;
}

export interface GetSeasonsResponse {
    data: Season[]
}


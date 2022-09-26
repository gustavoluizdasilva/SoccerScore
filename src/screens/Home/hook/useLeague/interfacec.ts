import { LeagueDto } from './../../../../domain/dto/league';

export interface UseLeagueResult {
    loading: boolean,
    leagues: LeagueDto[],
}

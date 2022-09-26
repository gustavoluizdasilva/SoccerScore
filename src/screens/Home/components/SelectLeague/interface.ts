import { LeagueDto } from './../../../../domain/dto/league';

export interface LeagueProps{
    item: LeagueDto,
    onPress: (league_id: LeagueDto) => void
}
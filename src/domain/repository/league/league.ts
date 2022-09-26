import { LeagueDto } from './../../dto/league';
import { leagueService } from '../../../service';


export const getLeagueResponse = async (): Promise<LeagueDto[]> => {
    const leagueResponse = await leagueService.getLeagues()

    return leagueResponse.data.map<LeagueDto>(league => ({
        league_id: league.league_id,
        country_id: league.country_id,
        name: league.name
    }))

}
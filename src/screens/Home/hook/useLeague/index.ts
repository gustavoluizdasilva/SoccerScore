import { UseLeagueResult } from './interfacec';
import { LeagueDto } from './../../../../domain/dto/league';
import { useCallback, useEffect, useState } from "react";
import { leagueRepository } from "../../../../domain";

const useLeagues = (): UseLeagueResult => {
    const [loading, setLoading] = useState(false)
    const [leagues, setLeagues] = useState<LeagueDto[]>([])

    const loadLeagues = useCallback(async () => {
        setLoading(true)

        const result = await leagueRepository.getLeagueResponse()
        
        setLeagues(result)
        setLoading(false)
    }, [])

    useEffect(() => {
        loadLeagues()
    }, [])

    return {
        loading,
        leagues,
    }
}

export default useLeagues
import soccerApi from "../../commons/api";
import { GET_STANDINGS } from "../../config/api";
import { GetStandingsResponse } from "./interface";

export const getStandings = async (season: number): Promise<GetStandingsResponse> => {
    const url = `${GET_STANDINGS}?season_id=${season}`
    const response = await soccerApi.get<GetStandingsResponse>(url)
    return response.data
}
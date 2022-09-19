import soccerApi from "../../commons/api";
import { GET_SEASONS } from "../../config/api";
import { GetSeasonsResponse } from "./interface";

export const getSeasons = async (league: number): Promise<GetSeasonsResponse> => {
    const url = `${GET_SEASONS}?league_id=${league}`
    const response = await soccerApi.get<GetSeasonsResponse>(url)
    return response.data
}
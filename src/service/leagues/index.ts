import soccerApi from "../../commons/api";
import { GET_LEAGUES } from "../../config/api";
import { GetLeaguesResponse } from "./interface";

export const getLeagues = async (): Promise<GetLeaguesResponse> => { 
    const url = `${GET_LEAGUES}?subscribed=true`
    const response = await soccerApi.get<GetLeaguesResponse>(url)
    return response.data
}
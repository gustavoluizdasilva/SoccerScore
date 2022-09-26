import React from "react";
import { ListRenderItemInfo, Text, View } from "react-native";
import { LeagueDto } from "../../domain/dto/league";
import SelectLeague from "./components/SelectLeague";
import useLeagues from "./hook/useLeague";
import Style from "./style";

const Home = () => { 
    const { leagues } = useLeagues()

    return (
        <View style={Style.content}>
            <Text style={Style.title}>Selecione a Liga:</Text>
            {leagues.map(league => (
                <SelectLeague item={league} onPress={() => {}} key={league.league_id}/>
            ))}
        </View>
    )
}

export default Home
import { View, Text, Pressable } from "react-native"
import { LeagueProps } from "./interface"
import Style from "./style"

const SelectLeague = ({ item, onPress }: LeagueProps) => {
    
    return (
        <View style={Style.container}>
            <Pressable onPress={() => onPress(item)}>
                <Text style={Style.content}>{item.name}</Text>
            </Pressable>
        </View>
    )
}

export default SelectLeague
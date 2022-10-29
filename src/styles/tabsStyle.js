import { StatusBar, StyleSheet } from "react-native";
import color from "./color";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.BGcolor,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
    },
    tabFood: {
        alignItems: "center",
        flex: 1,
        borderBottomWidth: 1,
        padding: 5,
    }
})

export default style
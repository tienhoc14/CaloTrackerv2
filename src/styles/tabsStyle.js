import { StatusBar, StyleSheet } from "react-native";
import color from "./color";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.BGcolor,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
    },
    modalContent: {
        height: '20%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '25%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

})

export default style
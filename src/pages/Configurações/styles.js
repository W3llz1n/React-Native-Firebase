import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
    },
    btn: {
        width: '50%',
        height: 50,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        marginTop: 20
    },
    btnText: {
        fontSize: 20,
        fontWeight: 600,
        textTransform: 'uppercase',
    },
})

export default styles;
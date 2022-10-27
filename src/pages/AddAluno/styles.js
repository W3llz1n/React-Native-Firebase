import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1C1C1C',
        alignItems:'center'
    },
    titulo:{
        color:'#00FFFF',
        width:'100%',
        textAlign:'center',
        fontSize:30,
        fontWeight:'800',
        marginTop:30
    },
    input: {
        width: '70%',
        borderColor: '#00FFFF',
        borderBottomWidth: 2,
        color: '#fff',
        marginVertical: 10,
    },
    btn: {
        width: '35%',
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
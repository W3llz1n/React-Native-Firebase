import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Card: {
    width: "100%",
    height: "auto",
    borderColor: "#00FFFF",
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  textTopListnome:{
    width: '40%',
    marginRight: 5,
    color:'#fff'
  },
  textTopList:{
    width:'20%',
    color: '#fff',
    flexShrink: 1,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  titulo: {
    color: "#00FFFF",
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 30,
    marginBottom: 15,
  },
  viewTopList: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  textTopListNome: {
    width: "40%",
    fontSize: 15,
    textTransform: "uppercase",
    color: "#00FFFF",
  },
  textTopList: {
    width: "20%",
    fontSize: 15,
    textTransform: "uppercase",
    color: "#00FFFF",
  },
  btnReload: {
    width: "100%",
    alignItems: "center",
  },
});

export default styles;

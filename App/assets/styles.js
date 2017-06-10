import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  background: {
    width: null,
    height: null,
  },
  wrapper: {
    paddingHorizontal: 5,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent"
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d73352"
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#d73352",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center"
  },
  textHead: {
    fontSize: 25
  },
  text: {
    flexDirection: "row",
    color: "#000",
    backgroundColor: "transparent",
    alignSelf: 'stretch',
    textAlign: 'left',
    paddingVertical: 5
  },
  listItemWrap: {
    backgroundColor: "rgba(255, 255, 255, .5)",
    marginVertical: 2,
    padding: 5
  }
});

export default styles;

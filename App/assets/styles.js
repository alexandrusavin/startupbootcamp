import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 667,
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
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d73352"
  },
  icon: {
    flex: 1
  },
  button: {
    backgroundColor: "#511E26",
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
    flex: 1,
    fontSize: 25
  },
  text: {
    flexDirection: "row",
    alignItems: 'flex-start',
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
  },
  datePickerWrap: {
    backgroundColor: 'rgba(214, 221, 214, .5)',
    marginBottom: 3
  },
  datePicker: {
    width: 360,
    height: 40
  }
});

export default styles;

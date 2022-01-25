import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
};
export default makeStyles({
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObj,
  },
  cardContainer: {
    flexDirection: "column",
    width: 400,
    height: 200,
    padding: "2rem",
    ...centeredStyleObj,
  },
  titleGridContainer: {
    flexDirection: "column",
    padding: "50px 0px",
    ...centeredStyleObj,
  },
  title: {
    textTransform: "uppercase",
    fontSize: "4rem",
    fontWeight: "700",
  },
  textField: {
    width: "90%",
  },
  searchButton: {
    marginLeft: ".5rem",
  },
  buttonContainer: {
    marginTop: ".5rem",
  },
  movieIcon: {
    fontSize: "4rem",
  },
  gridRow: {
    ...centeredStyleObj,
    flexDirection: "row",
    padding: "10px",
    color: "#808080",
  },
});

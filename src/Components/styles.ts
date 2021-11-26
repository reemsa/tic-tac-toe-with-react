import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    blockRoot: {
      flexGrow: 1,
      display: "inline-block",
      margin: "10px 0 0 2%",
    },
    block: {
      minWidth: 50,
      margin: 5,
      float: "left",
      display: "table-cell",
      textAlign: "center",
      fontFamily: "cursive",
      fontSize: 40,
      backgroundColor: "#e6e6e6",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "80%",
      position: "relative",
      left: "10%",
      marginTop: 25,
      height: "75vh",
      marginBottom: "5%",
    },
    startPage: {
      width: "100%",
      height: "100vh",
      backgroundRepeat: "repeat",
      backgroundImage:
        "url(https://media.istockphoto.com/vectors/tictactoe-back-to-school-background-doodle-tic-tac-toe-game-pen-and-vector-id989794376)",
    },
    text: {
      textAlign: "center",
      fontFamily: "cursive",
    },
    box: {
      width: "100%",
      height: "100px",
      backgroundColor: "#e6e6e6",
      position: "absolute",
      top: "25%",
    },
    gridSizeInput: {
      width: "30%",
      marginLeft: "35%",
      marginTop: 10,
    },
    inputRoot: {
      height: 50,
    },
    box2: {
      width: "100%",
      height: "200px",
      backgroundColor: "#e6e6e6",
      position: "absolute",
      top: "50%",
    },
    label: {
      color: "black",
      position: "relative",
      top: 15,
    },
    nameInput: {
      width: "30%",
      margin: 10,
    },
    next: {
      textAlign: "center",
      fontFamily: "cursive",
      position: "relative",
      left: "50%",
      marginTop: 10,
      backgroundColor: "#e6e6e6",
      fontSize: 18,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#bdbdbd",
      },
    },
    switch: {
      position: "relative",
      top: 15,
    },
    gameRoot: {
      width: "100%",
      height: "100%",
      backgroundImage:
        "url(https://media.istockphoto.com/vectors/tictactoe-back-to-school-background-doodle-tic-tac-toe-game-pen-and-vector-id989794376)",
    },
    infoBox: {
      width: "100%",
      height: 48,
      backgroundColor: "#e6e6e6",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      boxShadow:
        "rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px",
    },
    disabledButton: {
      backgroundColor: "#d5d5d5 !important",
    },
    actionButton: {
      textAlign: "center",
      fontFamily: "cursive",
      position: "relative",
      left: "40%",
      margin: 10,
      backgroundColor: "#e6e6e6",
      fontSize: 18,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#bdbdbd",
      },
    },
  });

export default styles;

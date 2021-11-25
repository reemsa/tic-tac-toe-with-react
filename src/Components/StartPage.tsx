import React, { FunctionComponent } from "react";
import GameGrid from "./GameGrid";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import { PlayersValues } from "../types";

interface StartPageProps {}

const StartPage: FunctionComponent<
  StartPageProps & WithStyles<typeof styles>
> = ({ classes }) => {
  const [gridSize, setGridSize] = React.useState<number>(3);
  const [playersDate, setPlayersData] = React.useState<PlayersValues>({
    player1: { name: "Player 1", xoValue: "X" },
    player2: {
      name: "Player 2",
      xoValue: "O",
    },
  });

  const [openGame, setOpenGame] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpenGame(false)
  }


  if (openGame) {
    return <GameGrid gridSize={gridSize ?? 0} onClose={handleClose} playersDate={playersDate}/>;
  }

  return (
    <div className={classes.startPage}>
      <div className={classes.box}>
        <Typography className={classes.text}>Enter Board Size</Typography>
        <TextField
        type="number"
          variant="outlined"
          id="standard-secondary"
          className={classes.gridSizeInput}
          InputProps={{
            classes: {
              input: classes.inputRoot,
              root: classes.inputRoot,
            },
            inputProps: {
                max: 9, min: 3
            }
          }}
          value={gridSize}
          onChange={(event) => {
              console.log(event?.target.value)
            const value: number = isNaN(parseInt(event?.target.value))
              ? 0
              : parseInt(event?.target.value);
            setGridSize(value);
          }}
          onBlur={event => {
            let value: number = isNaN(parseInt(event?.target.value))
            ? 3
            : parseInt(event?.target.value);
            value = value < 3 ? 3 : value;
            value = value > 9 ? 9 : value;
          setGridSize(value);
          }}
        />
      </div>
      <div className={classes.box2}>
        <InputLabel className={classes.text}>
          <span className={classes.label}>Player 1</span>
          <TextField
            variant="outlined"
            id="standard-secondary"
            className={classes.nameInput}
            InputProps={{
              classes: {
                input: classes.inputRoot,
                root: classes.inputRoot,
              },
            }}
            value={playersDate?.player1?.name}
            onChange={(event) => {
              setPlayersData({
                ...playersDate,
                ["player1"]: {
                  ...playersDate.player1,
                  name: event.target.value,
                },
              });
            }}
          />
          <span className={classes.label}>X</span>
          <Switch
            checked={playersDate?.player1?.xoValue === "O"}
            color="secondary"
            className={classes.switch}
            onChange={(event) => {
                const player1XOValue = event.target.checked ? "O" : "X";
                const player2XOValue = event.target.checked ? "X" : "O";
                setPlayersData({...playersDate, ["player1"]:{...playersDate?.player1, xoValue:player1XOValue}, ["player2"]:{
                    ...playersDate?.player2, xoValue:player2XOValue
                }})
            }}
          />
          <span className={classes.label}>O</span>
        </InputLabel>
        <InputLabel className={classes.text}>
          <span className={classes.label}>Player 2</span>
          <TextField
            variant="outlined"
            id="standard-secondary"
            className={classes.nameInput}
            InputProps={{
              classes: {
                input: classes.inputRoot,
                root: classes.inputRoot,
              },
            }}
            value={playersDate?.player2?.name}
            onChange={(event) =>
              setPlayersData({
                ...playersDate,
                ["player2"]: {
                  ...playersDate.player2,
                  name: event.target.value,
                },
              })
            }
          />
          <span className={classes.label}>X</span>
          <Switch
            checked={playersDate?.player2?.xoValue === "O"}
            color="secondary"
            className={classes.switch}
            onChange={(event) => {
                const player1XOValue = event.target.checked ? "X" : "O";
                const player2XOValue = event.target.checked ? "O" : "X";
                setPlayersData({...playersDate, ["player1"]:{...playersDate?.player1, xoValue:player1XOValue}, ["player2"]:{
                    ...playersDate?.player2, xoValue:player2XOValue
                }})
            }}
          />
          <span className={classes.label}>O</span>
        </InputLabel>
        <Button variant={"outlined"} className={classes.next} onClick={() => setOpenGame(true)}>
          Next
        </Button>
      </div>
      <Typography></Typography>
    </div>
  );
};

export default withStyles(styles)(StartPage);

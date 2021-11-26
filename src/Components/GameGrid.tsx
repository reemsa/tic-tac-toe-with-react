import React, { FunctionComponent } from "react";
import GameBlock from "./GameBlock";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { PlayersValues } from "../types";
import { checkWinnerTable, getPlayerName, getWinnerMessage } from "../utils";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";

interface GameGridProps {
  gridSize?: number;
  playersDate?: PlayersValues;
  onClose?: () => void;
}

const GameGrid: FunctionComponent<
  GameGridProps & WithStyles<typeof styles>
> = ({
  classes,
  gridSize = 3,
  onClose = () => {},
  playersDate = {
    player1: { name: "Player 1", xoValue: "X" },
    player2: {
      name: "Player 2",
      xoValue: "O",
    },
  },
}) => {
  const initialArray = Array(gridSize * gridSize)
    .fill(0)
    .map((value, index) => ({ index: index, value: "" }));
  const [array, setArray] = React.useState(initialArray);
  const [XOvalue, setXOValue] = React.useState<"X" | "O">("X");
  const [isDone, setIsDone] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOnClick = (event: any) => {
    const newArray = [...array];
    const item = newArray[event.target.value];
    if (!item) return;
    item.value = XOvalue;
    setArray(newArray);
    setXOValue(XOvalue === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setArray(array?.map((item) => ({ ...item, value: "" })));
    setIsDone(false);
    setMessage("");
  };

  const callBackFunction = (toMatch: string, playersDate: PlayersValues) => {
    const winMessage = getWinnerMessage(toMatch, playersDate);
    alert(winMessage);
    setMessage(winMessage);
    setIsDone(true);
    setOpen(true);
  };

  React.useEffect(() => {
    const done = array?.every((item) => item?.value);
    if (done) {
      setIsDone(done);
      setMessage("Match drawn...");
    }
    checkWinnerTable({ array, playersDate, size: gridSize, callBackFunction });
  }, [XOvalue]);

  return (
    <div className={classes.gameRoot}>
      <div className={classes.infoBox}>
        <Typography
          className={classes.text}
        >{`${playersDate?.player1?.name} use ${playersDate?.player1?.xoValue}`}</Typography>
        <Typography
          className={classes.text}
        >{`${playersDate?.player2?.name} use ${playersDate?.player2?.xoValue}`}</Typography>
        <Typography className={classes.text}>
          {isDone ? message : `${getPlayerName(playersDate, XOvalue)} turn`}
        </Typography>
      </div>

      <div className={classes.root}>
        {array.map((value) => (
          <GameBlock
            key={value.index}
            gridSize={gridSize}
            blockData={value}
            onClick={handleOnClick}
            isDone={isDone}
          />
        ))}
      </div>
      <Button
        variant={"outlined"}
        className={classes.actionButton}
        onClick={() => onClose()}
      >
        Back
      </Button>
      <Button
        variant={"outlined"}
        className={classes.actionButton}
        onClick={() => handleReset()}
      >
        Restart
      </Button>
    </div>
  );
};

export default withStyles(styles)(GameGrid);

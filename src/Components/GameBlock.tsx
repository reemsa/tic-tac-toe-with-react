import React, { MouseEventHandler } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

interface GameBlockProps {
  gridSize?: number;
  blockData?: { index: number; value: string };
  isDone?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

const GameBlock: React.FunctionComponent<
  GameBlockProps & WithStyles<typeof styles>
> = ({ classes, blockData, onClick, gridSize = 3, isDone = false }) => {
  const height = 100 / gridSize - 8;
  return (
    <Button
      variant="contained"
      color="default"
      className={classes.block}
      value={blockData?.index}
      onClick={onClick}
      style={{
        width: `calc(100% * (1/${gridSize}) - 10px - 1px)`,
        minHeight: `${height}vh`,
      }}
      classes={{
        disabled: classes.disabledButton,
      }}
      disabled={!!blockData?.value || isDone}
    >
      {blockData?.value}
    </Button>
  );
};

export default withStyles(styles)(GameBlock);

import { PlayersValues } from "../types";
import { getPlayerName } from "../utils";

describe("getPlayerName", () => {
  const playersDate: PlayersValues = {
    player1: {
      name: "Player 1",
      xoValue: "X",
    },
    player2: {
      name: "Player 2",
      xoValue: "O",
    },
  };
  let XOvalue: "X" | "O" = "X";
  it("Should return player name that use 'X'", () => {
    const result = getPlayerName(playersDate, XOvalue);
    expect(result).toStrictEqual("Player 1");
  });
  it("Should return player name that use 'O'", () => {
    XOvalue = "O";
    const result = getPlayerName(playersDate, XOvalue);
    expect(result).toStrictEqual("Player 2");
  });
  it("Should return undefined if playersDate are undefined", () => {
    XOvalue = "O";
    const result = getPlayerName({} as PlayersValues, XOvalue);
    expect(result).toStrictEqual(undefined);
  });
});

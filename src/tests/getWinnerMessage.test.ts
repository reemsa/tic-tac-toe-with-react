import { PlayersValues } from "../types";
import { getWinnerMessage } from "../utils";

describe("getWinnerMessage", () => {
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
  it("Should return the first player as the winner", () => {
    const value: string = "X";
    const result = getWinnerMessage(value, playersDate);
    expect(result).toStrictEqual("Congrats! Player 1 won!");
  });
  it("Should return the second player as the winner", () => {
    const value: string = "O";
    const result = getWinnerMessage(value, playersDate);
    expect(result).toStrictEqual("Congrats! Player 2 won!");
  });
  it("Should return the value of the last cell", () => {
    const value: string = "";
    const result = getWinnerMessage(value, playersDate);
    expect(result).toStrictEqual("");
  });
});

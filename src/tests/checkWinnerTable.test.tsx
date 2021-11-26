import { CheckWinnerTablePayload, PlayersValues } from "../types";
import { checkWinnerTable, getWinnerMessage } from "../utils";

describe("checkWinnerTable", () => {
  test("Should call the win function only one time", () => {
    const mockCallback = jest.fn(
      (toMatch: string, playersDate: PlayersValues) => {
        getWinnerMessage(toMatch, playersDate);
      }
    );

    const payload: CheckWinnerTablePayload = {
      /*
          x | x | x
          o | o |
            |   |
          */
      array: [
        { value: "X", index: 0 },
        { value: "X", index: 1 },
        { value: "X", index: 2 },
        { value: "O", index: 3 },
        { value: "O", index: 4 },
        { value: "", index: 5 },
        { value: "", index: 6 },
        { value: "", index: 7 },
        { value: "", index: 8 },
      ],
      playersDate: {
        player1: {
          name: "Player 1",
          xoValue: "O",
        },
        player2: {
          name: "Player 2",
          xoValue: "X",
        },
      },
      size: 3,
      callBackFunction: mockCallback,
    };
    checkWinnerTable(payload);
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  test("Should call the win function only one time", () => {
    const mockCallback2 = jest.fn(
      (toMatch: string, playersDate: PlayersValues) => {
        getWinnerMessage(toMatch, playersDate);
      }
    );
    const payload: CheckWinnerTablePayload = {
      /*
        x | o |
        o | x |
          |   | x
        */
      array: [
        { value: "X", index: 0 },
        { value: "O", index: 1 },
        { value: "", index: 2 },
        { value: "O", index: 3 },
        { value: "X", index: 4 },
        { value: "", index: 5 },
        { value: "", index: 6 },
        { value: "", index: 7 },
        { value: "X", index: 8 },
      ],
      playersDate: {
        player1: {
          name: "Player 1",
          xoValue: "O",
        },
        player2: {
          name: "Player 2",
          xoValue: "X",
        },
      },
      size: 3,
      callBackFunction: mockCallback2,
    };
    checkWinnerTable(payload);
    expect(mockCallback2.mock.calls.length).toBe(1);
  });
  test("Should call the win function only one time", () => {
    const mockCallback2 = jest.fn(
      (toMatch: string, playersDate: PlayersValues) => {
        getWinnerMessage(toMatch, playersDate);
      }
    );
    const payload: CheckWinnerTablePayload = {
      /*
        x | o | x
        o | o | o
        x | o | x
        */
      array: [
        { value: "X", index: 0 },
        { value: "O", index: 1 },
        { value: "X", index: 2 },
        { value: "O", index: 3 },
        { value: "O", index: 4 },
        { value: "O", index: 5 },
        { value: "X", index: 6 },
        { value: "O", index: 7 },
        { value: "X", index: 8 },
      ],
      playersDate: {
        player1: {
          name: "Player 1",
          xoValue: "O",
        },
        player2: {
          name: "Player 2",
          xoValue: "X",
        },
      },
      size: 3,
      callBackFunction: mockCallback2,
    };
    checkWinnerTable(payload);
    expect(mockCallback2.mock.calls.length).toBe(2);
  });
});

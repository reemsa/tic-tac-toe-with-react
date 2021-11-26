import {
  CheckWinnerTablePayload,
  GetValuePayload,
  PlayersValues,
} from "./types";

export const getWinnerMessage = (value: string, playersDate: PlayersValues) => {
  if(!value || (value !== "X" && value!== "O")) return "";
  const winnerName =
    playersDate?.player1?.xoValue === value
      ? playersDate?.player1?.name
      : playersDate?.player2?.name;
  return "Congrats! " + winnerName + " won!";
};

export const getCellValue = (data: GetValuePayload) => {
  const { array, col, gridSize, row } = data;
  const rowValues = array?.filter(
    (data) => Math.floor(data?.index / gridSize) === row
  );
  const columnValue = rowValues?.find(
    (data) => Math.floor(data?.index % gridSize) === col
  );
  return columnValue?.value ?? "";
};

export const checkWinnerTable = (payload: CheckWinnerTablePayload) => {
  const {
    array,
    playersDate,
    size,
    callBackFunction = (toMatch: string, playersDate: PlayersValues) => {
      console.log(getWinnerMessage(toMatch, playersDate));
    },
  } = payload;
  const data: GetValuePayload = { array, gridSize: size, col: 0, row: 0 };

  // Check vertical
  /*
   o | x |
   o | x |
     | x |
  */
  for (let col = 0; col < size; col++) {
    let matches = 1;
    const toMatch = getCellValue({ ...data, row: 0, col });
    if (toMatch == "") continue;
    for (let row = 1; row < size; row++) {
      if (getCellValue({ ...data, row, col }) == toMatch) matches++;
    }
    if (matches == size) {
      callBackFunction(toMatch, playersDate);
    }
  }

  // Check horizontal
  /*
   x | x | x
   o | o |
     |   |
  */
  for (let row = 0; row < size; row++) {
    let matches = 1;
    const toMatch = getCellValue({ ...data, row, col: 0 });
    if (toMatch == "") continue;
    for (let col = 1; col < size; col++) {
      if (getCellValue({ ...data, row, col }) == toMatch) matches++;
    }
    if (matches == size) {
      callBackFunction(toMatch, playersDate);
    }
  }

  // Check cross
  /*
   x | o |
   o | x |
     |   | x
  */
  let cross = 0;
  let matches = 1;
  let toMatch = getCellValue({ ...data, row: cross, col: cross });

  if (toMatch != "") {
    for (cross = 1; cross <= size; cross++) {
      if (getCellValue({ ...data, row: cross, col: cross }) == toMatch) matches++;
    }
    if (matches == size) {
      callBackFunction(toMatch, playersDate);
    }
  }

  // Check cross to other way
  /*
     | o | x
   o | x |
   x |   |
  */
  cross = 0;
  matches = 1;
  toMatch = getCellValue({ ...data, row: cross, col: size - 1 });
  if (toMatch != "") {
    for (cross = 1; cross < size; cross++) {
      if (getCellValue({ ...data, row: cross, col: size - 1 - cross }) == toMatch)
        matches++;
    }
    if (matches == size) {
      callBackFunction(toMatch, playersDate);
    }
  }
};

export const getPlayerName = (
  playersDate: PlayersValues,
  XOvalue: "X" | "O"
) => {
  if (playersDate?.player1?.xoValue === XOvalue) {
    return playersDate?.player1?.name;
  }
  return playersDate?.player2?.name;
};

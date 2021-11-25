import { CheckWinnerTablePayload, GetValuePayload, PlayersValues } from "./types";


  export const win = (value:string, playersDate:PlayersValues) => {
    const winnerName = playersDate?.player1?.xoValue === value ? playersDate?.player1?.name : playersDate?.player2?.name
    alert("Congrats! " + winnerName + " won!");
  }

  export const getValue = (data:GetValuePayload) =>  {
      const {array, col, gridSize, row} = data;
      const rowValues = array?.filter(data => Math.floor(data?.index/gridSize) === row);
      const columnValue = rowValues?.find(data => Math.floor(data?.index % gridSize) === col) ;
    return columnValue?.value ?? "";
  }

export const checkWinnerTable = (payload:CheckWinnerTablePayload) => {
    var cross;
    var matches;
    var toMatch;
    const {array, playersDate, size, callBackFunction=win } = payload;
    const data: GetValuePayload={array,gridSize:size, col:0, row:0 }

    // Check vertical
    for (let col = 0; col < size; col++) {
      let matches = 1;
      const toMatch = getValue({...data, row:0, col});
      if (toMatch == "") continue;
      for (let row = 1; row < size; row++) {
        if (getValue({...data, row, col}) == toMatch) matches++;
      }
      if (matches == size) {
        callBackFunction(toMatch, playersDate);
      }
    }

    // Check horizontal
    for (let row = 0; row < size; row++) {
      let matches = 1;
      const toMatch = getValue({...data,row, col:0});
      if (toMatch == "") continue;
      for (let col = 1; col < size; col++) {
        if (getValue({...data, row, col}) == toMatch) matches++;
      }
      if (matches == size) {
        callBackFunction(toMatch, playersDate);
      }
    }

    // Check cross
    cross = 0;
    matches = 1;
    toMatch = getValue({...data, row:cross, col:cross});
    if (toMatch != "") {
      for (cross = 1; cross <= size; cross++) {
        if (getValue({...data, row:cross, col:cross}) == toMatch) matches++;
      }
      if (matches == size) {
        callBackFunction(toMatch, playersDate);
      }
    }

    // Check cross to other way
    cross = 0;
    matches = 1;
    toMatch = getValue({...data, row:cross, col:size-1});
    if (toMatch != "") {
      for (cross = 1; cross < size; cross++) {
        if (getValue({...data, row: cross, col: size - 1 - cross}) == toMatch) matches++;
      }
      if (matches == size) {
        callBackFunction(toMatch,playersDate);
      }
    }
  }

  export const getPlayerName = (playersDate:PlayersValues, XOvalue: "X" | "O") => {
    if( playersDate?.player1?.xoValue === XOvalue ){
        return playersDate?.player1?.name
    };
    return playersDate?.player2?.name
  };
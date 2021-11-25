export interface PlayerData {
  name: string;
  xoValue: "X" | "O";
}

export interface PlayersValues {
  player1: PlayerData;
  player2: PlayerData;
}

export interface GetValuePayload{
    array:{index:number, value:string}[];
    row:number;
    col:number;
    gridSize:number;
}

export interface CheckWinnerTablePayload{
array:{index:number, value:string}[];
 size:number;
  playersDate:PlayersValues;
   callBackFunction?:(toMatch:string, playersDate:PlayersValues)=> void
}
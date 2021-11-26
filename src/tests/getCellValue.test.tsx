import { GetValuePayload } from "../types";
import { getCellValue } from "../utils";

describe("getCellValue", () => {
  /*
        0   1   2
    0=> x | x | x
    1=> o | o |
    2=> x | o | o
    */
  const payload: GetValuePayload = {
    array: [
      { value: "X", index: 0 },
      { value: "X", index: 1 },
      { value: "X", index: 2 },
      { value: "O", index: 3 },
      { value: "O", index: 4 },
      { value: "", index: 5 },
      { value: "X", index: 6 },
      { value: "O", index: 7 },
      { value: "O", index: 8 },
    ],
    gridSize: 3,
    col: 0,
    row: 0,
  };
  it("Should return the value of the third cell", () => {
    const result = getCellValue({ ...payload, row: 0, col: 2 });
    expect(result).toStrictEqual("X");
  });
  it("Should return the value of the sixth cell", () => {
    const result = getCellValue({ ...payload, row: 1, col: 2 });
    expect(result).toStrictEqual("");
  });
  it("Should return the value of the last cell", () => {
    const result = getCellValue({ ...payload, row: 2, col: 2 });
    expect(result).toStrictEqual("O");
  });
});

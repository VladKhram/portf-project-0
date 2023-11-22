import { initPieces } from "../../../gameProcess/helpers/initPieces";

export enum COLORS {
  WHITE = "white",
  BLACK = "black",
}

export enum PIECES {
  KING = "king",
  QUEEN = "queen",
  BISHOP = "bishop",
  KNIGHT = "knight",
  ROOK = "rook",
  PAWN = "pawn",
}
export interface IPiecePlayer {
  piece: PIECES;
  color: COLORS;
}

export enum LETTERS {
  a = "A",
  b = "B",
  c = "C",
  d = "D",
  e = "E",
  f = "F",
  g = "G",
  h = "H",
}

export const NubmersToLetters: LETTERS[] = [
  LETTERS.a,
  LETTERS.b,
  LETTERS.c,
  LETTERS.d,
  LETTERS.e,
  LETTERS.f,
  LETTERS.g,
  LETTERS.h,
];

export const LettersToNumbers = {
  [LETTERS.a]: 0,
  [LETTERS.b]: 1,
  [LETTERS.c]: 2,
  [LETTERS.d]: 3,
  [LETTERS.e]: 4,
  [LETTERS.f]: 5,
  [LETTERS.g]: 6,
  [LETTERS.h]: 7,
};

export interface IBoardCoordinates {
  x: LETTERS;
  y: number;
}

export interface IBoardCell extends IBoardCoordinates {
  color: COLORS;
  piece?: IPiecePlayer;
}

export const initBoardCells = () => {
  let cells: IBoardCell[] = [];

  const a = initPieces(COLORS.BLACK);
  console.log(a);
  const b = initPieces(COLORS.WHITE);
  console.log(b);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let cell = {} as IBoardCell;
      if ((i + j) % 2 === 0) {
        cell.color = COLORS.WHITE;
      } else {
        cell.color = COLORS.BLACK;
      }
      cell.x = NubmersToLetters[j];
      cell.y = i;
      cells.push(cell);
    }
  }

  return cells;
};

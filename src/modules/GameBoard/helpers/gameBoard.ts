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
export type TCellHeight = -1 | 0 | 1;
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
  cellHeight: TCellHeight;
}

//Next code should be placed in a future state manager

export const initBoard: Array<Array<IPiecePlayer | null>> = [
  [
    { piece: PIECES.ROOK, color: COLORS.BLACK },
    { piece: PIECES.KNIGHT, color: COLORS.BLACK },
    { piece: PIECES.BISHOP, color: COLORS.BLACK },
    { piece: PIECES.QUEEN, color: COLORS.BLACK },
    { piece: PIECES.KING, color: COLORS.BLACK },
    { piece: PIECES.BISHOP, color: COLORS.BLACK },
    { piece: PIECES.KNIGHT, color: COLORS.BLACK },
    { piece: PIECES.ROOK, color: COLORS.BLACK },
  ],
  [
    { piece: PIECES.PAWN, color: COLORS.BLACK },
    { piece: PIECES.PAWN, color: COLORS.BLACK },
    null,
    { piece: PIECES.PAWN, color: COLORS.BLACK },
    { piece: PIECES.PAWN, color: COLORS.BLACK },
    { piece: PIECES.PAWN, color: COLORS.BLACK },
    { piece: PIECES.PAWN, color: COLORS.BLACK },
    { piece: PIECES.PAWN, color: COLORS.BLACK },
  ],
  [null, null, null, null, null, null, null, null],
  [
    null,
    null,
    { piece: PIECES.PAWN, color: COLORS.BLACK },
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    { piece: PIECES.PAWN, color: COLORS.WHITE },
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    { piece: PIECES.PAWN, color: COLORS.WHITE },
    null,
    null,
    null,
  ],
  [
    { piece: PIECES.PAWN, color: COLORS.WHITE },
    { piece: PIECES.PAWN, color: COLORS.WHITE },
    { piece: PIECES.PAWN, color: COLORS.WHITE },
    null,
    null,
    { piece: PIECES.PAWN, color: COLORS.WHITE },
    { piece: PIECES.PAWN, color: COLORS.WHITE },
    { piece: PIECES.PAWN, color: COLORS.WHITE },
  ],
  [
    { piece: PIECES.ROOK, color: COLORS.WHITE },
    { piece: PIECES.KNIGHT, color: COLORS.WHITE },
    { piece: PIECES.BISHOP, color: COLORS.WHITE },
    { piece: PIECES.QUEEN, color: COLORS.WHITE },
    { piece: PIECES.KING, color: COLORS.WHITE },
    { piece: PIECES.BISHOP, color: COLORS.WHITE },
    { piece: PIECES.KNIGHT, color: COLORS.WHITE },
    { piece: PIECES.ROOK, color: COLORS.WHITE },
  ],
];

export const boardLandscape: Array<TCellHeight[]> = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, -1, -1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export const initBoardCells = () => {
  let cells: IBoardCell[] = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let cell = createBoardCell(j, i);
      setCellPiece(cell);
      setCellLandscape(cell);
      cells.push(cell);
    }
  }

  return cells;
};

export const createBoardCell = (x: number, y: number): IBoardCell => {
  let cell = {} as IBoardCell;
  if ((y + x) % 2 === 0) {
    cell.color = COLORS.WHITE;
  } else {
    cell.color = COLORS.BLACK;
  }
  cell.x = NubmersToLetters[x];
  cell.y = y;
  return cell;
};

export const setCellPiece = (cell: IBoardCell) => {
  const j = LettersToNumbers[cell.x];
  const i = cell.y;
  const piece = initBoard[i][j];

  if (piece) {
    cell.piece = piece;
  }
};

export const setCellLandscape = (cell: IBoardCell) => {
  const j = LettersToNumbers[cell.x];
  const i = cell.y;
  const height = boardLandscape[i][j];

  cell.cellHeight = height;
};

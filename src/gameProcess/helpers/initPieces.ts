import {
  COLORS,
  IBoardCoordinates,
  IPiecePlayer,
  LETTERS,
  LettersToNumbers,
  PIECES,
} from "../../modules/GameBoard/helpers/gameBoard";

type IPiece = IPiecePlayer & IBoardCoordinates;
type ITempPiece = Partial<IPiece>;

const initPieces = (color: COLORS): ITempPiece[] => {
  let pieces: ITempPiece[] = [];
  const piecesAxis = color === COLORS.WHITE ? 0 : 7;
  const pawnsAxis = color === COLORS.WHITE ? 1 : 6;

  const king = { x: LETTERS.e, piece: PIECES.KING };
  const queen = { x: LETTERS.d, piece: PIECES.QUEEN };
  const bishop = [
    { x: LETTERS.c, piece: PIECES.BISHOP },
    { x: LETTERS.f, piece: PIECES.BISHOP },
  ];
  const knight = [
    { x: LETTERS.b, piece: PIECES.KNIGHT },
    { x: LETTERS.g, piece: PIECES.KNIGHT },
  ];
  const rook = [
    { x: LETTERS.a, piece: PIECES.ROOK },
    { x: LETTERS.h, piece: PIECES.ROOK },
  ];
  const pawns = [];

  pieces.push(king, queen, ...bishop, ...knight, ...rook);
  pieces.forEach((el) => {
    el.y = piecesAxis;
  });

  for (let key in LettersToNumbers) {
    pawns.push({ x: key as LETTERS, y: pawnsAxis, piece: PIECES.PAWN });
  }

  pieces.push(...pawns);
  pieces.forEach((el) => (el.color = color));

  return pieces;
};

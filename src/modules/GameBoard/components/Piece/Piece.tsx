import { FunctionComponent, SVGProps, useEffect, useState } from "react";
import { COLORS, PIECES } from "../../helpers/gameBoard";
import { ReactComponent as Pawn } from "./../../../../assets/pawn.svg";
import { ReactComponent as King } from "./../../../../assets/king.svg";
import { ReactComponent as Queen } from "./../../../../assets/queen.svg";
import { ReactComponent as Bishop } from "./../../../../assets/bishop.svg";
import { ReactComponent as Knight } from "./../../../../assets/knight.svg";
import { ReactComponent as Rook } from "./../../../../assets/rook.svg";

interface PieceProps {
  piece: PIECES | "";
  color: COLORS;
}

const Piece = ({ piece, color }: PieceProps) => {
  const [PieceSVG, setPieceSVG] = useState<FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  > | null>();

  useEffect(() => {
    if (piece) {
      setPieceSVG(getSVGByPiece(piece));
    }
  }, [piece]);

  return PieceSVG ? <PieceSVG fill={color} /> : <></>;
};

const getSVGByPiece = (piece: PIECES | "") => {
  switch (piece) {
    case PIECES.PAWN:
      return Pawn;
    case PIECES.KING:
      return King;
    case PIECES.QUEEN:
      return Queen;
    case PIECES.BISHOP:
      return Bishop;
    case PIECES.KNIGHT:
      return Knight;
    case PIECES.ROOK:
      return Rook;
    default:
      return null;
  }
};

export default Piece;

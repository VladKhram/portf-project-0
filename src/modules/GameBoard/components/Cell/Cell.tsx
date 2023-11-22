import clsx from "clsx";
import { COLORS, IBoardCell } from "../../helpers/gameBoard";
import style from "./style.module.css";
import { ReactComponent as Pawn } from "./../../../../assets/pawn.svg";
import Piece from "../Piece/Piece";

const Cell = ({ color, x, y, piece }: IBoardCell) => {
  return (
    <div className={clsx(style.cell, getColor(color))}>
      {/* <Piece piece={piece} color={COLORS.BLACK} /> */}
    </div>
  );
};

const getColor = (color: COLORS) =>
  color === COLORS.WHITE ? style.white : style.black;

export default Cell;

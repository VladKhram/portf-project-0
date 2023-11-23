import clsx from "clsx";
import { COLORS, IBoardCell, TCellHeight } from "../../helpers/gameBoard";
import style from "./style.module.css";
import Piece from "../Piece/Piece";

const Cell = ({ color, x, y, piece, cellHeight }: IBoardCell) => {
  return (
    <div className={clsx(style.cell, getColor(color), getLanscape(cellHeight))}>
      {piece && <Piece {...piece} />}
    </div>
  );
};

const getColor = (color: COLORS) =>
  color === COLORS.WHITE ? style.white : style.black;

const getLanscape = (cellHeight: TCellHeight) => {
  if (cellHeight === 1) {
    return style.mount;
  }
  if (cellHeight === -1) {
    return style.lowland;
  }
  return "";
};

export default Cell;

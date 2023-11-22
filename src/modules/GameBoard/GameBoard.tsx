import Cell from "./components/Cell/Cell";
import { initBoardCells } from "./helpers/gameBoard";
import style from "./style.module.css";

const GameBoard = () => {
  return (
    <div className={style.board}>
      {initBoardCells().map((el, id) => (
        <Cell key={id} {...el} />
      ))}
    </div>
  );
};

export default GameBoard;

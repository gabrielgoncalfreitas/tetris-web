import React from "react";
import { Container } from "react-bootstrap";
import BoardRow from "./components/BoardRow";

function Game() {
  return (
    <Container className="text-center">
      <BoardRow id="board-row-1"></BoardRow>
      <BoardRow id="board-row-2"></BoardRow>
      <BoardRow id="board-row-3"></BoardRow>
      <BoardRow id="board-row-4"></BoardRow>
      <BoardRow id="board-row-5"></BoardRow>
      <BoardRow id="board-row-6"></BoardRow>
      <BoardRow id="board-row-7"></BoardRow>
      <BoardRow id="board-row-8"></BoardRow>
      <BoardRow id="board-row-9"></BoardRow>
      <BoardRow id="board-row-10"></BoardRow>
      <BoardRow id="board-row-11"></BoardRow>
      <BoardRow id="board-row-12"></BoardRow>
      <BoardRow id="board-row-13"></BoardRow>
      <BoardRow id="board-row-14"></BoardRow>
      <BoardRow id="board-row-15"></BoardRow>
      <BoardRow id="board-row-16"></BoardRow>
      <BoardRow id="board-row-17"></BoardRow>
      <BoardRow id="board-row-18"></BoardRow>
      <BoardRow id="board-row-19"></BoardRow>
      <BoardRow id="board-row-20"></BoardRow>
    </Container>
  );
}

export default Game;
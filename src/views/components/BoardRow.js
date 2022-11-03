import React from "react";

import changeColor from "../../scripts/script";

function BoardRow(props) {
    return (
        <div className="board-row" id={props.id} onClick={() => { changeColor(props.id) }}>
            <div className="board-col" id={props.id + "-col-1"}></div>
            <div className="board-col" id={props.id + "-col-2"}></div>
            <div className="board-col" id={props.id + "-col-3"}></div>
            <div className="board-col" id={props.id + "-col-4"}></div>
            <div className="board-col" id={props.id + "-col-5"}></div>
            <div className="board-col" id={props.id + "-col-6"}></div>
            <div className="board-col" id={props.id + "-col-7"}></div>
            <div className="board-col" id={props.id + "-col-8"}></div>
            <div className="board-col" id={props.id + "-col-9"}></div>
            <div className="board-col" id={props.id + "-col-10"}></div>
        </div>
    );
}

export default BoardRow;
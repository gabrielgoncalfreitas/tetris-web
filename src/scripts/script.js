export default function changeColor(id) {
    let hex1 = parseInt(Math.floor(Math.random() * 255) + 1).toString(16);
    let hex2 = parseInt(Math.floor(Math.random() * 255) + 1).toString(16);
    let hex3 = parseInt(Math.floor(Math.random() * 255) + 1).toString(16);
    let hex = `#${hex1}${hex2}${hex3}`;

    document.querySelector(`#${id}`).childNodes.forEach(boardCol => {
        if (boardCol.id != null) {
            document.querySelector(`#${boardCol.id}`).style.backgroundColor = hex;
        }
    });
}
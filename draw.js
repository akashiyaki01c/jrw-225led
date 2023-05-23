
!function() {
    function drawDest(col, row) {
        const elem = document.getElementById("dest-inner");
        elem.style.left = `-${col * 80}px`;
        elem.style.top = `-${row * 32}px`;
    }
    function drawType(col, row) {
        const elem = document.getElementById("type-inner");
        elem.style.left = `-${col * 64}px`;
        elem.style.top = `-${row * 32}px`;
    }

    function getColumn(value) { return Number.parseInt(value.split("_")[0]); }
    function getRow(value) { return Number.parseInt(value.split("_")[1]); }

    document.getElementById("select-dest").onchange = ((event) => {
        const value = event.target.value;
        drawDest(getColumn(value), getRow(value))
    });
    document.getElementById("select-type").onchange = ((event) => {
        const value = event.target.value;
        drawType(getColumn(value), getRow(value))
    });
}();

!function() {
    function getColumn(value) { return Number.parseInt(value.split("_")[0]); }
    function getRow(value) { return Number.parseInt(value.split("_")[1]); }

    document.getElementById("select-dest").onchange = ((event) => {
        const value = event.target.value;
        dest.update(getColumn(value), getRow(value));
    });
    document.getElementById("select-type").onchange = ((event) => {
        const value = event.target.value;
        type.update(getColumn(value), getRow(value));
    });
}();
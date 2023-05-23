!async function() {
    const isAllDisplay = new URLSearchParams(window.location.search).has('all_display');
    console.log(isAllDisplay);

    const destData = await (await fetch("./dest.json")).json();
    const destSelect = document.getElementById("select-dest");
    
    var html = ``;
    destData.forEach(sta => {
        function draw() {
            html += `<option value="${sta.row}_${sta.column}">[${sta.line}]${sta.name}</option>`;
        }
        if (isAllDisplay)
            draw();
        else if (sta.isDisplay)
            draw();
        
    });
    destSelect.innerHTML = html;
}();

!async function() {
    const isAllDisplay = new URLSearchParams(window.location.search).has('all_display');
    console.log(isAllDisplay);

    const destData = await (await fetch("./type.json")).json();
    const destSelect = document.getElementById("select-type");
    
    var html = ``;
    destData.forEach(sta => {
        function draw() {
            html += `<option value="${sta.row}_${sta.column}">[${sta.line}]${sta.name}</option>`;
        }
        if (isAllDisplay)
            draw();
        else if (sta.isDisplay)
            draw();
        
    });
    destSelect.innerHTML = html;
}();
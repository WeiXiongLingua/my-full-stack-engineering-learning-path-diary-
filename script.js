const tds = document.querySelectorAll('td');
tds.forEach(td => {
    td.onclick = function () {
        td.style.backgroundColor = '#222';
    }
    td.onmouseleave = function () {
        td.style.backgroundColor = 'red';
    }
})
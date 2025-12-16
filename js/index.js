let tds = document.querySelectorAll('td');
    tds.forEach(item => {
        item.onclick = function () {
            this.style.background = '#222'
        }
        item.onmouseleave = function () {
            this.style.background = ''
        }
    })
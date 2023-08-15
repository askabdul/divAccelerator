const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        removeClass()

        tab.classList.add('active')
    })
})

function removeClass() {
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
}


const container = document.querySelector('.container');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const boxes = 200;

for (let i = 1; i < boxes; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.textContent = i
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        let color = colors[Math.floor(Math.random() * colors.length)]
        square.style.backgroundColor = color
        square.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
    })


    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = '0 0 2px #000'
    })
}


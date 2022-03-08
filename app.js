document.addEventListener('DOMContentLoaded', () => {
    const computerGrid = document.querySelector('.grid-computer')
    const displayGrid = document.querySelector('.grid-display')
    const ships = document.querySelector('.ship')
    const destroyer = document.querySelector('.destroyer-container')
    const submarine = document.querySelector('.submarine-container')
    const crusier = document.querySelector('.crusier-container')
    const battleship = document.querySelector('.battleship-container')
    const carrier = document.querySelector('.carrier-container')
    const StartButton = document.querySelector('#start')
    const infoDisplay = document.querySelector('#info')
    const computerSquares = []
    let isHorizontal = true
 
    const width = 10
 
    function createBoard(grid, squares) {
        for(let i = 0; i < width*width; i++){
           const square = document.createElement('div')
           square.dataset.id = i
           grid.appendChild(square)
           squares.push(square)
        }
    }
    createBoard(computerGrid, computerSquares)
 
    const shipArray = [
        {
            name: 'destroyer',
            directions: [
                [0, 1],
                [0, width]
            ]
        },
        {
            name:'submarine',
            directions: [
                [0, 1, 2],
                [0, width, width*2]
            ]
        },
        {
         name:'crusier',
         directions: [
             [0, 1, 2],
             [0, width, width*2]
         ]
         },
         {
             name:'battleship',
             directions: [
                 [0, 1, 2, 3],
                 [0, width, width*2, width*3]
             ]
         },
         {
             name:'carrier',
             directions: [
                 [0, 1, 2, 3, 4],
                 [0, width, width*2, width*3, width*4]
             ]
         },
    ]
    // Draw the computers ships in random locations
    function genarate(ship) {
        let randomDirection = Math.floor(Math.random() * ship.directions.length)
        let current = ship.directions[randomDirection]
        if (randomDirection === 0) direction = 1
        if (randomDirection === 1) direction = 10
        let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))
 
        const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
        const isAtRightEdage = current.some(index => (randomStart + index) % width === width - 1)
        const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)
 
        if (!isTaken && !isAtRightEdage && !isAtLeftEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))
 
        else genarate(ship)
    }
 
    genarate(shipArray[0])
    genarate(shipArray[1])
    genarate(shipArray[2])
    genarate(shipArray[3])
    genarate(shipArray[4])
 
 
 })
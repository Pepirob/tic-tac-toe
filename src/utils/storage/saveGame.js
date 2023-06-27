export function saveGameToStorage({ board, turn, winner }) {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', JSON.stringify(turn))
    window.localStorage.setItem('winner', JSON.stringify(winner))
}

export function removeGameFromStorage() {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('winner')
}
import { useState } from "react"
import { TURN } from "../constants"
import { checkEndGame, checkWinner } from "../utils/board"
import confetti from "canvas-confetti"
import { removeGameFromStorage, saveGameToStorage } from "../utils/storage/saveGame"

export function useGame() {
    const [board, setBoard] = useState(
        JSON.parse(window.localStorage.getItem('board'))
        || Array(9).fill(null)
    )
    const [turn, setTurn] = useState(
        JSON.parse(window.localStorage.getItem('turn')) || TURN.X
    )
    const [winner, setWinner] = useState(
        JSON.parse(window.localStorage.getItem('winner')) || null
    )

    const updateBoard = (index) => {
        if (board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)



        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)

            return
        } else if (checkEndGame(newBoard)) {
            setWinner(false)

        }
        const newTurn = turn === TURN.X ? TURN.O : TURN.X
        setTurn(newTurn)

        saveGameToStorage({
            board: newBoard,
            turn: newTurn,
            winner: newWinner
        })

    }

    const newGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURN.X)
        setWinner(null)
        removeGameFromStorage()
    }

    return {
        board,
        turn,
        winner,
        updateBoard,
        newGame
    }
}
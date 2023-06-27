/* eslint-disable react/prop-types */
import './App.css'
import { WinnerModal } from './components/WinnerModal'
import { Turn } from './components/Turn'
import { Board } from './components/Board'
import { useGame } from './hooks/useGame'
import Header from './components/Header'

function App() {
  const {
    board,
    turn,
    winner,
    updateBoard,
    newGame
  } = useGame()

  return (
    <main className='board'>
      <Header />
      <Board board={board} updateBoard={updateBoard} />
      <Turn turn={turn} />
      <WinnerModal winner={winner} newGame={newGame} />
    </main>
  )
}

export default App

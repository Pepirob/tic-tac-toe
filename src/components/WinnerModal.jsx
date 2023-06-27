/* eslint-disable react/prop-types */
import { Square } from "./Square"
export function WinnerModal({ winner, newGame }) {
    if (winner === null) return

    return <section className='winner'>
        <div className='text'>
            <h2>
                {winner === false
                    ? 'Empate'
                    : 'Ganó:'}
            </h2>

            <header className='win'>
                {winner && <Square>{winner}</Square>}
            </header>

            <footer>
                <button onClick={() => newGame()}>Empezar de nuevo</button>
            </footer>
        </div>
    </section>


}
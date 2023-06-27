/* eslint-disable react/prop-types */
import { Square } from "./Square"

export function Board({ board, updateBoard }) {
    return (
        <section className='game'>
            {board.map((_, index) => {
                return (
                    <Square updateBoard={updateBoard} key={index} index={index} >
                        {board[index]}
                    </Square>
                )
            })}
        </section>
    )
}
/* eslint-disable react/prop-types */
export function Square({ children, isSelected, index, updateBoard }) {
    const className = isSelected ? 'is-selected' : ''
    return (
        <div onClick={() => updateBoard(index)} className={`square ${className}`}>
            {children}
        </div>
    )
}
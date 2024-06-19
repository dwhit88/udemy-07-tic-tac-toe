export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player: {turn.player}; Row: {turn.square.row + 1}; Column:{' '}
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  )
}

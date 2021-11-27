import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often', 
    'Adding manpower to a late software project makes it later!', 
    'The first 90 percent of the code accounts for the first 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 
    'Premature optimization is the root of all evil', 
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enoguh to debug it.', 
    'Programming without an extremenly heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
    console.log(votes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text='Vote' />
      <Button handleClick={nextAnecdote} text='Next anecdote' />
    </div>
  )
}

export default App;

import { useState } from 'react'

const AnecdoteMostVoted = ({mostVoted, anecdotes, votes}) => {
  if (votes[mostVoted] === 0){
    return(
      <div>
        <h1>Most Voted Anecdote</h1>
        No one has voted yet!!!
      </div>
    )
 }
  return (
    <>
      <h1>Most Voted Anecdote</h1>
      {anecdotes[mostVoted]}<br/>
      has {votes[mostVoted]} votes
    </>
  )

}

const App = () => {
const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleRandom = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    console.log('Random number: ', index)
    setSelected(index)
  }
  
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVoted = () => {
    const maxVotes = Math.max(...votes)
    const maxVoted = votes.indexOf(maxVotes)
    return(maxVoted)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes<br/>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleRandom}>next anecdote</button>
      
      <AnecdoteMostVoted mostVoted = {mostVoted()} anecdotes = {anecdotes} votes={votes}/>
    </div>
  )
}

export default App

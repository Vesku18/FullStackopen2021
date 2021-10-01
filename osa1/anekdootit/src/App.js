import React, { useState } from 'react'


  
const Winner = ({anet, mostVoted, voteCount, taulu}) => {
  if(voteCount >0)
    return(
      <>
      <h1>Anecdote with most votes</h1>
      <Anerow anet = {anet} sel = {mostVoted} />
      <p>has {voteCount} votes</p>      
      </>
    )
  return (<>No votes yet</>)
  
}

const Anerow = ({anet,sel}) => { 
    return( <div><p>{anet[sel]}</p></div>)
  }

const taulu = new Array(7).fill(0);
  taulu.pituus = 7
  taulu.suurin=0
  console.log('tyhjä',taulu)
  console.log('pituus',taulu.pituus)
  console.log('suurin',taulu.suurin)


const App = () => {
   
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [voteCount, setVoteCount]=useState(0)
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const next = (selection) => {
    let sel = Math.floor(Math.random() * 7)
    setSelected(sel)
    console.log("uusi valinta" ,sel)
  }

  const vote = () =>{
    taulu[selected] = taulu[selected] + 1
    for (var i=0;i<taulu.pituus; i++){
      if (taulu[i] > voteCount){
        setVoteCount(taulu[i])
        setMostVoted(i)
      } 
    }
    console.log(voteCount, mostVoted, taulu)
  }      
  return (
    <div>
      
      <h1>Anecdote of the day</h1>
      <Anerow anet = {anecdotes} sel = {selected} />


      <button onClick={vote} > vote </button>
      <button onClick={next} > nextAnecdote </button>
      <br/>


      <Winner anet = {anecdotes} mostVoted = {mostVoted} voteCount={voteCount} taulu={taulu}/>

    </div>
  )
}

export default App
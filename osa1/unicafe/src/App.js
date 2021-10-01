import React , { useState } from 'react'


const Button = ({text,act}) => {
  return( 
    <>
     <button onClick={act}> text </button>
    </>
  )
}

const StatisticLine = ({text,counter})  => {
  return(<tr> <td>{text}</td><td> {counter} </td></tr>)
}
const StatisticLinePros = ({text,counter})  => {
  return(<tr> <td>{text} </td><td> {counter}</td> %</tr>)
}

let summa = 0 

const Statistics = ({counterGood,counterNeutral,counterBad}) =>{

  if (summa > 0)
  {
    return (
      <table>
      <StatisticLine text = {"good"} counter = {counterGood} />
      <StatisticLine text = {"neutral"} counter = {counterNeutral} />
      <StatisticLine text = {"bad"} counter = {counterBad}/>
      <StatisticLine text="all" counter={summa}  />
      <StatisticLine text="average" counter={ (counterGood-counterBad)/summa} />
      <StatisticLinePros text="positive" counter={counterGood/summa * 100}  />  
      </table>
    )
  }
  return(
    <div>
      <p>No feedback given</p>
    </div>
  )

  
}

const App = () => {
 
  const [counterGood, setCounterGood ] = useState(0)
  const [counterNeutral, setCounterNeutral ] = useState(0)
  const [counterBad, setCounterBad ] = useState(0)

  const increaseGood = () => {setCounterGood(counterGood +  1)
                              summa = summa +1  
                            console.log(summa,counterGood)}
  const increaseNeutral = () => {setCounterNeutral(counterNeutral +  1)
                              summa = summa +1}
  const increaseBad = () => {setCounterBad(counterBad + 1)
                              summa = summa +1}


   return (
    <div>
      <h1>give feedback</h1>
      <Button text={"Good"} act={increaseGood} />
 
      <Button text={"Neutral"} act={increaseNeutral} />
 
      <Button text = "Bad" act={increaseBad}/>

      <h1>statistics</h1>

      <Statistics counterGood = {counterGood} counterBad = {counterBad} counterNeutral={counterNeutral} /> 

    </div>
  )
}

export default App;

import React from 'react'
const Header = (props) => {
  return(
    <div>
      <h1>{props.otsikko}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <p>
      {props.osa} {props.ex}
    </p>
  )
}

const Total = (props) =>{
  return(
    <p>
      {props.totalLabel} {props.total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalLabel = 'Number of exercises'  

  return (
    <div>
      <Header otsikko = {course}/>
      <Content osa = {part1} ex = {exercises1} />
      <Content osa = {part2} ex = {exercises2} />
      <Content osa = {part3} ex = {exercises3} />
      
      
      <Total total = {exercises1 + exercises2 + exercises3} totalLabel = {totalLabel} />
    </div>
  )
}

export default App;

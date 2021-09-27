import React from 'react'
const Header = (props) => {
  return(
    <div>
      <h1>{props.otsikko}</h1>
    </div>
  )
}

const Content = (props) =>{
  console.log("Content")
  console.log(props)
  return(
    <div>
        
      <Part osa={props.p1} ex={props.ex1} />
      <Part osa={props.p2} ex={props.ex2} />
      <Part osa={props.p3} ex={props.ex3} />
      
    </div>
  )
}

const Part = (props) =>{
  console.log("Part")
  console.log(props)
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
  let l = [part1,part2,part3]
  return (
    <div>
      <Header otsikko = {course}/>
      <Content p1 = {part1} p2 = {part2} p3 = {part3} ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3} totalLabel = {totalLabel} />
    </div>
  )
}

export default App;

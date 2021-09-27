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
        
      <Part osa={props.p1} />
      <Part osa={props.p2} />
      <Part osa={props.p3} />
      
    </div>
  )
}

const Part = (props) =>{
  console.log("Part")
  console.log(props)
  return(
    <p>      
        {props.osa.name} {props.osa.exercises}
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
  const part1 = { 
    name:'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name:'State of a component',
    exercises: 14
  }
  const totalLabel = 'Number of exercises'  

  return (
    <div>
      <Header otsikko = {course}/>
      <Content p1 = {part1} p2 = {part2} p3 = {part3} />
      <Total total = {part1.exercises + part2.exercises + part3.exercises} totalLabel = {totalLabel} />
    </div>
  )
}

export default App;

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
        
      <Part osa={props.p[0].name} ex={props.p[0].exercises} />
      <Part osa={props.p[1].name} ex={props.p[1].exercises} />
      <Part osa={props.p[2].name} ex={props.p[2].exercises} />
      
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
  const parts = [
    { 
    name:'Fundamentals of React',
    exercises: 10
    },
    {
    name:'Using props to pass data',
    exercises: 7
    },
    {
    name:'State of a component',
    exercises: 14
    }
  ]
  const totalLabel = 'Number of exercises'  

  return (
    <div>
      <Header otsikko = {course}/>
      <Content p = {parts} />
      <Total total = {parts[0].exercises + parts[1].exercises + parts[2].exercises} totalLabel = {totalLabel} />
    </div>
  )
}

export default App;

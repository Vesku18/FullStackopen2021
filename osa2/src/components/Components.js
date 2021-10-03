import React from 'react'


const Course = ({course}) =>{
  return(
  <div>
      <Header otsikko = {course.name}/>
      <Content parts = {course.parts}/>
      <Total exs = {course.parts} />
  </div>
  )
}

const Header = (p) => {
  return(
    <div>
      <h1>{p.otsikko}</h1>
    </div>
  )
}

const Content = ({parts}) =>{
  return(
    <div>
      {
      parts.map( p => <Part key = {p.id} p = {p}/> )
      }
    </div>
  )
}

const Part = ({p}) =>{
  return(
    <li> {p.name}{p.exercises} </li>
  )
}

const getSum = (total,s) => total+s;

const Total = ({exs}) =>{
  console.log("parts", exs)
  console.log("loki", exs.map(p=>p.exercises))

  return(
    <p>
      Number of exercises  
      {exs.map(p=>p.exercises).reduce(getSum,0)}
    </p>
  )
}

export default Course;

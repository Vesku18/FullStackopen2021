import React, { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Addnew from './components/Addnew'
import axios from 'axios'


const ShowRow = ({countriesToShow, handle}) => {
  if (countriesToShow.length === 1 ) {
    let entry = countriesToShow[0] 
   
    return(
      <>
      <p>Name: {entry.name}</p> 
      <p>Capital: {entry.capital}</p>
      <p>Area: {entry.area}</p>
      <p>Languages:</p> {entry.languages.map(s => {return(<ul><li>{s.name}</li></ul>)})}      
      <p>Flag: </p> <img src={entry.flags.png} /> 
      </>
      )

    }
    else 
    if (countriesToShow.length > 1 &&  countriesToShow.length < 11) {
      return(
        <>
        
        {countriesToShow.map((n) => 
            <li> {n.name}
                <button onClick={()=>handle(n)}> Show</button>
             </li>)} 
        </>
        )
      }
      if (countriesToShow.length > 10) {
        return(
          <>
          Too many matches
          </>
          )
        }
  
      return (
        <p>Input country name</p>
      )
  }

const App = (props) => {  
  const [persons, setPersons] = useState([])
  const [newName, setNewName]=useState('')
  const [newNumber, setNewNumber]=useState('')
  const [bookFilter, setNewBookFilter]=useState('')
  const [showAll, setShowAll] = useState(true)

  const [countries, setCountries] =useState([])  
  const [countryFilter, setCountryFilter] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

  

  const hook=()=>{
  console.log("effect")
  axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      console.log('promise fullfilled')
      setPersons(response.data)
    })
  }

  useEffect(hook, []) 
  console.log('render',persons.length, 'persons')
 

  const hook1=()=>{
    console.log("effect")
    axios
      .get('https://restcountries.com/v2/all')
      .then(response=>{
        console.log('promise fullfilled')
        setCountries(response.data)
      })
    }
  
  useEffect(hook1, []) 
  console.log('render',countries.length, 'countries')
    

  const addContact = (event) => {
    event.preventDefault()

    if (persons.map(n =>n.name).indexOf(newName) > -1)
    {
    alert(`${newName} exists, not added`)
    }
    else
    {
      const contactObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1,
      }
      console.log('new contact added, event.target')

      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleBookFilterChange = (event) => {
    setNewBookFilter(event.target.value)
    if (event.target.value === "")
      setShowAll(true)
    else
      setShowAll(false)
  }


  
  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)

    let entries = countries.map((a)=>a.name)
    console.log("selected entries - 1", entries.length)   

    setCountriesToShow(countries.filter((a)=>a.name.includes(countryFilter)))
  }
  
  const handleJumpToCountry = (n) => {
    
    setCountryFilter(n.name)
    setCountriesToShow(countries.filter((a)=>a.name.includes(n.name)))
  }

  const contactsToShow = showAll
    ? persons
    : persons.filter(n => n.name === bookFilter)

  return (
    <div>
      <h2>Phonebook</h2>
      
      <div>
      filter shown with:
        <input value={bookFilter}
        onChange={handleBookFilterChange} />
      </div>

      <h2>add a new</h2>
      <Addnew addContact={addContact}
              newName={newName} 
              handleNameChange={handleNameChange}
              newNumber={newNumber} 
              handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          show{showAll ? 'important' :  'all' }
        </button>
      </div>
      <ul>
        {contactsToShow.map(n => 
          <Contact key={n.name} contact={n} />
        )}
      </ul>


      <h1> FlagFinder</h1>
      <p> find countries</p>
      <input value={countryFilter}
              onChange = {handleCountryFilterChange} />

      <div> 
        <ShowRow countriesToShow = {countriesToShow} handle={handleJumpToCountry}/>
      </div>
    </div>
  )
}

export default App 
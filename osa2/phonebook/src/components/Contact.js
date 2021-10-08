import React from 'react'

const Contact = ({ contact, action }) => {
  return (
    <li>{contact.name} {contact.number}
      <button onClick={action}>delaa</button>
    </li>
  )
}

export default Contact
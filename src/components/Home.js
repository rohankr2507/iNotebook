import React from 'react'
// import { useContext } from 'react'

// import noteContext from '../contexts/notes/noteContext'

import { Notes } from './Notes'

export default function Home(props) {

  const { showAlert } = props

  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  )
}

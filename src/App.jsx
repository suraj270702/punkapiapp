import { useState } from 'react'
import Search from './components/Search'
import Card from './components/Card'

function App() {
  const [queryInput, setQueryInput] = useState('')

  return (
    <>
      <Search setQueryInput={setQueryInput} />
      <Card queryInput={queryInput}/>
    </>
  )
}

export default App

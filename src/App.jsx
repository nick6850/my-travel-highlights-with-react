import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  let places = data.map(place => {
    return <Card place={place}/>
  })
  
  return (
    <>
      <Navbar/>
      {places}
    </>
  )
}

export default App

import { useState } from 'react'
import Studentcard from './components/common/Studentcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Studentcard name="TARIQ AZIZ" age={21} course="WD" />  
    <Studentcard name="AHMAD BUTT" age={22} course="DM"/>  
    <Studentcard name="SHAN KHAN" age={21}  course="WD"/> 
    <Studentcard name="ZAHID ALI" age={20} course="DM"/> 
    
    </>
  )
}

export default App

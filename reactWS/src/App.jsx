import { useState } from 'react'
import Studentcard from './components/common/Studentcard'
import Childrenprops from './components/common/Childrenprops'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Studentcard name="TARIQ AZIZ" age={21} course="WD" />  
    <Studentcard name="AHMAD BUTT" age={22} course="DM"/>  
    <Studentcard name="SHAN KHAN" age={21}  course="WD"/> 
    <Studentcard name="ZAHID ALI" age={20} course="DM"/> 
    <br /><br />

    <Childrenprops normalprop="normal prop/custom prop">
    <h1> this in betweeen of both tags is called Childrenprops</h1>
    </Childrenprops>

    </>
  )
}

export default App

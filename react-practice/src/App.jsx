import Counter from "./components/pages/Counter"
import Greeting from "./components/pages/Greeting"
import Studentcard from "./components/pages/Studentcard"


function App() {

  return (
    <>

    {/* <Greeting name="TARIQ AZIZ" age="32" bool="true" />
    <br />
    <Greeting name="ahmad " age="22" bool="true" /> <br />
    <Greeting name="AZIZ" age="2" bool="true" />  */}


    {/* new way --> destructuring way*/}
    {/* <Greeting name ="tariq aziz" age="22" grade="14"/>
    <Greeting name ="akbar khan" age="22" grade="14"/>
    <Greeting name ="ali" age="20" grade="12"/> */}


    {/* task */}
    {/* <Studentcard name="hazrat" age={33} grade={12}/>
    <Studentcard name="aghmad" age={55} grade={2}/>
    <Studentcard name="t" age={3} grade={2}/> */}
       

    <Counter/>

    </>
  )
}

export default App

import { useEffect } from "react";
import { useState } from "react"

function App() {
  let [counterValue, setCounterValue] = useState(0)

  function persistData (newList){
    localStorage.setItem('counterValue',JSON.stringify({ counterValue : newList}))
  }
  
  function addCounter () {
    const newCounterValue = counterValue+1;
    setCounterValue(newCounterValue)
    persistData(newCounterValue)
  }

  function substractCounter () {
    if (counterValue <= 0) {
      return
    }
    const newCounterValue = counterValue-1;
    setCounterValue(newCounterValue)
    persistData(newCounterValue)
  } 

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localCounterValue = localStorage.getItem('counterValue')
    if (!localCounterValue) {
      return
    }
    localCounterValue = JSON.parse(localCounterValue).counterValue
    setCounterValue(localCounterValue)

  }, [])

  return (
    <>
    <button onClick={()=>{
      addCounter()
    }}>
      +
    </button>
    <p>{counterValue}</p>
    <button onClick={()=>{
      substractCounter()
    }}>
      -
    </button>
    </>
  )

}

export default App

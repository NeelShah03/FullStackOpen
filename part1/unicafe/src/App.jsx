import { useState } from 'react'

const Header=(props)=>{
  return(
  <h1>{props.name}</h1>
  )
}

const Statistics=(props)=>{
  
  return(
  <div>
  <StasticLine text= {props.Good} value= {props.goodValue}/>
  <StasticLine text={props.Neutral} value={props.neutralValue}/>
  <StasticLine text={props.Bad} value={props.badValue}/>
  <StasticLine text={props.All} value={props.allValue}/>
  <StasticLine text={props.Average} value={props.averageValue}/>
  <StasticLine text={props.Positive} value={props.positiveValue}percent={props.percent}/>
  </div>
  )
}
const StasticLine=(props)=>{
  return(
    <p>{props.text} {props.value} {props.percent}</p>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)
  const [average,setAverage]=useState(0)
  const [positive,setPositive]=useState(0)
  const [showStatistics, setShowStatistics] = useState(false)

  const handleGoodClick=()=>{
    const updatedGood=good+1
    setGood(updatedGood)
    updateStatistics(updatedGood,neutral,bad)
  }

  
  const handleNeutralClick=()=>{
    const updatedNeutral=neutral+1
    setNeutral(updatedNeutral)
    updateStatistics(good,updatedNeutral,bad)
  }

  const handleBadClick=()=>{
    const updatedBad=bad+1
    setBad(updatedBad)
    updateStatistics(good,neutral,updatedBad)
  }
  const updateStatistics = (updatedGood, updatedNeutral, updatedBad) => {
    const total=updatedGood+updatedNeutral+updatedBad
    const avg=((updatedGood * 1) + (updatedNeutral * 0) + (updatedBad * (-1))) / total
    const pos= (updatedGood / total) * 100
    setAll(total)
    setAverage(avg)
    setPositive(pos)
    setShowStatistics(true)
  }



  return (
    <div>
      <Header name='Give Feedback'/>
      <Button handleClick={handleGoodClick} text='Good'/>
      <Button handleClick={handleNeutralClick} text='Neutral'/>
      <Button handleClick={handleBadClick} text='Bad'/>
      <Header name='Statistics'/>
      {!showStatistics && <p>No feedback given yet.</p>}
      {showStatistics && // Render statistics only when feedback is gathered
      <table>
      <tbody>
      <tr>
       <td><Statistics Good='Good' goodValue={good}/></td>
      </tr>
      <tr>
        <td><Statistics Neutral='Neutral' neutralValue={neutral}/></td>
      </tr>
      <tr>
        <td><Statistics Bad='Bad' badValue={bad}/></td>
      </tr>
      <tr>
        <td><Statistics All='All'  allValue={all}/></td>
      </tr>
      <tr>
        <td><Statistics Average='Average' averageValue={average}/> </td>
      </tr>
      <tr>
        <td><Statistics Positive='Positive' positiveValue={positive} percent='%' /></td>
      </tr>
      </tbody>
      </table>
      }
      </div>
  )
}

export default App
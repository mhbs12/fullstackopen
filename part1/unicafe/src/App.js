import { useState } from 'react'

const Button = ({clickHandle, text}) => (
  <button onClick={clickHandle}> {text} </button>

)
const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)
const Statistics = (props) => {
  if (props.total === 0){
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text = "good" value = {props.good}/>
          <StatisticLine text = "neutral" value = {props.neutral}/>
          <StatisticLine text = "bad" value = {props.bad}/>
          <StatisticLine text = "all" value = {props.total}/>
          <StatisticLine text = "average" value = {(props.good - props.bad)/props.total}/>
          <StatisticLine text = "positive" value = {(props.good)/props.total*100 + " %"}/>
        </tbody>
      </table>
    </div>

    
  )
}
const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button clickHandle={() => setGood(good + 1)} text="good"/>
        <Button clickHandle={() => setNeutral(neutral + 1)} text="neutral"/>
        <Button clickHandle={() => setBad(bad + 1)} text="bad"/>
        <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total}/>
      </div>
    </>
  )
}

export default App

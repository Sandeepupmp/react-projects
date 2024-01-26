import { useState } from 'react'
import Data from './Data'

function App() {
  const [count , setCount] = useState(0)
  const [text , setText] = useState([])

  const handleSubmit = (e)=>{
  e.preventDefault()
  let amount  = parseInt(count)
  if(amount <= 0){
    amount = 1
  }
  if(amount >8){
    amount = 8
  }
  setText(Data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>Lorem text Genrator By Sandeep</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
     <label htmlFor="amount"> Paeragraph :</label>
     <input type="number" id='amount'  name='amount' value={count} onChange={(e)=>setCount(e.target.value)} max={8} min={0}/>
     <button type='submit' className='btn'> Genrat</button>
     </form>
     <article className='lorem-text'>
    {text.map((text , index)=>{
      return(
        <p key={index} > {text}</p>
      )
    })}
     </article>
    </section>
  )
}

export default App

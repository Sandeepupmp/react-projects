import { useState } from "react"
import SingleColor from "./SingleColor"
import Values from 'values.js'


function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("#f15025").all(5))

  const handleSubmit = (e)=>{
    e.preventDefault()
   
    try {
      let colors = new Values(color).all(5)
      setList(colors)
      
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <>
    <section className="container">
      <h3>Color Generator by Sandeep</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="color" id="color"  value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#f2323e"
        className={`${error ? "error" :null}`
      
      }
        />
        <button type="submit" className="btn">Submit</button>
      </form>

    </section>
    <section className="colors">
     {list.map((color, index)=>{
      console.log(color)
      return(
        
        <SingleColor key={index} {...color} index={index}/>
      )
     })}
    </section>
    </>
  )
}

export default App

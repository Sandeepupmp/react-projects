import { useState } from "react"
import Data from "./Data"

function App() {
  const [people, setPeople] = useState(Data)
  const [index, setIndex] = useState(0)

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person , peopleIndex)=>{
          const {id, name, image,title ,quote} = person
          return(
               <article key={id}>
                <img src={image} alt={name} className="person-img"/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
               </article>
          )
        })}
      </div>
    </section>
  )
}

export default App

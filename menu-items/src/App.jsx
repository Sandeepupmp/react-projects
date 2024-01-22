import { useState } from 'react'
import Categorize from './Categorize'
import Data from './Data'
import Menu from './Menu'

function App() {
  const [menuItems, setMenuItems] = useState(Data)
  const [categorize, setCategorize] = useState([])

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categorize/>
        <Menu item={menuItems}/>

      </section>

    </main>
  )
}

export default App

import { useState } from 'react'
import Categorize from './Categorize'
import Data from './Data'
import Menu from './Menu'

const allCategorig = ['new', 'all', ...new Set( Data.map((item)=>item.category) )]

function App() {
  const [menuItems, setMenuItems] = useState(Data)
  const [categorize, setCategorize] = useState(allCategorig)

  const filterItems = ((category)=>{
    if(category === 'all'){
      setMenuItems(Data)
      return
    }
    const newItem = Data.filter((item)=>item.category === category)
    setMenuItems(newItem)

  })

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categorize categorize={categorize} filterItems={filterItems}/>
        <Menu item={menuItems}/>

      </section>

    </main>
  )
}

export default App

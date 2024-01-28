
import { useState } from "react"
import Alert from "./Alert"
import List from "./List"
function App() {
  const [name, setName]= useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false)
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(!name){
      showAlert(true, "danger", "plese inter value")
    }else if(name && isEditing){

    }else{
      showAlert(true, "success" , "item added babby")
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list , newItem])
      setName('')
    }
  }
  const showAlert = (show=false , type="", msg= "")=>{
              setAlert({show, type ,msg})
  }
  const clearList = ()=>{
    showAlert(true, "danger", 'List has been Emty')
    setList([])
  }
  const removeItem = (id)=>{
   showAlert(true, 'danger', 'Item has been removed')
   setList(list.filter((item)=>i))
  }
  
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>Grocery - Bag</h3>
        <div className="form-control">
          <input type="text" 
          className="grocery"
          placeholder="E.g. Eggs "
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing? 'edit' : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
        <List items={list}/>
        <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>

      )}
      
      
    </section>
  )
}

export default App

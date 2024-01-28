import { FaEdit ,FaTrash } from "react-icons/fa";
function List({items}) {
  return(
    <div className="grocery-list">
     {items.map((item)=>{
      const {id, title} = item
      return(
        <article key={id} className="grocery-item">
          <p className="title">{title}</p>
          <div className="button-container">
            <button type="button" className="edit-btn">
              <FaEdit/>
            </button>
            <button type="buttton" className="delete-btn">
              <FaTrash/>
            </button>
          </div>

        </article>
      )
     })}
     </div>
  )
}
export default List
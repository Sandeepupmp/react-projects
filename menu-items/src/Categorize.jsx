function Categorize({ categorize, filterItems}) {
  return (
    <div className="btn-container">
       {categorize.map((category ,index)=>{
       return(
        <button type="button" key={index} onClick={()=>filterItems(category)} className="filter-btn">{category}

        </button>
       )

       })}
    </div>
  )
}
export default Categorize